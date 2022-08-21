import { useState, useEffect } from 'react';
import { Box } from './Styled/Box';
import { registerMember } from '../store/group';
import UserProfileModal from '../components/UserProfileModal';
import RequestUserProfile from '../components/RequestUserProfile';

const KickoutGroupProfile = ({ id, user }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (targetUserId) => {
    setModalOpen(true);
    };
    const closeModal = () => {
    setModalOpen(false);
    };
    
    const onCancelButton = async () => {
        await registerMember(id, user.id)
            .then((r) => alert('강퇴 취소 성공'))
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
                💔
                <img
                    style={{
                        width: '90px',
                        height: '50px',
                        marginLeft: '16px',
                        marginRight: '16px',
                    }}
                    src={user.profileImage}
                />
                {`${user.nickname}`}
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
            <button onClick={() => {openModal(user.id);}} style={{fontSize: '10px'}}>프로필 보기</button>
            <UserProfileModal open={modalOpen} close={closeModal} header={user.nickname}>
            <RequestUserProfile key={user.id} user={user}></RequestUserProfile>
            </UserProfileModal>
            <button onClick={onCancelButton}>강퇴 취소하기</button>
            </div>
        </Box>
    );
};

export default KickoutGroupProfile;
