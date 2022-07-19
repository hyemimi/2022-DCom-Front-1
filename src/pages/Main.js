import React, { useEffect } from 'react'
import SideMenu from '../Layout/SideMenu.js'
import { Link } from 'react-router-dom'
import MainPage from '../components/Main/MainPage.js'
import InitialPage from '../components/Main/InitialPage'

const Main = ({  isLoggedIn, setIsLoggedIn,userObj ,users}) => {

  return (
    <>
      <div className="content">
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

export default Main
