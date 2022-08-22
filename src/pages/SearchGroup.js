// @ts-ignore
import React, { useEffect, useState, useRef, Component } from 'react';
import { SearchBox } from '../components/Common/SearchBox';
import SearchGroupItem from '../components/SearchGroupItem';
import { PageDiv } from '../components/Styled/PageDiv';
import { fetchAllGroupList } from '../store/group';
import axios from 'axios';

const SearchGroup = () => {
    // grouplist 채워지면 1,2,3
    // 1. useState([])로 바꾸기
    const [allGroupList, setAllGroupList] = useState([]);
    const [searchedGroupList, setSearchedGroupList] = useState([]);
    const [searchText, setSearchText] = useState('');

    // 2. 주석 되어있는 부분 주석 취소하기
    useEffect(() => {
        fetchAllGroupList().then((res) => {
            console.log(res);
            setAllGroupList(res.data);
            setSearchedGroupList(res.data);
        });
    }, []);

    // 3. filter 앞 groups대신 allGroupList로 바꾸기
    useEffect(() => {
        const filteredGroup = allGroupList.filter((group) => {
            if (searchText === '' || searchText === null) { return group; } else { return group?.name?.includes(searchText); }
        });
        setSearchedGroupList(filteredGroup);
    }, [searchText]);

    const onSearch = (e) => {
        setSearchText(document.getElementById('inputvalue')?.value);
    };

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
          onSearch();
        }
    };

    return (
    <PageDiv>
      <SearchBox
          placeholder={'그룹 이름을 입력하세요'}
          onKeyPress={onPressEnter}
          onClick={onSearch}
      />
      {searchedGroupList.length === 0
        ? <div> 표시할 그룹이 없습니다 </div>
        : <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {searchedGroupList && searchedGroupList.map((group) => (
          <SearchGroupItem
              key={group.id}
              group={group}
              buttontext="탈퇴하기"
          />
          ))}
        </div>
}

    </PageDiv>
    );
// @ts-ignore
};

export default SearchGroup;
