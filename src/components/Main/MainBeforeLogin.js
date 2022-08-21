import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeColor } from '../../Context/theme';

const pageDiv = styled.div`
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
`

const MainBeforeLogin = () => {
    const themeColor = useThemeColor();

    return (
        <MainDiv>
            <h1>
                Welcome to{' '}
                <a style={{ color: themeColor.point, fontSize: 'min(6vw, 40px)' }}>
                    FOCUZ CAM STUDY
                </a>
            </h1>
            <p className="line"></p>
            <h1>로그인하고 친구들과 스터디 집중도를 측정해보세요!</h1>
            <div style={{marginTop: '2rem'}}>
            <Link to="login">
                <button>카카오로 로그인하기</button>
            </Link>{' '}
            </div>
        </MainDiv>
    );
};

const MainDiv = styled.div`
    height: 80vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default MainBeforeLogin;





const interval = setInterval(()=>{
    /* 함수 구현 */
}, 10000)

clearInterval(interval);