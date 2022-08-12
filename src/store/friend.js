import {getAxios, postAxios, deleteAxios} from './axiosCall'

// 현재 유저의 친구 목록을 반환 합니다.
const getFriendList = getAxios('/friend/list')


const sendFriendRequest = (targetUserId) => postAxios(`/friend/request/${targetUserId}`)