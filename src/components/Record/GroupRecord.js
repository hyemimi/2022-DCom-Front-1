import { useState, useEffect } from 'react';
import { useThemeColor } from '../../Context/theme';
import RankingGroup from '../Record-Group/RankingGroup';
import { searchStudy } from '../../store/study';
import { Box } from '../Styled/Box';
import { getStringDate } from '../Common/date';
import styled from 'styled-components';
import { Button } from './UserRecord';
import { UserProfileModalHeaderButton } from '../Styled/Modal';
import { groups } from '../../store/temp/tempGroupsData';
// 어제 하루 순위 매기기

const GroupRecord = () => {
    const theme = useThemeColor();
    const [date, setDate] = useState(getStringDate(new Date()));
    const [MyGroupsList, setMyGroupsList] = useState([]);
    const [myTime, setMyTime] = useState([]);

    const onClick = async () => {
        searchStudy({
            endDate: date,
            startDate: date,
        });
    };

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
                <Input
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
                </button>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    paddingTop: '20px',
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
