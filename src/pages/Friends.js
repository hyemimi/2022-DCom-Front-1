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
    const friendummylist = [
        // dummy
        // 이후 allFriendsList로 바꾸기
        {
            id: 1,
            motto: '파이팅!!!',
            name: '정혜인',
            nickname: '혠',
            profileImage: 'https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg',
        },
        {
            id: 2,
            motto: '열공중!',
            name: '정지원',
            nickname: '원',
            profileImage: 'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
        },
        {
            id: 3,
            motto: '열심히!',
            name: '이혜미',
            nickname: '혬',
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }
    ];

    const [allFriendsList, setAllFriendsList] = useState();

    useEffect(()=>{
        getFriendList()
        .then((res) => {
            setAllFriendsList(res.data);
        });
    },[])

    return (
        <PageDiv>
            <h1 className="friendsheader">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    {' '}My Friends{' '}
                </a>
            </h1>
            <div style={{ display: 'flex' }}>
                <Link key="SearchFriend" to="/search-friend">
                    <Button>
                        🔍　친구 추가 하러가기
                    </Button>
                </Link>

                <Link key="requestFriends" to="/request-friends">
                    <Button>
                        📩　친구 요청 확인하기
                    </Button>
                </Link>
            </div>
            📑{friendummylist.length}명의 친구가 있습니다
            {/*<SearchBox onChange={onChange} placeholder="친구의 닉네임을 입력하세요"/>*/}
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {friendummylist
                    ? friendummylist.map((user) => {
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
