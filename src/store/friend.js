import { getAxios, postAxios, deleteAxios } from './axiosCall';

// 현재 유저의 친구 목록을 반환 합니다.
export const getFriendList = () => getAxios('/friend/list');

// 현재 유저가 차단한 친구 목록을 반환 합니다.
export const getBlockedFriendList = () => getAxios('/friend/blocked/list');

// 타겟유저에게 친구 요청을 보냅니다.
export const sendFriendRequest = (targetUserId) =>
    postAxios(`/friend/request/${targetUserId}`);

// 타겟유저를 차단합니다.
export const blcokRequest = (targetUserId) =>
    postAxios(`/friend/blcoked/${targetUserId}`);

// 나에게 친구요청한 유저 리스트
export const fetchAllRequest = () => getAxios('/friend/request/list');

//친구요청을 수락합니다.
export const acceptFriend = (targetUserId) =>
    getAxios(`/friend/request/accept/${targetUserId}`);

//친구를 삭제합니다
export const deleteFriend = (targetUserId) => {
    deleteAxios(`/friend/delete/${targetUserId}`);
};

//타겟유저에게 한  친구 요청을 취소합니다
export const deleteRequest = (targetUserId) => {
    deleteAxios(`/friend/request/delete/${targetUserId}`);
};

//타겟 유저를 차단을 삭제합니다
export const blockdeleteRequest = (targetUserId) => {
    deleteAxios(`/friend/block/delete/${targetUserId}`);
};
