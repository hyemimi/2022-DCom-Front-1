import { getAxios, postAxios, deleteAxios } from './axiosCall';

// 새로운 그룹을 생성합니다
export const createGroup = (data) => postAxios('/group', data);
// 해당 ID를 가진 그룹의 정보를 얻어옵니다(그룹검색)
export const getGroupInfo = (targetGroupId) => {
    getAxios(`/group/${targetGroupId}`);
};
//현재 유저를 그룹의 멤버로 등록합니다
export const registerMember = (targetGroupId, targetUserId) =>
    postAxios(`/group/accept/${targetGroupId}/${targetUserId}`);
//현재 유저가 그룹에 가입 요청을 보냅니다.
export const sendGroupRequest = (targetGroupId) =>
    postAxios(`/group/join/${targetGroupId}`);
//현재 유저가 해당 그룹에서 탈퇴합니다.
export const quitGroup = (targetGroupId) =>
    deleteAxios(`/group/quit/${targetGroupId}`);

//해당멤버를 그룹에서 강퇴시킵니다 ㅠ
export const kickoutGroup = (targetGroupId, targetUserId) =>
    postAxios(`/group/kickOut/${targetGroupId}/${targetUserId}`);

//그룹을 삭제합니다
export const deleteGroup = (targetGroupId) =>
    deleteAxios(`/group/delete/${targetGroupId}`);
