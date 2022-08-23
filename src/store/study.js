import axios from 'axios';
import { getAxios, postAxios } from './axiosCall';

//현재 공부한 시간을 추가합니다.
export const currentTime = () => postAxios('/study');
//요청 받은 시간을 추가합니다
export const addStudy = (data) => postAxios('/study/add', data);

//export const searchStudy = (d) => getAxios('/study/search', {params: {d}});
export const searchStudy = (endTime, startTime) => getAxios(`/study/search?endDate=${endTime}%2000%3A00%3A00&startDate=${startTime}%2000%3A00%3A00`)