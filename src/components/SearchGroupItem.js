// GroupItem은 그룹별 프로필과 같다고 보면 된다. 그룹 리스트를 나열할 때 컴포넌트로 사용될 예정
import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { joinGroup } from '../store/group';
import { useAuth } from '../Context/auth';
import { useNavigate } from 'react-router-dom';
import {sendGroupRequest} from '../store/group'

function SearchGroupItem({ group }) {
    const {id, name, users} = group

    const onClick = async () => {
    if (confirm('그룹에 참여하시겠습니까?')) {
        alert('그룹 신청 완료!');
        return;
    } else {
        return;
    }
};
    return (
        <Box>
            <div>{name}</div>
            <div>{users[0].nickname}님의 스터디그룹</div>
            <div style={{ display: 'flex' }}>
            <button onClick={onClick}>그룹 참여</button>
            </div>
        </Box>
    );
}

export default SearchGroupItem;

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
const Button = styled.button`
    width: 230px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;
