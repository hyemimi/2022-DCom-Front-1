import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../Layout/SideMenu'

//const [my_friend, setMyFriend] = React.useState(my_friend);
const Friends = ({  postList, onEdit, columns, my_friend }) => {


  
  return (
        <>
           
            <div className="content">
              <h1 className='friendsheader'> My Friends </h1>
              <div className='friendsSearchBox'>
                <input
                  type="text"
                  placeholder="내 친구의 이름을 검색하세요."
                />
                <button className="friendsSearchBtn">
                  🔍
                </button>
              </div>
              <div className='friendsAdd'>
                <Link
                  key='search'
                  to='search'>
                  <button className='friendsAddBtn'>친구 추가 하러가기</button>
                </Link>
              </div>
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
                              <td><button className='friendsDeleteButton'>친구 삭제</button></td>
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
