import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyFriendsProfile from '../components/MyFriendsProfile';
import { AuthContext } from '../Context/auth';
import { getFriendList, deleteFriend } from '../store/friend';
import styled from 'styled-components';
import { PageDiv } from '../components/Styled/PageDiv';
import { SearchBox } from '../components/Common/SearchBox';
import { friendummylist } from '../store/temp/tempFriendsData';
const Friends = () => {
    const [allFriendsList, setAllFriendsList] = useState(friendummylist);

    useEffect(() => {
        getFriendList().then((res) => {
            setAllFriendsList(res.data);
        });
    }, []);

    return (
        <PageDiv>
            <h1 className="friendsheader">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    {' '}
                    My Friends{' '}
                </a>
            </h1>
            <div style={{ display: 'flex' }}>
                <Link key="SearchFriend" to="/search-friend">
                    <Button>🔍　친구 추가 하러가기</Button>
                </Link>

                <Link key="requestFriends" to="/request-friends">
                    <Button>📩　친구 요청 확인하기</Button>
                </Link>
                <Link key="blockFriends" to="/block-friends">
                    <Button>💔　차단 친구 목록</Button>
                </Link>
            </div>
            📑{allFriendsList.length}명의 친구가 있습니다
            {/*<SearchBox onChange={onChange} placeholder="친구의 닉네임을 입력하세요"/>*/}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allFriendsList
                    ? allFriendsList.map((user) => {
                          return (
                              <>
                                  <MyFriendsProfile
                                      allFriendsList={allFriendsList}
                                      setAllFriendsList={setAllFriendsList}
                                      key={user.id}
                                      user={user}
                                  />
                              </>
                          );
                      })
                    : '친구 목록이 비어있습니다'}
            </div>
        </PageDiv>
    );
};

export default Friends;

export const Button = styled.button`
    width: 250px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;
