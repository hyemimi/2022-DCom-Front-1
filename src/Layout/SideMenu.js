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
            <div style={{ position: 'fixed', bottom: '20px'}}>
                <div style={{
                        paddingBottom: '20px',
                        fontSize: '13px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'center'
                }}>
                    © DCOM 투혜투현. All Rights Reserved.
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left'
                }}>
                    멘토 : 박민재 / 정지원
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left'
                }}>
                    프론트엔드 : 이혜미, 정혜인
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left',
                        verticalAlign: 'bottom'
                }}>
                    백엔드 : 강다현, 김나현
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
