import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth';
import styled from 'styled-components';
import logo from './image/FOCUZ.png';
import { KAKAO_OAUTH_URL } from '../../env';

const TopMenu = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const onProfileHandler = () => {
        navigate('/my-profile');
    };

    return (
        <div className="TopMenu">
            <NavBarDiv>
                <Link to="/">
                    <div className="logo" style={{ color: '#ffc83d' }}>
                        <img src={logo} />
                    </div>
                </Link>
                {auth.isLoggedIn ? (
                    <button onClick={onProfileHandler} className="light">
                        {auth.user.nickname}
                    </button>
                ) : (
                    <a href={KAKAO_OAUTH_URL}>
                        <button className="light">로그인</button>
                    </a>
                )}
            </NavBarDiv>
        </div>
    );
};

export default TopMenu;

const NavBarDiv = styled.div`
    display: flex;
    background-color: inherit;
    margin-right: 1em;
    align-items: center;
    justify-content: space-between;
`;
