import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../Context/auth';

const MyInfoDiv = styled.div`
    text-align: left;
    font-weight: bold;
    >*:nth-child(1){
        font-size: 24px;
    }
    >*:nth-child(1){
        font-size: 18px;
    }
    >*:nth-child(1){
        font-size: 24px;
    }
`

function MyProfile() {
    const auth = useAuth();
    const {user} = auth;
    const { image, name, nickname, motto } = user;
    
    return (
        <div className="Profile">
            {image ? (
                    <img src={image} width="300px" height="300px" />
                ) : (
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        width="300px"
                        height="300px"
                    />
                )}
            <MyInfoDiv>
                <div>{name} ({nickname})</div>
                <p>{motto && `motto : ${motto}`}</p>
            </MyInfoDiv>
        </div>
    );
}

export default MyProfile;
