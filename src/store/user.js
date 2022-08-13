import { getAxios, postAxios, deleteAxios } from './axiosCall'

// 전체 유저 리스트를 뽑아 냅니다.
export const fetchAllUserList = () => getAxios('/user/list')

export const fetchUserInfo = (userId) => getAxios(`/user/${userId}`)

export const registerUser = (data) => postAxios('user/register', data)
