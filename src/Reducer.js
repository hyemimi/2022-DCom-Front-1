import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';

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
        init: (state, action) => {
            state = action.payload; // 로그인 기능 구현 후 다시
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
