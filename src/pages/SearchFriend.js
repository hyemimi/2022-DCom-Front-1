import React, { useState, useEffect } from 'react';
import { fetchAllUserList } from '../store/user';
import { SearchBox } from '../components/Common/SearchBox';
import FriendsProfile from '../components/FriendsProfile';
import styled from 'styled-components';
import { PageDiv } from '../components/Styled/PageDiv';
const SearchFriend = () => {
    // App.js에서 주입(Provide)한 context정보 받아오기
    // @ts-ignore
    const [allUserList, setAllUserList] = useState([]);
    const [searchUserList, setSearchedUserList] = useState([]);
    const [searchText, setSearchText] = useState("");

    // 모든 유저 정보 API Call
    useEffect(() => {
        fetchAllUserList().then((res) => {
            setAllUserList(res.data);
        });
    }, []);

    useEffect(() => {
        // @ts-ignore

        const filteredFriend = allUserList.filter((user) => {
            if(searchText === "" || searchText === null)
              return (null)
            else
              return user?.nickname?.includes(searchText);
          })

        // @ts-ignore
        setSearchedUserList(filteredFriend);
    }, [searchText]);



    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
          onSearch()
        }
      }
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onSearch = (e) => {
        setSearchText(document.getElementById('inputvalue')?.value);
        console.log(searchText)
        //const searchednickname = users.filter((val) => (searchText === val.nickname))
        // const result = users.filter((it) =>it.nickname === searchText)
        // return(result)
      }

    return (
        <PageDiv>
            <SearchBox
                placeholder={'친구의 닉네임을 입력하세요'}
                onKeyPress={onPressEnter}
                onClick={onSearch}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {searchUserList.map((user) => (
                    // @ts-ignore
                    <FriendsProfile key={user.id} user={user} />
                ))}
            </div>
            {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredFriend.length}
                paginate={paginate}
            /> */}
        </PageDiv>
    );
};

export default SearchFriend;
