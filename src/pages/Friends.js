import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import FriendsProfile from '../components/FriendsProfile'
import SideMenu from '../Layout/SideMenu'

const Friends = ({ postList, onEdit, columns, my_friend }) => {
  return (
        <>
            <div className="content">
              <h1 className='friendsheader'> My Friends </h1>

              <div className='friendsAdd'>
                <Link
                  key='SearchFriend'
                  to='searchFriend'>
                  <button className='friendsAddBtn'>🔍　친구 추가 하러가기</button>
                </Link>
              </div>
              
              <div className='FriendsProfileBoxes'>
                {my_friend.map((it) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                    <FriendsProfile image={it.image} name={it.name} nickname={it.nickname} email={it.email} />
                    <button className='friendsDeleteButton'>친구 삭제</button>
                    </div>
                  )
                })}
                </div>
            </div>
          </>
  )
}

export default Friends
