import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect, useContext } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import { Link } from 'react-router-dom';
import RequestFriendBox from '../components/RequestFriendBox';
import { Button } from './Friends';
import { AuthContext } from '../Context/auth';

const RequestFriend = () => {
    const auth = useContext(AuthContext);
    const requestfriendummylist = [
        // dummy
        // 이후 allFriendsList로 바꾸기
        {
            id: 2,
            motto: '파이팅!!!',
            name: '정지원',
            nickname: '독서왕',
            profileImage:
                'https://www.nizform.com/DsImage/DsE/view1/A32/2853.jpg',
        },
        {
            id: 3,
            motto: '열공중!',
            name: '강다현',
            nickname: '희대생',
            profileImage:
                'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
        },
        {
            id: 4,
            motto: '헤헤',
            name: '김나현',
            nickname: '나나',
            profileImage:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
            id: 4,
            motto: '휴',
            name: '박민재',
            nickname: '코딩중',
            profileImage:
                'https://i0.wp.com/jaglo.net/wp-content/uploads/2021/03/%EC%BD%94%EB%94%A9-%EC%82%AC%EC%9D%B4%ED%8A%B8-1.jpg?resize=768%2C432&ssl=1',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '대학가자',
            profileImage:
                'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202105/16/23714614-36d1-4059-9692-b7bfd973d1a7.jpg',
        },
    ];
    const [allRequest, setAllRequest] = useState();
    useEffect(() => {
        // 모든 친구요청 API CALL
        fetchAllRequest()
            .then((res) => {
                console.log('all requests', res.data);
                setAllRequest(res.data);
            })
            //추후 지우기 dummy
            .catch(setAllRequest(requestfriendummylist));
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
                    친구 요청 알림 확인하기{' '}
                </a>
            </h1>
            <div style={{ display: 'flex' }}>
                <Link key="SearchFriend" to="/search-friend">
                    <Button>🔍　친구 추가 하러가기</Button>
                </Link>
            </div>
            {allRequest
                ? allRequest.map((user, idx) => {
                      return (
                          <RequestFriendBox
                              key={user.id}
                              user={user}
                              setAllRequest={setAllRequest}
                              allRequest={allRequest}
                          ></RequestFriendBox>
                      );
                  })
                : '비어있습니다'}
        </PageDiv>
    );
};

export default RequestFriend;
