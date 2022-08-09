import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/auth';

const TopMenu = () => {
  const auth = useContext(AuthContext);

    console.log(auth);
  return (
    <div className="TopMenu">
      <div className="nav-bar">
        <Link to="/">
            <div className="logo" style={{ color: '#ffc83d' }}>
            FOCUZ
            </div>
        </Link>

        <button className="loginBtn">{auth.isLoggedIn ? auth.nickname : '로그인'}</button>
      </div>
    </div>
  )
}

export default TopMenu
