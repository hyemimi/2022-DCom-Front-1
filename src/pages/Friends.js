import React, { useEffect, useState, useRef } from 'react'
import SideMenu from '../Layout/SideMenu'

//const [my_friend, setMyFriend] = React.useState(my_friend);
const Friends = ({ activeMenu, setActiveMenu, postList, onEdit, columns, my_friend }) => {
  return (
        <>
            <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="friendscontent">
              <h1 className='friendsheader'> 친구 리스트 페이지입니다. </h1>
              <div className='friendstable'>
                  <table>
                    <thead>
                    <tr>
                        {columns.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                          {my_friend.map(({name, email, phone}) => (
                            <tr key={name + email + phone}>
                              <td>{name}</td>
                              <td>{email}</td>
                              <td>{phone}</td>
                            </tr>                    
                          ))}
                    </tbody>
                  </table>
                </div>
            </div>

        </>
  )
}

export default Friends
