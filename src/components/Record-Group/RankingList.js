import { faAlignJustify } from '@fortawesome/fontawesome-free-solid';
import { Box } from '../Styled/Box';
import { Span, Watch } from '../Timer';
const RankingList = ({ user, rank }) => {
    return (
        <div style={{ color: 'black', flexDirection: 'column' }}>
            <Box
                width="400px"
                height="80px"
                color="black"
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                🎉{rank + 1}등🎉 {user.nickname}
                <Watch>
                    <Span font="30px">
                        {('0' + Math.floor(user.studyTime / 3600)).slice(-2)}:
                    </Span>
                    <Span font="30px">
                        {('0' + Math.floor((user.studyTime / 60) % 60)).slice(
                            -2
                        )}
                        :
                    </Span>
                    <Span font="30px">
                        {('0' + Math.floor((user.studyTime / 1) % 60)).slice(
                            -2
                        )}
                    </Span>
                </Watch>
            </Box>
        </div>
    );
};

export default RankingList;
