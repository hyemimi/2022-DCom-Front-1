import axios from 'axios';

export const getAxios = (endPoint, data = {}, config = {}) =>
  axios({
      url: `http://focuz-api.justkode.kr${endPoint}`,
      method: 'get',
      data: data,
      ...config,
  });

export const postAxios = (endPoint, params = {}, config={}) =>
  axios({
      url: `http://focuz-api.justkode.kr${endPoint}`,
      method: 'POST',
      data: params,
      ...config
  });

export const deleteAxios = (endPoint) =>
  axios({
      url: `http://focuz-api.justkode.kr${endPoint}`,
      method: 'DELETE'
  });

// // 사용예시
// getAxios('/user/list').then((res) => {
//     console.log(res);
// });

// postAxios('/user/register', {
//     motto: 'string',
//     nickname: 'string',
// }).then((res) => {
//     console.log(res);
// });
