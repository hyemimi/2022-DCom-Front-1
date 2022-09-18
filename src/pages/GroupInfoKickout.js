import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    kickoutList
} from '../store/group';
import styled from 'styled-components';
import { PageDiv } from '../components/Styled/PageDiv';
import { AuthContext } from '../Context/auth';
import  GroupInfo from './GroupInfo';
import KickoutGroupProfile from '../components/KickoutGroupProfile';
import { Button } from './Groups';
import { useNavigate } from 'react-router-dom';

function GroupInfoKickout(){
    const { id } = useParams();    
    const [dummykickoutList, setdummyKickoutList] = useState([]);

    const onKickoutList = async () => {
        await kickoutList(id)
            .then((r) => {
                setdummyKickoutList(r.data);
            })
    };
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(`/groups/${id}`);
    };

    return (
        <PageDiv>
            <h1 className="friendsheader">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    강퇴 유저 목록
                </a>
            </h1>
            <button onClick={onClickBack}>
                그룹 관리 페이지로 돌아가기
            </button>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {dummykickoutList.map((user, idx) => (
                    <KickoutGroupProfile
                        id={id}
                        key={idx}
                        user={user}
                    />
                ))}
            </div>
        </PageDiv>
        
    );
};

export default GroupInfoKickout