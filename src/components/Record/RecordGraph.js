import { useState, useEffect } from 'react';
import { useThemeColor } from '../../Context/theme';
import { Box } from '../Styled/Box';

const RecordGraph = () => {
    const theme = useThemeColor();

    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}> 기간별 집중시간 분석 </h1>
        </>
    );
};
export default RecordGraph;
