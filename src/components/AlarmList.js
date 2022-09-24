import { Box } from './Styled/Box';

const AlarmList = ({ alarm }) => {
    return (
        <div style={{ color: 'black', flexDirection: 'column' }}>
            <Box
                width="400px"
                height="80px"
                color="black"
                style={{ flexDirection: 'row' }}
            >
                ({alarm.created?.slice(0, 10)}) {alarm.message}
            </Box>
        </div>
    );
};

export default AlarmList;
