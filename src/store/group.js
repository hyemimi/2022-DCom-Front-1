import { getAxios, postAxios, deleteAxios } from './axiosCall';

// 새로운 그룹을 생성합니다
export const createGroup = (data) => postAxios('/group', data);
// 해당 ID를 가진 그룹의 정보를 얻어옵니다(그룹검색)
export const getGroupInfo = (targetGroupId) => {
    getAxios(`/group/${targetGroupId}`);
};
