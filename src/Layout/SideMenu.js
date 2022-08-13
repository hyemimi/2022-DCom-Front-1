import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
    { ref: '', label: '🏠　홈' },
    { ref: 'search-friend', label: '🔍　친구 추가하기' },
    { ref: 'search-group', label: '🔍　그룹 참여하기' },
    { ref: 'new-group', label: '➕　스터디그룹 생성하기' },
    { ref: 'record', label: '📈　분석하기' },
    { ref: 'friends', label: '🧾　친구 목록' },
    { ref: 'groups', label: '🧾　그룹 목록' },
    { ref: 'cam', label: '❤　공부하러가기' },
];

const SideMenu = () => {
    return (
        <div className="SideMenu">
            {menuList.map(({ label, ref }) => (
                <Link key={ref} to={ref}>
                    <div>  
                    <button>{label}</button>
                    </div>
                </Link>
            ))}

            <div className="copyright">© DCOM. All Rights Reserved.</div>
        </div>
    );
};

export default SideMenu;
