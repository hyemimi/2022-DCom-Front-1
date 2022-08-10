import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './Reducer';

const store = configureStore({
    reducer: {
        user: reducer,
    },
    //이슈 해결 + redux-logger 사용하기 : 액션, 상태를 출력해주는 라이브러리
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
