import axios from 'axios';

const getAxios = (endPoint, data={}) => axios({
    url: `http://focuz.justkode.kr:8080${endPoint}`,
    method: 'get',
    data: data,
});

const postAxios = (endPoint, params={})=>axios({
    url: `http://focuz.justkode.kr:8080${endPoint}`,
    method: 'POST',
    params: params,
});

const deleteAxios = (endPoint)=>axios({
    url: `http://focuz.justkode.kr:8080${endPoint}`,
    method: 'DELETE',
})


// 사용예시
getAxios('/user/list').
    then((res)=>{
        console.log(res);
    })

postAxios('/user/register', {
    "motto": "string",
    "nickname": "string"
}).then((res)=>{
    console.log(res);
})