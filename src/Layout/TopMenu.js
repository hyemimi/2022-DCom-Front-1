import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/auth';
import styled from 'styled-components';
import logo from './image/FOCUZ.png';
import { KAKAO_OAUTH_URL } from '../env';
import { getAlarm } from '../store/notification';
import { AlarmList } from '../store/temp/tempAlarmData';
import AlarmModal from '../components/AlarmModal';

const TopMenu = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [alarm, setAlarm] = useState(null);
    const onProfileHandler = () => {
        navigate('/my-profile');
    };
    useEffect(() => {
        getAlarm()
            .then((res) => setAlarm(res.data))
            //dummy 추후 지우기
            .catch((e) => setAlarm(AlarmList));
    }, []);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="TopMenu">
            <NavBarDiv>
                <Link to="/">
                    <div className="logo" style={{ color: '#ffc83d' }}>
                        <img src={logo} />
                    </div>
                </Link>
                {auth?.isLoggedIn ? (
                    <div style={{ display: 'flex' }}>
                        {alarm && (
                            <>
                                <button
                                    className="light"
                                    onClick={openModal}
                                    style={{ fontSize: '14px' }}
                                >
                                    {`❗ ${alarm.length}개의 알람`}{' '}
                                </button>
                                <AlarmModal
                                    open={modalOpen}
                                    close={closeModal}
                                    header={`📰 ${alarm.length}개의 알람`}
                                    alarm={alarm}
                                ></AlarmModal>
                            </>
                        )}
                        <button onClick={onProfileHandler} className="light">
                            {auth.user.nickname}
                        </button>
                    </div>
                ) : (
                    <a href={KAKAO_OAUTH_URL}>
                        <button className="light">로그인</button>
                    </a>
                )}
            </NavBarDiv>
        </div>
    );
};

export default TopMenu;

const NavBarDiv = styled.div`
    display: flex;
    background-color: inherit;
    margin-right: 1em;
    align-items: center;
    justify-content: space-between;
`;
