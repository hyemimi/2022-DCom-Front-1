import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyFriendsProfile from '../components/MyFriendsProfile';
import { AuthContext } from '../Context/auth';
import { getFriendList, deleteFriend } from '../store/friend';
import FriendsProfile from '../components/FriendsProfile';
import styled from 'styled-components';
import { SearchBox } from '../components/Common/SearchBox';

const Friends = () => {
    const auth = useContext(AuthContext);
    const [allFriendsList, setAllFriendsList] = useState();

    useEffect(()=>{
        getFriendList()
        .then((res) => {
            setAllFriendsList(res.data);
        });
    },[])

    return (
        <PageDiv>
            <div className="content">
                <h1 className="friendsheader"> My Friends </h1>

                <div className="friendsAdd">
                    <Link key="SearchFriend" to="/search-friend">
                        <button className="friendsAddBtn">
                            🔍　친구 추가 하러가기
                        </button>
                    </Link>

                    <Link key="requestFriends" to="/request-friends">
                        <button className="friendsAddBtn">
                            📩　친구 요청 확인하기
                        </button>
                    </Link>
                </div>

            {/*<SearchBox onChange={onChange} placeholder="친구의 닉네임을 입력하세요"/>*/}
                <div className="FriendsProfileBoxes" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {allFriendsList
                        ? allFriendsList.map((it) => {
                              return (
                                  <>
                                    <MyFriendsProfile key={user.id}
                                                    user={user} />
                                  </>
                              );
                          })
                        : '친구 목록이 비어있습니다'}
                </div>
            </div>
        </PageDiv>
    );
};

export default Friends;


const PageDiv = styled.div`
    display: flex; flex-direction: column; align-items: center; gap: 1em;
`