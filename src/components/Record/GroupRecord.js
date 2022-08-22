import { useState, useEffect } from 'react';
import { useThemeColor } from '../../Context/theme';
import RankingGroup from '../Record-Group/RankingGroup';
import { Box } from '../Styled/Box';
// 어제 하루 순위 매기기

const GroupRecord = () => {
    const theme = useThemeColor();
    const groups = [
        {
            description: '파이썬공부해요',
            id: 1,
            name: '파이썬스터디',
            users: [
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: null,
                },
            ],
        },
        {
            description: '파이썬공부해요',
            id: 1,
            name: '파이썬스터디',
            users: [
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '손님',
                    profileImage: null,
                },
            ],
        },
    ];

    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}>
                {' '}
                그룹별 집중시간 랭킹{' '}
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    paddingTop: '30px',
                }}
            >
                {groups.map((group, idx) => (
                    <RankingGroup key={idx} group={group} myRank={1} />
                ))}
            </div>
        </>
    );
};
export default GroupRecord;
