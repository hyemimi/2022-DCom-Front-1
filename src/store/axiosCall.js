import axios from 'axios';

const getAxios = (endPoint, data={}) => axios({
    url: `http://focuz.justkode.kr:8080/${endPoint}`,
    method: 'get',
    data: data,
});

const postAxios = (endPoint, params={})=>axios({
    url: `http://focuz.justkode.kr:8080/${endPoint}`,
    method: 'POST',
    params: params,
});

const deleteAxios = (endPoint)=>axios({
    url: `http://focuz.justkode.kr:8080/${endPoint}`,
    method: 'DELETE',
})

getAxios({endPoint: '/user/list'}).
    then((res)=>{
        console.log(res);
    })
