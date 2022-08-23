import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '../Styled/Box';
import AlarmModal from '../AlarmModal';
import RankingModal from './RankingModal';
import { AuthContext } from '../../Context/auth';
const RankingGroup = ({ group }) => {
    const auth = useContext(AuthContext);
    const dummyauthID = 1;
    const [modalOpen, setModalOpen] = useState(false);
    const { description, id, name } = group;
    const users = group.users;

    const [rankList, setRankList] = useState([]);
    const [usersRanking, setUsersRanking] = useState([]);
    useEffect(() => {
        const newArray = users.map((user) => {
            return {
                id: user.id,
                studyTime: user.studyTime,
                nickname: user.nickname,
            };
        });
        setRankList(newArray);
        console.log(rankList);
    }, [group]);

    useEffect(() => {
        const result = rankList.sort(function (a, b) {
            return b.studyTime - a.studyTime;
        });
        setUsersRanking(result);
    }, [rankList]);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Box width="250px" height="130px">
            <Header>{group.name}</Header>
            <div style={{ display: 'flex' }}>
                {/* {usersRanking.map(
                    (user, idx) =>
                        user.id === auth.user.id && (
                            <Button>📖{idx + 1}등</Button>
                        )
                )} */}
                {usersRanking.map(
                    (user, idx) =>
                        //dummyauthID =>> auth.user.id로 바꾸기 (8/23)
                        user.id === auth.user.id && (
                            <Button>📖{idx + 1}등</Button>
                        )
                )}
                <Button onClick={openModal}>🏆랭킹</Button>
                <RankingModal
                    open={modalOpen}
                    close={closeModal}
                    header={`랭킹`}
                    usersRanking={usersRanking}
                    name={name}
                    description={description}
                ></RankingModal>
            </div>
        </Box>
    );
};

export default RankingGroup;

const Header = styled.h2`
    font-size: 20px;
`;
const Button = styled.button`
    width: 75px;
    height: 45px;
    margin: 5px;
    font-size: 20px;
    padding: 0px 0px;
    border-radius: 7px;

    color: black;
`;
