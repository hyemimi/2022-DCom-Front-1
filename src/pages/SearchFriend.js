import React, { useEffect, useState, useRef, Component } from 'react'
import FriendsProfile from '../components/FriendsProfile'
import App from '../App'
import FriendsProfileList from '../components/FriendsProfileList'

const SearchFriend = ({users}) => {
  const [searchText, setSearchText] = useState()

  
  const onSearch = () => {
    console.log(searchText)
    //const searchednickname = users.filter((val) => (searchText === val.nickname))
    // const result = users.filter((it) =>it.nickname === searchText)
    // return(result)
  }


  const onPressEnter = (e) => {
    if (e.key == 'Enter') {
      onSearch()
    }
  }

  const filteredFriend = users.filter((users) => {
    if(searchText === "" || searchText === null)
      return ("검색 결과 없음")
    else
      return users.nickname.includes(searchText);
  })

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
        <FriendsProfileList key={users.id} data={filteredFriend}/>
        
      </div>
    </>
  )
}

export default SearchFriend