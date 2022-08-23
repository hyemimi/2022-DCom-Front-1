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
                //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
                setIsRequest(true);
                alert('친구요청완료!'); // 지우기 (8/23)
    };
    const onCancelHandler = () => {
        
            setIsRequest(false);
            alert('친구요청 취소 완료!'); 
        
    };

    return (
        <Box theme={theme} width="200px" height="240px">
            <div style={{ height: '130px', maxHeight: '130px' }}>
                {profileImage && (
                    <div style={{marginTop: '35%' }}><img src={profileImage} width="100px" height="100px" /></div>
                )}
            </div>
            <p>{nickname}</p>
            {!isRequest ? (
                <button
                    className={auth.user?.id === user.id ? 'disabled' : ''}
                    disabled={auth.user?.id === user.id ? true : false}
                    onClick={() => {
                        onRequestHandler();
                    }}
                >
                    💌 친구요청하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler();
                    }}
                >
                    ❌ 요청취소하기
                </button>
            )}
        </Box>
    );
}

export default FriendsProfile;
