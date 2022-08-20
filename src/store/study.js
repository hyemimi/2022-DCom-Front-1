import { getAxios, postAxios } from './axiosCall';

//현재 공부한 시간을 추가합니다.
export const currentTime = () => postAxios('/study');
//요청 받은 시간을 추가합니다
export const addStudy = (data) => postAxios('/study/add', data);

export const searchStudy = (data) => getAxios('/study/search', data);
