import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect } from 'react';

const RequestFriend = () => {
    const [allRequest, setAllRequest] = useState();
    const onClick = (targetUserId) => {
        acceptFriend(targetUserId);
        alert('친구 추가 완료!');
    };

    useEffect(() => {
        // 모든 친구요청 API CALL
        fetchAllRequest().then((res) => {
            console.log('all requests', res.data);
            setAllRequest(res.data);
        });
    }, []);
    return (
        <div className="content">
            {allRequest
                ? allRequest.map((it) => {
                      return (
                          <div>
                              {`${it.name}님이 친구 요청을 보내셨습니다`}
                              <button
                                  onClick={() => {
                                      onClick(it.id);
                                  }}
                              >
                                  수락하기
                              </button>
                          </div>
                      );
                  })``
                : '비어있습니다'}
        </div>
    );
};

export default RequestFriend;
