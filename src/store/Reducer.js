import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { useState } from 'react';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    //dummy
    initialState: {},
    reducers: {
        // 현재 유저 정보를 가져와 state에 저장합니다
        init: async (state, action) => {
            let userData;
            await axios({
                url: 'http://focuz.justkode.kr:8080/user/1',
                method: 'get',
                data: {},
            }).then((r) => (userData = r.data));
            state = userData;
            console.log(state);
        },
        /* register: (state, action) => {
            axios({
                url: `http://focuz.justkode.kr:8080/user/register`,
                method: 'POST',
                params: {
                    motto: action.payload.motto,
                    nickname: action.payload.nickname,
                },
            });
        }, */
        edit: (state, action) => {
            state.motto = action.payload.motto;
            state.nickname = action.payload.nickname;
            state.profileImage = action.payload.profileImage;
        },
    },
});

export default userSlice.reducer;
export const { init, register, edit } = userSlice.actions;
