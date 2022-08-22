import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../Styled/Box';
import AlarmModal from '../AlarmModal';
import RankingModal from './RankingModal';
const RankingGroup = ({ group, myRank, rankList }) => {
    const [modalOpen, setModalOpen] = useState(false);
    //rankList를 usersRanking으로 바꾸기
    const usersRanking = [
        { id: 1, nickname: '미미', rank: 1 },
        { id: 5, nickname: '혠', rank: 2 },
    ];
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
                <Button>📖{myRank}등</Button>
                <Button onClick={openModal}>🏆랭킹</Button>
                <RankingModal
                    open={modalOpen}
                    close={closeModal}
                    header={`📰랭킹`}
                    usersRanking={usersRanking}
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
