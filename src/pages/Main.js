import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainAfterLogin from '../components/Main/MainAfterLogin.js';
import MainBeforeLogin from '../components/Main/MainBeforeLogin';
import { useAuth } from '../Context/auth.js';

const Main = ({ userObj, users }) => {
    const auth = useAuth();

    return (
    <>
      <div className={auth.isLoggedIn ? '' : 'content'}>
        <div className="MainAfterLogin">
          {auth.isLoggedIn
              ? <MainAfterLogin userObj={userObj} users = {users}/> 
              :<MainBeforeLogin/> }
        </div>
      </div>
    </>
    );
};

Main.propsTypes = {
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func,
    userObj: PropTypes.bool
};

export default Main;
