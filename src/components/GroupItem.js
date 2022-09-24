// GroupItem은 그룹별 프로필과 같다고 보면 된다. 그룹 리스트를 나열할 때 컴포넌트로 사용될 예정
import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useAuth } from '../Context/auth';
import { useNavigate } from 'react-router-dom';
function GroupItem({ id, name, leader, members, buttontext }) {
    const auth = useAuth();
    const navigate = useNavigate();
    const onClick = (targetGroupId) => {
        navigate(`/groups/${targetGroupId}`);
    };
    return (
        <Box>
            <div>{name}</div>
            <div>{leader}님의 스터디그룹</div>
            <div style={{ display: 'flex' }}>

                {members[0].id === auth.user?.id && (
                    <button
                        onClick={() => {
                            onClick(id);
                        }}
                    >
                        그룹관리
                    </button>
                )}
            </div>
        </Box>
    );
}

export default GroupItem;

const Box = styled.div`
    width: 270px;
    height: 180px;
    background-color: rgb(230, 230, 230);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    margin: 20px;
    * {
        color: rgb(39, 39, 39);
        font-weight: bold;
    }
    > div:first-child {
        font-size: 25px;
        margin: 10px;
        height: 20px;
        max-height: 20px;
    }

    button {
        color: rgb(230, 230, 230);
    }
`;
