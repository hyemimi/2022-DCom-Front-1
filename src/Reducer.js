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
                        profileImage: '없음',
                    },
                ],
            },
        ],
        id: 0,
        motto: '꾸준히',
        name: '이혜미',
        nickname: '혬',
        profileImage: '없음',
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
