import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth';
import styled from 'styled-components';

const TopMenu = () => {
    const auth = useContext(AuthContext);

    return (
    <div className="TopMenu">
      <NavBarDiv>
          <Link to="/">
              <div className="logo" style={{ color: '#ffc83d' }}>
                FOCUZ
              </div>
          </Link>  
        <button className="light">{auth.isLoggedIn ? auth.user.nickname : '로그인'}</button>
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
`