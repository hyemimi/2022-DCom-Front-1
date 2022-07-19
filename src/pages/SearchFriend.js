import React, { useEffect, useState, useRef, Component } from 'react'
import FriendsProfile from '../components/FriendsProfile'
import users from '../App'

const SearchFriend = ({ postList }) => {
  const textBox = useRef()
  const [searchText, setSearchText] = useState(null)

  const onSearch = () => {
    console.log(searchText)
    users.filter((val) => {
      if(val.nickname.includes(searchText)){
        return val
    }
  }).map((val) =>{
    return(
    <div>
      <ul>
        <li>
          <span>{val.nickname}</span>
        </li>
      </ul>
    </div>
    )
  })}


  const onPressEnter = (e) => {
    if (e.key == 'Enter') {
      onSearch()
    }
  }

  return (
    <>
      <div className="content">
        <div className="SearchPage">
          <div className="searchBox">
            <input
              type="text"
              placeholder="검색할 내용을 입력하세요."
              onChange={(e) => { setSearchText(e.target.value) }}
              onKeyPress={onPressEnter}
            />
            <button className="searchBtn" onClick={onSearch}>
              🔍
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchFriend
