import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyFriendsProfile from '../components/MyFriendsProfile';
import { AuthContext } from '../Context/auth';
import { getFriendList, deleteFriend } from '../store/friend';
import FriendsProfile from '../components/FriendsProfile';
import styled from 'styled-components';
import { PageDiv } from './SearchFriend';
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
            <h1 className="friendsheader"> My Friends </h1>
            <div style={{ display: 'flex' }}>
                <Link key="SearchFriend" to="/search-friend">
                    <Button className="friendsAddBtn">
                        🔍　친구 추가 하러가기
                    </Button>
                </Link>

                <Link key="requestFriends" to="/request-friends">
                    <Button className="friendsAddBtn">
                        📩　친구 요청 확인하기
                    </Button>
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
