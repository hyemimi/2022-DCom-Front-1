import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../Context/auth';
import { PageDiv } from './Styled/PageDiv';
import { Box } from './Styled/Box';
import { Link } from 'react-router-dom';

const MyInfoDiv = styled.div`
    text-align: center;
    font-weight: bold;
    > *:nth-child(1) {
        font-size: 24px;
    }
    > *:nth-child(1) {
        font-size: 18px;
    }
    > *:nth-child(1) {
        font-size: 24px;
    }
`;
const Button = styled.button`
    width: ${(props) => (props.btn ? '230px' : '450px')};
    height: 100px;
    padding: 10px 20px;
    background-color: ${(props) => props.color};
    border-radius: 0px;

    font-size: 30px;
`;

function MyProfile() {
    const auth = useAuth();
    const { user } = auth;
    const { profileImage, name, nickname, motto } = user;

    return (
        <PageDiv>
            <h1 className="friendsheader">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    My Page
                </a>
            </h1>
            <div>
                <Box>
                    {profileImage ? (
                        <img src={profileImage} width="300px" height="300px" />
                    ) : (
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            width="300px"
                            height="300px"
                        />
                    )}

                    <div>
                        {name} ({nickname})
                    </div>
                    <p>{motto && `motto : ${motto}`}</p>
                </Box>
            </div>
            <div>
                <Link key="groups" to="/groups">
                    <Button btn>그룹 관리하기</Button>
                </Link>
                <Link key="friends" to="/friends">
                    <Button btn>친구 관리하기</Button>
                </Link>
            </div>
        </PageDiv>
    );
}

export default MyProfile;
