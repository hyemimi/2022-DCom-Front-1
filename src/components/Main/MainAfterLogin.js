import React, { useEffect, useState } from 'react';
import EditProfile from '../EditProfile';
import MyProfile from '../MyProfile';
import { useAuth } from '../../Context/auth';

const MainPage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const auth = useAuth();
    const {user} = auth;
    // 전체 유저 리스트를 돌면서 현재 로그인한 유저의 email과 같은 요소만 필터함
    // my_friend 리스트는 dummylist로 사용됨

    return (
        <div className="centered">
            <h1>
                <a style={{ color: '#ffc83d', fontSize: 'min(6vw, 40px)' }}>
                    DCOM STUDY
                </a>
            </h1>
            <p className="line"></p>
            <div></div>
            {!isEdit ? (
                <div style={{ alignItems: 'center' }}>
                    <button className='light'>시작하기</button>

                    <button
                        onClick={() => {
                            setIsEdit(true);
                        }}
                    >
                        내 프로필 수정하기
                    </button>

                    <div>
                        {' '}
                        <MyProfile
                            image={user?.profileImage}
                            name={user?.name}
                            nickname={user?.nickname}
                            email={user?.email}
                            motto={user?.motto}
                        />{' '}
                    </div>
                    {/*<FriendsProfile image={userProfile[0].image} name={userProfile[0].name} nickname={userProfile[0].nickname} email={userProfile[0].email} />*/}
                </div>
            ) : (
                <EditProfile
                    setIsEdit={setIsEdit}
                    // setmy_email={user.email}
                    /* setmy_image={user.profileImage}
                    setmy_name={user.name}
                    setmy_nickname={user.nickname} */
                />
            )}

            {/* 프로필을 보여주는 컴포넌트, 헷갈리니까 FriendsProfile 대신 Profile로 바꾸는 게 어떨까?*/}
        </div>
    );
};

export default MainPage;
