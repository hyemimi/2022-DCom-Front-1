import React from "react";
import { Link } from "react-router-dom";
import TopMenu from "../Layout/TopMenu";

const Navigation = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <nav>
       <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </nav>
  );
};

export default Navigation;
