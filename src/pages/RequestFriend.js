import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import RequestProfile from '../components/RequestProfile';

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
            {allRequest
                ? allRequest.map((user, idx) => {
                      return (
                          <RequestProfile
                              key={idx}
                              id={user.id}
                              user={user}
                              message={'친구'}
                          />
                      );
                  })
                : '비어있습니다'}
        </PageDiv>
    );
};

export default RequestFriend;
