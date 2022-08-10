import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './Reducer';

const store = configureStore({
    reducer: {
        user: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
