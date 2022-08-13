import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../Context/auth';
import { deleteRequest, sendFriendRequest } from './../store/friend';

function FriendsProfile ({user}) {
    const { profileImage, nickname, id } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();
    const auth = useAuth();

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
        <Box theme={theme}>
            <div>
                {profileImage && (
                    <img src={profileImage} width="100px" height="100px" />
                )}
            </div>
            <p>{nickname}</p>
            {!isRequest
              ? (<button 
                        className={auth.user?.id === user.id ? 'disabled' : ''}
                        disabled={auth.user?.id === user.id ? true: false}
                        onClick={() => {onRequestHandler(id); }}>
                    💌 친구요청하기
                </button>)
              : (<button onClick={() => { onCancelHandler(id);}}>
                    ❌ 요청취소하기
                </button>)}
        </Box>
    );
}

export default FriendsProfile;

const Box = styled.div`
    width: 200px;
    height: 240px;
    background-color: rgb(230,230,230);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    margin: 10px;
    *{
        color: rgb(39, 39, 39);
        font-weight: bold;
    }
    >div:first-child{
        height: 130px;
        max-height: 130px;
    }
    button{
        color: rgb(230,230,230);
    }
`