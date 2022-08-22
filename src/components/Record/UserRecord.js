import React, { useState } from 'react';
import { useThemeColor } from '../../Context/theme';
import { useAuth } from '../../Context/auth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { Box } from '../Styled/Box';
import Form from 'react-bootstrap/Form';
import { getYear, getMonth, getDate } from 'date-fns';
import { searchStudy } from '../../store/study';

const UserRecord = () => {
    const theme = useThemeColor();
    const auth = useAuth();
    const { user } = auth;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [totalTime, setTotalTime] = useState(0);
    const [searched, setSearched] = useState();

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    function getStartTime () {
        const getStartYear = getYear(startDate);
        const getStartMonth = ('0' + (getMonth(startDate) + 1)).slice(-2);
        const getStartDate = ('0' + getDate(startDate)).slice(-2);
        setStartTime(String(getStartYear + '-' + getStartMonth + '-' + getStartDate + ' 00:00:00'));
        return (String(getStartYear + '-' + getStartMonth + '-' + getStartDate + ' 00:00:00'));
    }
    function getEndTime () {
        const getEndYear = getYear(endDate);
        const getEndMonth = ('0' + (getMonth(endDate) + 1)).slice(-2);
        const getEndDate = ('0' + getDate(endDate)).slice(-2);
        setEndTime(String(getEndYear + '-' + getEndMonth + '-' + getEndDate + ' 00:00:00'));
        return (String(getEndYear + '-' + getEndMonth + '-' + getEndDate + ' 00:00:00'));
    }


    const onClick = async () => {
        await getStartTime();
        await getEndTime();
        const study = new Promise((searchStudy) => searchStudy({
            endDate: (endTime),
            startDate: (startTime)
        }));
        // const study = await searchStudy(
        //     {
        //         endDate: inputs.endDate,
        //         startDate: inputs.startDate
        //     });
        // console.log(getStartTime);
        // if (totalTime === undefined) {
        //   setTotalTime(0);
        //   console.log(totalTime);
        //
        study.then(function (time) {
            setSearched(searchStudy(time));
            console.log(time);
        });
    };
    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}> 000 님의 총 집중시간은 ? </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: '30px' }}>
            <Box>
                <div style={{ fontSize: '1rem' }}> 시작일
                <DatePicker
                dateFormat="yyyy년 MM월 dd일 EE"
                selected={startDate}
                locale={ko}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                maxDate={new Date()}
                customInput={ <Form.Control as="textarea" rows={1} style={{ width: '130px', fontSize: '13px' }}/>}
                />
                </div>
            </Box>
            <div style={{ fontSize: '1rem', color: 'white', display: 'flex' }}> ~ </div>
            <Box>
                <div style={{ fontSize: '1rem' }}> 종료일
                <DatePicker
                selected={endDate}
                dateFormat="yyyy년 MM월 dd일 EE"
                locale={ko}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                maxDate={new Date()}
                customInput={ <Form.Control as="textarea" rows={1} style={{ width: '130px', fontSize: '13px' }}/>}
                />
                </div>
            </Box>
            <Button onClick={onClick}>🔍</Button>
            </div>
            <div style={{ fontSize: '5rem', color: 'white', fontStyle: 'bold', paddingTop: '40px' }}>❗ {totalTime} 분 ❗</div>

        </>
    );
};
export default UserRecord;

export const Button = styled.button`
    width: 70px;
    font-size: 50px;
    padding: 0px 0px;
    color: black;
    border-radius: 20px;
`;
