import axios from 'axios';

export const getAxios = (endPoint, data = {}) =>
    axios({
        url: `http://focuz-api.justkode.kr${endPoint}`,
        method: 'get',
        data: data,
    });

export const postAxios = (endPoint, params = {}) =>
    axios({
        url: `http://focuz-api.justkode.kr${endPoint}`,
        method: 'POST',
        data: params,
    });

export const deleteAxios = (endPoint) =>
    axios({
        url: `http://focuz-api.justkode.kr${endPoint}`,
        method: 'DELETE',
    });

// 사용예시
getAxios('/user/list').then((res) => {
    console.log(res);
});

postAxios('/user/register', {
    motto: 'string',
    nickname: 'string',
}).then((res) => {
    console.log(res);
});
