import React, { useEffect, useState, useRef } from 'react'
import SideMenu from '../Layout/SideMenu'

const Friends = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  return (
        <>
            <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="content">
                <h1> 친구 리스트 페이지입니다. </h1>
            </div>
        </>
  )
}

export default Friends
