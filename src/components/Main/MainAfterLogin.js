import React, { useEffect, useState } from 'react';
import EditProfile from '../EditProfile';
import MyProfile from '../MyProfile';
import { useAuth } from '../../Context/auth';
import { Link } from 'react-router-dom';
import { getAlarm } from '../../store/notification';
import { AlarmList } from '../../store/temp/tempAlarmData';
import AlarmModal from '../AlarmModal';
import RequestUserProfile from '../RequestUserProfile';
import UserProfileModal from '../UserProfileModal';
import Info from '../FocuzInfo';
const MainPage = () => {
    const [editMode, setEditMode] = useState(false);
    const [alarm, setAlarm] = useState(null);

    const auth = useAuth();
    const { user } = auth;

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
        <div className="centered">
            <h1>
                <a style={{ color: '#ffc83d', fontSize: 'min(6vw, 40px)' }}>
                    DCOM STUDY
                </a>
            </h1>
            {!editMode ? (
                <div>
                    <div
                        style={{
                            display: 'flex',

                            gap: '0.5em',
                            alignItems: 'center',
                            marginTop: '20px',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Link key="cam" to="/cam">
                            <button className="light">공부 시작하기</button>
                        </Link>
                        {/* <button onClick={() => { setEditMode(true); }}>
                            내 프로필 수정하기
                        </button> */}

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
                    </div>
                    <Info />
                </div>
            ) : (
                <EditProfile show={editMode} setEditMode={setEditMode} />
            )}

            {/* 프로필을 보여주는 컴포넌트, 헷갈리니까 FriendsProfile 대신 Profile로 바꾸는 게 어떨까?*/}
        </div>
    );
};

export default MainPage;
