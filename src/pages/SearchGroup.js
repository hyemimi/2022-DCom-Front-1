import React, { useEffect, useState, useRef, Component } from 'react'
import GroupItem from '../components/GroupItem'
import App from '../App'
import FriendsProfileList from '../components/FriendsProfileList'
import GroupItemList from '../components/GroupItemList'
import GroupButton from '../components/GroupButton'

const SearchGroup = ({studyList, setStudyList}) => {
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

  const filteredGroup = studyList.filter((studyList) => {
    if(searchText === "" || searchText === null)
      return ("검색 결과 없음")
    else
      return studyList.name.includes(searchText);
  })

  return (
    <>
      <div className="content">
        <div className="SearchPage">
          <div className="searchBox">
            <input
              type="text"
              placeholder="그룹명을 입력하세요."
              onChange={(e) => { setSearchText(e.target.value) }}
              onKeyPress={onPressEnter}
            />
            <button className="searchBtn" onClick={onSearch}>
              🔍
            </button>
          </div>
        </div>
        <GroupItemList key={studyList.studyId} data={filteredGroup}/>
      </div>
    </>
  )
}

export default SearchGroup