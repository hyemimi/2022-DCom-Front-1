import { Box } from './Styled/Box';
import { acceptFriend } from '../store/friend';
import { registerMember } from '../store/group';
const RequestProfile = ({ id, user, message }) => {
    const onClick = async () => {
            await registerMember(id, user.id)
                .then((r) => alert('승인 성공'))
                .catch((e) => alert('그룹 승인 실패'));
    };
    return (
        <Box
            width="800px"
            height="80px"
            color="black"
            style={{ flexDirection: 'row' }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <img
                    style={{ width: '100px', height: '50px' }}
                    src={user.profileImage}
                />
                {`💙${user.nickname}💙님의 그룹 가입 요청`}
            </div>
            <button onClick={onClick}>수락하기</button>
        </Box>
    );
};

export default RequestProfile;
