import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import SideMenu from '../Layout/SideMenu.js'
import { Link } from 'react-router-dom'
import MainPage from '../components/Main/MainPage.js'
import InitialPage from '../components/Main/InitialPage'

const Main = ({  isLoggedIn, setIsLoggedIn,userObj ,users}) => {

  return (
    <>
      <div className={isLoggedIn?'content':''}>
        <div className="MainPage">
          <div>
            {!isLoggedIn
              ? <InitialPage/>
              : <MainPage userObj={userObj}/> }
          </div>
        </div>
      </div>
    </>
  )
}

Main.propsTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
  userObj: PropTypes.bool,
}

export default Main
