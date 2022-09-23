import React, { useRef, useState, useEffect } from 'react';
import { getCurrentUserInfo } from '../store/user';
import { registerUser } from '../store/user';
import axios from 'axios';
const SignUp = () => {
    const [member, setismember] = useState(false);
    const [currentUserMotto, setCurrentUserMotto] = useState(null);
    useEffect(() => {
        axios
            .post('http://localhost:8080/user/register', {
                motto: '.....',
                nickname: '......',
            })
            .then(function (response) {
                getCurrentUserInfo().then((r) => console.log(r.data));
            })
            .catch(function (error) {
                // 오류발생시 실행
            });
    }, []); // 로그인 처음 했을 때
    return (
        <>
            {}{' '}
            <div className="box">
                <div className="title">DCOM STUDY 회원가입</div>
                <div className="subTitle">
                    DCOM STUDY 계정으로 모든 서비스 이용이 가능합니다.
                </div>

                <button className="signUpBtn">회원가입</button>
            </div>
        </>
    );
};

export default SignUp;
