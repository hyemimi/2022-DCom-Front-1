import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer';

const store = configureStore({
    reducer: {
        user: reducer,
    },
});

export default store;
