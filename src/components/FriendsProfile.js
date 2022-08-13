import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { deleteRequest, sendFriendRequest } from './../store/friend';
function FriendsProfile(props) {
    const { profileImage, nickname, id } = props;
    const [isRequest, setIsRequest] = useState(false);
    const onRequestHandler = async (targetUserId) => {
        await sendFriendRequest(targetUserId)
            .then((r) => {
                setIsRequest(true);
                console.log(`${nickname} 유저에게 친구요청을 보냈습니다`);
            })
            .catch((e) => {
                alert(`❗친구요청실패❗${e}`);
            });
    };
    const onCancelHandler = async (targetUserId) => {
        await deleteRequest(targetUserId).then((r) => {
            setIsRequest(false);
            console.log('친구 요청 철회');
        });
    };
    return (
        <div className="FriendsProfileBox">
            <div>
                {profileImage && (
                    <img src={profileImage} width="100px" height="100px" />
                )}
            </div>
            <p>{nickname}</p>
            {!isRequest ? (
                <button
                    onClick={() => {
                        onRequestHandler(id);
                    }}
                >
                    💌친구요청하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler(id);
                    }}
                >
                    ❌요청취소하기
                </button>
            )}
        </div>
    );
}

export default FriendsProfile;
