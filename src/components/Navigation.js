import React from "react";
import { Link } from "react-router-dom";
import TopMenu from "../Layout/TopMenu";
import SideMenu from "../Layout/SideMenu";


const Navigation = ({isLoggedIn,setIsLoggedIn,activeMenu,setActiveMenu}) => {
  return (
    <nav>
       <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
       {isLoggedIn && <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}
    </nav>
  );
};

export default Navigation;
