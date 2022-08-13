import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeColor } from '../../Context/theme';

const InitialPage = () => {
    const themeColor = useThemeColor();

    return (
        <>
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
        </>
    );
};

export default InitialPage;
