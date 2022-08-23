import { useState, useEffect, useContext } from 'react';
import { useThemeColor } from '../../Context/theme';
import RankingGroup from '../Record-Group/RankingGroup';
import { searchStudy } from '../../store/study';
import { Box } from '../Styled/Box';
import { getStringDate } from '../Common/date';
import styled, { withTheme } from 'styled-components';
import Timer from './../Timer';
import { AuthContext } from '../../Context/auth';
import { fetchUserInfo } from '../../store/user';
import { groups } from '../../store/temp/tempGroupsData';
// 어제 하루 순위 매기기

const GroupRecord = () => {
    const auth = useContext(AuthContext);
    // 연결되면 groups => groupsList로 바꾸기
    const groupsList = auth.user.groups;
    const groups = [
        {
            description: '파이썬공부해요',
            id: 1,
            name: '파이썬스터디',
            users: [
                {
                    id: 1,
                    motto: 'string',
                    name: '정지원',
                    nickname: '포커즈',
                    profileImage: null,
                    studyTime: 100,
                },
                {
                    id: 2,
                    motto: 'string',
                    name: '정지원',
                    nickname: '원',
                    profileImage: null,
                    studyTime: 2000,
                },
                {
                    id: 3,
                    motto: 'string',
                    name: '이혜미',
                    nickname: '혬',
                    profileImage: null,
                    studyTime: 10000,
                },
                {
                    id: 4,
                    motto: 'string',
                    name: '정혜인',
                    nickname: '혠',
                    profileImage: null,
                    studyTime: 300000,
                },
            ],
        },
    ];
    const theme = useThemeColor();
    const [isShown, setIsShown] = useState(false);

    /*  const onClick = async () => {
        setIsShown(true);
        await searchStudy({
            endDate: date,
            startDate: date,
        });
    }; */

    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}>
                {' '}
                그룹별 집중시간 랭킹{' '}
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',

                    alignItems: 'center',
                    paddingTop: '20px',
                }}
            >
                {/*   <Input
                    style={{ backgroundColor: '#ececec' }}
                    value={date}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                />

                <button
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        marginTop: '30px',
                    }}
                    onClick={onClick}
                >
                    조회하기
                </button> */}
                {isShown && (
                    <Box>
                        <Timer time={1000} />
                    </Box>
                )}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    paddingTop: '20px',
                }}
            >
                {groupsList.map((group, idx) => (
                    <RankingGroup key={idx} group={group} />
                ))}
            </div>
        </>
    );
};
export default GroupRecord;

const Input = styled.input`
    width: 80%;
    border: 1px solid;
    margin-top: 30px;

    background-color: #ececec;
    &:focus {
        border-color: red;
    }
    padding: 10px 20px;
    border-radius: 20px;
    color: black;
`;
