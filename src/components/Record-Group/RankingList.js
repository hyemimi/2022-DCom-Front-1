import { faAlignJustify } from '@fortawesome/fontawesome-free-solid';
import { Box } from '../Styled/Box';

const RankingList = ({ user }) => {
    return (
        <div style={{ color: 'black', flexDirection: 'column' }}>
            <Box
                width="400px"
                height="80px"
                color="black"
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                🎉{user.rank}등🎉 {user.nickname}
            </Box>
        </div>
    );
};

export default RankingList;
