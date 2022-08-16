import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import { blcokRequest, deleteFriend } from './../store/friend';
import { Box } from '../components/Styled/Box';

function RequestUserProfile ({user}) {
    const { profileImage, name, motto, nickname, id } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();
    const auth = useAuth();

    return (
        <Box theme={theme} width="200px" height="300px">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '130px', maxHeight: '130px', vericalAlgin: 'center', }}>
                {profileImage && (
                    <img src={profileImage} width="150px" height="100px" />
                )}
            </div>
            <div style={{fontSize: '20px', fontWeight: 'bold', paddingTop: '15px'}}>{nickname}</div>
            <div style={{fontSize: '15px'}}>{name}</div>
            <div style={{fontSize: '10px', paddingBottom: '15px'}}>{motto}</div>
        </Box>
    );
}

export default RequestUserProfile;
