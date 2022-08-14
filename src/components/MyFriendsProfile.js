import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import { blcokRequest, deleteFriend } from './../store/friend';
import { Box } from '../components/Styled/Box';

function MyFriendsProfile ({user}) {
    const { profileImage, nickname, id } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();
    const auth = useAuth();


    const onBlockHandler = (targetUserId) => {
        blcokRequest(targetUserId);
        alert('친구 차단 완료!');
    }; //
    const onDeleteHandler = async (targetUserId) => {
        if (confirm('친구를 목록에서 삭제하시겠습니까?')) {
            await deleteFriend(targetUserId);
            alert('친구 삭제 완료!');
        }
    };
    return (
        <Box theme={theme} width="200px" height="240px">
            <div style={{height: '130px', maxHeight: '130px'}}>
                {profileImage && (
                    <img src={profileImage} width="100px" height="100px" />
                )}
            </div>
            <p>{nickname}</p>
            <button 
                className={auth.user?.id === user.id ? 'disabled' : ''}
                disabled={auth.user?.id === user.id ? true: false}
                onClick={() => {onBlockHandler(id); }}>
                🚫 친구 차단하기
            </button>
            <button onClick={() => { onDeleteHandler(id);}}>
                ❌ 친구 삭제하기
            </button>
        </Box>
    );
}

export default MyFriendsProfile;
