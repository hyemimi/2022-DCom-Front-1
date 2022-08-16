import { fetchAllRequest, acceptFriend } from './../store/friend';
import { useState, useEffect } from 'react';
import { Box } from '../components/Styled/Box';
import UserProfileModal from '../components/UserProfileModal';
import MyFriendsProfile from '../components/MyFriendsProfile';
import RequestUserProfile from '../components/RequestUserProfile';

const RequestFriendBox = ({user}) => {
    const onAcceptHandler = async () => {
            await acceptFriend(user.id)
                .then((r) => alert('친구추가 성공'))
                .catch((e) => alert('친구추가 실패'));
        
    };

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (targetUserId) => {
    setModalOpen(true);
    };
    const closeModal = () => {
    setModalOpen(false);
    };

    return (
        <Box
            key={user.id}
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
            {`💌`}
                <img
                    style={{ width: '100px', height: '50px', paddingLeft: '16px',paddingRight: '16px' }}
                    src={user.profileImage}
                />
            {`${user.nickname}님의 친구 요청`}

            </div>{' '}
            <div style={{ display: 'flex', alignItems: 'center'}}>
            <button onClick={() => {openModal(user.id);}} style={{fontSize: '10px'}}>프로필 보기</button>
            <UserProfileModal open={modalOpen} close={closeModal} header={user.nickname}>
            <RequestUserProfile key={user.id} user={user}></RequestUserProfile>
            </UserProfileModal>
            <button
                onClick={() => {
                    onAcceptHandler(user.id);
                }}
            >
                수락하기
            </button></div>
        </Box>

    );
};

export default RequestFriendBox;

