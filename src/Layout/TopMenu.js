import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth';
import styled from 'styled-components';

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
                        FOCUZ
                    </div>
                </Link>
                {auth.isLoggedIn ? (
                    <button onClick={onProfileHandler} className="light">
                        {auth.user.nickname}
                    </button>
                ) : (
                    <button className="light">로그인</button>
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
