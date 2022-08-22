import React from 'react';
import { Button } from '../../pages/Friends';
import RankingList from './RankingList';
import { AlarmModalMain, AlarmModalSection } from './../Styled/Modal';
import {
    UserProfileModalHeaderButton,
    UserProfileModalFooter,
    UserProfileModalHeader,
    UserProfileModalMain,
    UserProfileModalSection,
    UserProfileModalOpenModal,
} from './../Styled/Modal';

const RankingModal = (props) => {
    const { open, close, header, usersRanking, name, description } = props;

    return (
        <div
            style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                animation: 'modal-bg-show 0.s',
            }}
        >
            {open ? (
                <UserProfileModalSection>
                    <UserProfileModalHeader>
                        {name}
                        🥇{header}🥇
                        <UserProfileModalHeaderButton onClick={close}>
                            &times;
                        </UserProfileModalHeaderButton>
                    </UserProfileModalHeader>
                    <AlarmModalMain>
                        {usersRanking.map((user, idx) => (
                            <RankingList key={idx} user={user} rank={idx} />
                        ))}
                    </AlarmModalMain>
                    <UserProfileModalFooter>
                        <Button className="close" onClick={close}>
                            close
                        </Button>
                    </UserProfileModalFooter>
                </UserProfileModalSection>
            ) : null}
        </div>
    );
};

export default RankingModal;
