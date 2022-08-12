import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyProfile from '../components/MyProfile';
import { AuthContext } from '../Context/auth';
import { getFriendList, deleteFriend } from '../store/friend';

const Friends = () => {
    const auth = useContext(AuthContext);
    const [allFriendsList, setAllFriendsList] = useState();

    useEffect(async () => {
        // 모든 친구 리스트 API Call
        await getFriendList()
            .then((res) => {
                console.log('all Friend list', res.data);
                setAllFriendsList(res.data);
            })
            .catch((e) =>
                setAllFriendsList([
                    //dummy
                    {
                        id: 0,
                        motto: '없음음음',
                        name: '이혜미',
                        nickname: '손님',
                        profileImage: null,
                    },
                ])
            );
    }, []);
    const onClick = async (targetUserId) => {
        if (confirm('친구를 목록에서 삭제하시겠습니까?')) {
            await deleteFriend(targetUserId);
        }
    };
    return (
        <>
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

                <div className="FriendsProfileBoxes">
                    {allFriendsList
                        ? allFriendsList.map((it) => {
                              return (
                                  // eslint-disable-next-line react/jsx-key
                                  <>
                                      <MyProfile
                                          image={it.profileImage}
                                          name={it.name}
                                          nickname={it.nickname}
                                          motto={it.motto}
                                      />
                                      <button onClick={() => onClick(it.id)}>
                                          친구 삭제
                                      </button>
                                      {/*  <button className="friendsDeleteButton">
                                          친구 삭제
                                      </button> */}
                                  </>
                              );
                          })
                        : '친구 목록이 비어있습니다'}
                </div>
            </div>
        </>
    );
};

export default Friends;
