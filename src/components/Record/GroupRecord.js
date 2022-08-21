import { useState, useEffect } from 'react';
import { useThemeColor } from '../../Context/theme';
import { Box } from '../Styled/Box';

const GroupRecord = () => {
    const theme = useThemeColor();

    return (
        <>
            <h1 style={{ fontSize: '1.5rem', color: theme.point }}> 그룹별 집중시간 랭킹 </h1>
        </>
    );
};
export default GroupRecord;
