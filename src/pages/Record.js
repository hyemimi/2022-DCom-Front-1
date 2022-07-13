import React, { useEffect, useState, useRef } from "react";
import SideMenu from "../Layout/SideMenu";

const Record = ({ activeMenu, setActiveMenu, postList, onEdit }) => {

    return (
        <>
            <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="content">
                <h1> 분석 페이지입니다. </h1>
            </div>
        </>
    );
};

export default Record;
