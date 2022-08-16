import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import { Box } from '../components/Styled/Box';

const RequestFriend = () => {
    const [allRequest, setAllRequest] = useState();
    const onClick = (targetUserId) => {
        acceptFriend(targetUserId);
        alert('친구 추가 완료!');
    };

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
                          <Box
                              key={user.id}
                              width="800px"
                              height="80px"
                              color="black"
                              style={{ flexDirection: 'row' }}
                          >
                              <div
                                  style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                  }}
                              >
                                  <img
                                      style={{ width: '100px', height: '50px' }}
                                      src={user.profileImage}
                                  />
                                  {`💙${user.nickname}💙님의 친구 요청`}
                              </div>{' '}
                              <button
                                  onClick={() => {
                                      onAcceptHandler(user.id);
                                  }}
                              >
                                  수락하기
                              </button>
                          </Box>
                      );
                  })
                : '비어있습니다'}
        </PageDiv>
    );
};

export default RequestFriend;
