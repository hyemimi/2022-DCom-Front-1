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
        <div>
            <h1>
                Welcome to{' '}
                <a style={{ color: themeColor.point, fontSize: 'min(6vw, 40px)' }}>
                    FOCUZ cam study
                </a>
            </h1>
            <p className="line"></p>
            <h1>로그인하고 친구들과 스터디 집중도를 측정해보세요!</h1>
            <Link to="login">
                <button>로그인하고 시작하기</button>
            </Link>{' '}
        </div>
    );
};

export default MainBeforeLogin;
