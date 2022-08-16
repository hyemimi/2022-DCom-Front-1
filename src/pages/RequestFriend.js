import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import { Link } from 'react-router-dom';
import RequestFriendBox from '../components/RequestFriendBox';
import { Button } from './Friends';

const RequestFriend = () => {
    const [allRequest, setAllRequest] = useState();
    useEffect(() => {
        // 모든 친구요청 API CALL
        fetchAllRequest()
            .then((res) => {
                console.log('all requests', res.data);
                setAllRequest(res.data);
            })
            //추후 지우기 dummy
            .catch(
                setAllRequest([
                    {
                        id: 4,
                        motto: '열심히할래',
                        name: '이혜미',
                        nickname: '미미혬',
                        profileImage: null,
                    },
                    {
                        id: 5,
                        motto: 'ㅇㅇㅇ',
                        name: '정혜인',
                        nickname: 'ㅎㅎㅎ',
                        profileImage: null,
                    },
                ])
            );
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
                          <RequestFriendBox key={user.id} user={user}></RequestFriendBox>
                      );
                  })
                : '비어있습니다'}

        </PageDiv>
    );
};

export default RequestFriend;
