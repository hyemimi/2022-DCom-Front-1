import React, { useEffect, useState, useRef } from 'react'
import SideMenu from '../Layout/SideMenu'

const FriendSearch = ({postList}) => {
  

  const textBox = useRef()
  const [searchText, setSearchText] = useState(null)

  const onSearch = () => {
    setSearchText(textBox.current.value)
    console.log(textBox.current.value)
  }

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
              ref={textBox}
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

export default FriendSearch
