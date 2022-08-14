import { useEffect, useState, useContext } from 'react';
import GroupItem from '../components/GroupItem';
import SideMenu from '../Layout/SideMenu';
import { Link } from 'react-router-dom';
import GroupButton from '../components/GroupButton';
import { useSelector } from 'react-redux';
import { AuthContext } from '../Context/auth';
import { PageDiv } from './SearchFriend';
import styled from 'styled-components';
const Groups = () => {
    const auth = useContext(AuthContext);
    const groups = [
        // dummy
        // 이후 auth.user.groups로 바꾸기
        {
            description: '파이썬스터디',
            id: 1,
            name: '파이썬스터디',
            users: [
                {
                    id: 1,
                    motto: 'string',
                    name: '박민재',
                    nickname: '호스트',
                    profileImage: 'string',
                },
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: 'string',
                },
            ],
        },
        {
            description: '파이썬스터디',
            id: 2,
            name: 'string',
            users: [
                {
                    id: 1,
                    motto: 'string',
                    name: '박민재',
                    nickname: '호스트',
                    profileImage: 'string',
                },
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: 'string',
                },
            ],
        },
        {
            description: '파이썬스터디',
            id: 3,
            name: 'string',
            users: [
                {
                    id: 2,
                    motto: 'string',
                    name: '박민재',
                    nickname: '호스트',
                    profileImage: 'string',
                },
                {
                    id: 3,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: 'string',
                },
            ],
        },
        {
            description: '파이썬스터디',
            id: 4,
            name: 'string',
            users: [
                {
                    id: 1,
                    motto: 'string',
                    name: '박민재',
                    nickname: '호스트',
                    profileImage: 'string',
                },
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: 'string',
                },
            ],
        },
    ];

    return (
        <PageDiv>
            <h1 className="groupList-header">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    {' '}
                    My Groups{' '}
                </a>
            </h1>
            <div style={{ display: 'flex' }}>
                <Link key="searchGroup" to="/search-group">
                    <Button>🔍　스터디 그룹 검색하러가기</Button>
                </Link>
                {/*  </div>
            <div className="out"> */}
                <Link key="newGroup" to="/new-group">
                    <Button>⚒️ 스터디그룹 생성하기</Button>
                </Link>
            </div>
            📑{groups.length}개의 스터디그룹이 있습니다
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {groups.length !== 0 ? (
                    groups.map((it) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <GroupItem
                                    id={it.id}
                                    name={it.name}
                                    leader={it.users[0] && it.users[0].nickname}
                                    members={it.users}
                                    buttontext="탈퇴하기"
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>비어있습니다</div>
                )}
            </div>
        </PageDiv>
    );
};

export default Groups;

export const Button = styled.button`
    width: 250px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;
