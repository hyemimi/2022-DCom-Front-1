import React, { useEffect, useState } from 'react';
import EditProfile from '../EditProfile';
import MyProfile from '../MyProfile';
import { useAuth } from '../../Context/auth';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const [editMode, setEditMode] = useState(false);
    const auth = useAuth();
    const { user } = auth;
    // 전체 유저 리스트를 돌면서 현재 로그인한 유저의 email과 같은 요소만 필터함
    // my_friend 리스트는 dummylist로 사용됨

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
                            flexDirection: 'column',
                            gap: '0.5em',
                            alignItems: 'center',
                            marginTop: '20px',
                        }}
                    >
                        <Link key="cam" to="/cam">
                            <button className="light">공부 시작하기</button>
                        </Link>
                        {/* <button onClick={() => { setEditMode(true); }}>
                            내 프로필 수정하기
                        </button> */}
                    </div>
                    <MyProfile />
                </div>
            ) : (
                <EditProfile show={editMode} setEditMode={setEditMode} />
            )}

            {/* 프로필을 보여주는 컴포넌트, 헷갈리니까 FriendsProfile 대신 Profile로 바꾸는 게 어떨까?*/}
        </div>
    );
};

export default MainPage;
