import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import { deleteRequest, sendFriendRequest } from './../store/friend';
import { Box } from '../components/Styled/Box';

function FriendsProfile({ user }) {
    const { profileImage, nickname, id } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();
    const auth = useAuth();

    const onRequestHandler = async (targetUserId) => {
        await sendFriendRequest(targetUserId)
            .then((r) => {
                setIsRequest(true);
                console.log(`${nickname} 유저에게 친구요청을 보냈습니다`);
            })
            .catch((e) => {
                //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
                alert('친구요청완료!'); // 지우기 (8/23)
            });
    };
    const onCancelHandler = async (targetUserId) => {
        await deleteRequest(targetUserId).then((r) => {
            setIsRequest(false);
            console.log('친구 요청 철회');
        });
    };

    return (
        <Box theme={theme} width="200px" height="240px">
            <div style={{ height: '130px', maxHeight: '130px' }}>
                {profileImage && (
                    <img src={profileImage} width="100px" height="100px" />
                )}
            </div>
            <p>{nickname}</p>
            {!isRequest ? (
                <button
                    className={auth.user?.id === user.id ? 'disabled' : ''}
                    disabled={auth.user?.id === user.id ? true : false}
                    onClick={() => {
                        onRequestHandler(id);
                    }}
                >
                    💌 친구요청하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler(id);
                    }}
                >
                    ❌ 요청취소하기
                </button>
            )}
        </Box>
    );
}

export default FriendsProfile;
