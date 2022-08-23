import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../Context/auth';

const MyInfoDiv = styled.div`
    text-align: center;
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
    const { profileImage, name, nickname, motto } = user;

    return (
        <div className="Profile">
            <p className='line'></p>
            <h1 style={{fontSize: '24px', textAlign: 'center', fontWeight: 'bold'}}>MY PROFILE</h1>
            <div>
                {profileImage ? (
                        <img src={profileImage} width="300px" height="300px" />
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
            
            
        </div>
    );
}

export default MyProfile;
