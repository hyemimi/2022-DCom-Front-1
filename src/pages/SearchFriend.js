import React, { useEffect, useState, useRef, Component } from 'react'
import FriendsProfile from '../components/FriendsProfile'
import App from '../App'
import FriendsProfileList from '../components/FriendsProfileList'

const SearchFriend = ({users}) => {
  const [searchText, setSearchText] = useState()

  
  const onSearch = (e) => {
    setSearchText(document.getElementById("inputvalue").value)
    console.log(searchText)
  }


  const onPressEnter = (e) => {
    if (e.key == 'Enter') {
      onSearch()
    }
  }

  const filteredFriend = users.filter((users) => {
    if(searchText === "" || searchText === null)
      return (null)
    else
      return users.nickname.includes(searchText);
  })

  return (
    <>
      <div className="content">
        <div className="SearchPage">
          <div className="searchBox">
            {/* <form onSubmit={(e)=> {setSearchText(e.target.value)}}> */}
              <input
                id="inputvalue"
                type="text"
                placeholder="친구의 닉네임을 입력하세요."
                onKeyPress={onPressEnter}
              />
              <button className="searchBtn" onClick={onSearch}>
                🔍
              </button>
            {/* </form> */}
          </div>
        </div>
        <FriendsProfileList key={users.id} data={filteredFriend}/>
        
      </div>
    </>
  )
}

export default SearchFriend