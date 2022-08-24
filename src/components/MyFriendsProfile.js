import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import { blcokRequest, deleteFriend } from './../store/friend';
import { Box } from '../components/Styled/Box';
import { faAlignCenter } from '@fortawesome/fontawesome-free-solid';

function MyFriendsProfile({ user, allFriendsList, setAllFriendsList }) {
    const { profileImage, name, motto, nickname, id } = user;
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
            setAllFriendsList(
                allFriendsList.filter((friend) => friend.id !== targetUserId)
            );
        }
    };
    return (
        <Box theme={theme} width="200px" height="300px">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '130px',
                    maxHeight: '130px',
                    vericalAlgin: 'center',
                }}
            >
                {profileImage && (
                    <img src={profileImage} width="150px" height="100px" />
                )}
            </div>
            <div
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    paddingTop: '15px',
                }}
            >
                {nickname}
            </div>
            {/*<div style={{fontSize: '15px'}}>{name}</div>*/}
            <div style={{ fontSize: '10px', paddingBottom: '15px' }}>
                {motto}
            </div>
            <button
                className={auth.user?.id === user.id ? 'disabled' : ''}
                disabled={auth.user?.id === user.id ? true : false}
                onClick={() => {
                    onBlockHandler(id);
                }}
            >
                🚫 친구 차단하기
            </button>
            <button
                onClick={() => {
                    onDeleteHandler(id);
                }}
            >
                ❌ 친구 삭제하기
            </button>
        </Box>
    );
}

export default MyFriendsProfile;
