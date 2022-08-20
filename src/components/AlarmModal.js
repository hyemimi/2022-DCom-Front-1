import React from 'react';
import { Button } from '../pages/Friends';
import AlarmList from './AlarmList';
import { AlarmModalMain, AlarmModalSection } from './Styled/Modal';
import {
    UserProfileModalHeaderButton,
    UserProfileModalFooter,
    UserProfileModalHeader,
    UserProfileModalMain,
    UserProfileModalSection,
    UserProfileModalOpenModal,
} from './Styled/Modal';

const AlarmModal = (props) => {
    const { open, close, header, alarm } = props;

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
                        {header}
                        <UserProfileModalHeaderButton onClick={close}>
                            &times;
                        </UserProfileModalHeaderButton>
                    </UserProfileModalHeader>
                    <AlarmModalMain>
                        {alarm.map((it, idx) => (
                            <AlarmList key={idx} alarm={it} />
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

export default AlarmModal;
