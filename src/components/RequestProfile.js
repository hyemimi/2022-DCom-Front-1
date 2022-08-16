import { Box } from './Styled/Box';
import { registerMember } from '../store/group';
const RequestProfile = ({ id, user, message }) => {
    const onClick = async () => {
        if (message === '그룹가입') {
            //id는 그룹의 id입니다
            await registerMember(id, user.id)
                .then((r) => alert('승인 성공'))
                .catch((e) => alert('승인 실패'));
        }
        if (message === '친구') {
            await acceptFriend(user.id)
                .then((r) => alert('친구추가 성공'))
                .catch((e) => alert('친구추가 실패'));
        }
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
                {`💙${user.nickname}💙님의 ${message} 요청`}
            </div>
            <button onClick={onClick}>수락하기</button>
        </Box>
    );
};

export default RequestProfile;
