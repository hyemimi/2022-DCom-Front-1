import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import {
    blcokRequest,
    blockdeleteRequest,
    deleteFriend,
} from './../store/friend';
import { Box } from '../components/Styled/Box';

function RequestUserProfile({ user, buttontext }) {
    const { profileImage, name, motto, nickname, id } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();
    const auth = useAuth();
    const cancelBlocking = (targetUserId) => {
        if (confirm('차단을 취소하시겠습니까?')) {
            blockdeleteRequest(targetUserId);
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
            <div style={{ fontSize: '15px' }}>{name}</div>
            <div style={{ fontSize: '10px', paddingBottom: '15px' }}>
                {motto}
            </div>
            <div>
                {buttontext && (
                    <button
                        onClick={() => {
                            cancelBlocking(id);
                        }}
                    >
                        {buttontext}
                    </button>
                )}
            </div>
        </Box>
    );
}

export default RequestUserProfile;
