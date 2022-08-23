import React, { useState } from 'react';
import { useThemeColor } from '../../Context/theme';
import { useAuth } from '../../Context/auth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { Box } from '../Styled/Box';
import Form from 'react-bootstrap/Form';
import { getYear, getMonth, getDate, getDay } from 'date-fns';
import { searchStudy } from '../../store/study';
import Barchart from '../Record-Graph/Barchart';

const RecordGraph = () => {
    const theme = useThemeColor();
    const auth = useAuth();
    const { user } = auth;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [totalTime, setTotalTime] = useState(0);

    function getStartTime () {
        const getStartYear = getYear(startDate);
        const getStartMonth = ('0' + (getMonth(startDate) + 1)).slice(-2);
        const getStartDate = ('0' + getDate(startDate)).slice(-2);
        return (String(getStartYear + '-' + getStartMonth + '-' + getStartDate));
    }
    function getEndTime () {
        const getEndYear = getYear(endDate);
        const getEndMonth = ('0' + (getMonth(endDate) + 1)).slice(-2);
        const getEndDate = ('0' + getDate(endDate)).slice(-2);
        return (String(getEndYear + '-' + getEndMonth + '-' + getEndDate));
    }

    const onClick = () => {
        {/*searchStudy({
            endDate: getEndTime() + ' 00:00:00',
            startDate: getStartTime() + ' 00:00:00'
        });
        setTotalTime(searchStudy.studyTime);
        console.log(totalTime);
        if (totalTime == undefined) {
          setTotalTime(0);
        }
    console.log(totalTime);*/}
    };

    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}> 일주일 집중시간 분석 </h1>
            <div style={{ fontSize: '0.9rem', fontStyle: 'normal', color: 'white', paddingTop: '5px'}}>종료일은 시작일의 일주일 후 날짜만 선택 가능합니다.</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: '10px' }}>
            <Box>
                <div style={{ fontSize: '0.9rem' }}> 시작일
                <DatePicker
                dateFormat="yyyy년 MM월 dd일 EE"
                selected={startDate}
                locale={ko}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                maxDate={new Date(new Date().setDate((new Date().getDate()) - 6))}
                customInput={ <Form.Control as="textarea" rows={1} style={{ width: '100px', fontSize: '11px' }}/>}
                />
                </div>
            </Box>
            <div style={{ fontSize: '1rem', color: 'white', display: 'flex' }}> ~ </div>
            <Box>
                <div style={{ fontSize: '0.9rem' }}> 종료일
                <DatePicker
                selected={endDate}
                dateFormat="yyyy년 MM월 dd일 EE"
                locale={ko}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={new Date(new Date().setDate((startDate.getDate()) + 6))}
                maxDate={new Date(new Date().setDate((startDate.getDate()) + 6))}
                customInput={ <Form.Control as="textarea" rows={1} style={{ width: '100px', fontSize: '11px' }}/>}
                />
                </div>
            </Box>
            <Button onClick={onClick}>🔍</Button>
            </div>
            <div style={{ fontSize: '0.9rem' }}><Box><Barchart></Barchart></Box></div>
        </>
    );
};
export default RecordGraph;

export const Button = styled.button`
    width: 70px;
    font-size: 50px;
    padding: 0px 0px;
    color: black;
    border-radius: 20px;
`;
