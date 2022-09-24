import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import axios from 'axios';
//createAsyncThunk은 비동기작업을 처리하는 action creator를 만듭니다.
const asyncUpFetch = createAsyncThunk('userSlice/asyncUpFetch', async () => {
    let userData;
    await axios({
        url: 'http://localhost:8080/user/1',
        method: 'get',
        data: {},
    }).then((r) => (userData = r.data));
    return userData;
});
const userSlice = createSlice({
    name: 'user',
    //dummy
    initialState: { userInfo: {} },
    reducers: {
        // 현재 유저 정보를 가져와 state에 저장합니다
        /* init: async (state, action) => {
            let userData;
            await axios({
                url: 'http://focuz.justkode.kr:8080/user/1',
                method: 'get',
                data: {},
            }).then((r) => (userData = r.data));
            state = userData;
            console.log(state);
        }, */
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
    //thunk를 처리할 때는 extraReducers를 사용합니다.
    extraReducers: (builder) => {
        //action creator.fulfilled 는 완료 상태를 의미합니다.
        builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
            state.userInfo = action.payload;
        });
    },
});

export default userSlice.reducer;
export const { edit } = userSlice.actions;
export { asyncUpFetch };
