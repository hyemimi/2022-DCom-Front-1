import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { useState } from 'react';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    //dummy
    initialState: {
        email: 'gkj8963@khu.ac.kr',
        groups: [
            {
                description: '파이썬스터디',
                id: 0,
                name: 'studdd',
                users: [
                    {
                        id: 0,
                        motto: '꾸준히',
                        name: '이혜미',
                        nickname: '혬',
                        profileImage:
                            'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
                    },
                ],
            },
        ],
        id: 0,
        motto: '꾸준히',
        name: '이혜미',
        nickname: '혬',
        profileImage:
            'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        role: '멤버',
    },
    reducers: {
        // 현재 유저 정보를 가져와 state에 저장합니다
        init: (state, action) => {
            state = axios({
                url: 'http://focuz.justkode.kr:8080/user/1',
                method: 'get',
                data: {},
            }).then((r) => console.log(r.data));
        },
        edit: (state, action) => {
            state.motto = action.payload.motto;
            state.nickname = action.payload.nickname;
            state.profileImage = action.payload.profileImage;
        },
    },
});

export default userSlice.reducer;
export const { init, edit } = userSlice.actions;
