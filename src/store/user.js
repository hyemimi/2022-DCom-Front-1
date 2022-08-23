import { getAxios, postAxios, deleteAxios } from './axiosCall';

// 전체 유저 리스트를 뽑아 냅니다.
export const fetchAllUserList = () => getAxios('/user/list');

export const fetchUserInfo = (userId) => getAxios(`/user/${userId}`);

export const registerUser = (data) => postAxios('/user/register', data);

//현재 유저의 전체 정보를 반환합니다

export const getCurrentUserInfo = () => getAxios('/user/my_profile/info');
