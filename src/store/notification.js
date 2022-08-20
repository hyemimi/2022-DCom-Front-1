//현재 온 알람을 가져옵니다

import { getAxios } from './axiosCall';

export const getAlarm = () => getAxios('/notification/my');
