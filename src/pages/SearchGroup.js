import React, { useEffect, useState, useRef, Component } from 'react'
import { fetchAllGroupList} from '../store/group'
import { PageDiv } from '../components/Styled/PageDiv'
import { SearchBox } from '../components/Common/SearchBox'
import SearchGroupItem from '../components/SearchGroupItem'

export const groups = [
  // dummy
  // groups 페이지에서 이후 auth.user.groups로 바꾸기
  {
      description: '파이썬공부해요',
      id: 1,
      name: '파이썬스터디',
      users: [
          {
              id: 2,
              motto: 'string',
              name: '정지원',
              nickname: '손님',
              profileImage: null,
          },  
      ],
  },
  {
      description: 'react',
      id: 2,
      name: 'React',
      users: [
        {
            id: 2,
            motto: 'string',
            name: '정지원',
            nickname: '손님',
            profileImage: null,
        },  
    ],
  }]
const SearchGroup = () => {
  //grouplist 채워지면 1,2,3
  //1. useState([])로 바꾸기
  const [allGroupList, setAllGroupList] = useState(groups)
  const [searchedGroupInfo, setSearchedGroupInfo] = useState([])
  const [searchText, setSearchText] = useState("")  

//2. 주석 되어있는 부분 주석 취소하기
  //   useEffect(() => {
  //     fetchAllGroupList().then((res) => {
  //         setAllGroupList(res.data);
  //     });
  // }, []);

//3. filter 앞 groups대신 allGroupList로 바꾸기
    useEffect(() => {
      const filteredGroup = allGroupList.filter((group) => {
          if(searchText === "" || searchText === null)
            return group
          else
            return group?.name?.includes(searchText);
        })
      setSearchedGroupInfo(filteredGroup);
    }, [searchText]);

    const onSearch = (e) => {
      setSearchText(document.getElementById('inputvalue')?.value);
    }
  const onPressEnter = (e) => {
    if (e.key == 'Enter') {
      onSearch()
    }
  }

  return (
    <PageDiv>
      <SearchBox
          placeholder={'그룹 이름을 입력하세요'}
          onKeyPress={onPressEnter}
          onClick={onSearch}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {searchedGroupInfo && searchedGroupInfo.map((group)=>(
              <SearchGroupItem
                  key={group.id}
                  group={group} 
                  buttontext="탈퇴하기"
              />
        ))}
        </div>
    </PageDiv>
  )
}

export default SearchGroup