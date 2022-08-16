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
                ])
            );
    }, []);
    return (
        <PageDiv>
            {allRequest
                ? allRequest.map((it, idx) => {
                      return (
                          <Box
                              key={it.id}
                              width="800px"
                              height="80px"
                              color="black"
                          >
                              {`${it.nickname}님이 친구 요청을 보내셨습니다`}
                              <button
                                  onClick={() => {
                                      onClick(it.id);
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
