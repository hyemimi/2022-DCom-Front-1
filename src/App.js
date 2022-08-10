import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import routes from './components/Common/Routes';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { asyncUpFetch, init, register } from './store/Reducer';
import store from './store/Store';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const userI = useSelector((state) => state.user.userInfo);

    useEffect(async () => {
        await dispatch(asyncUpFetch());
        setIsLoggedIn(true);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user: userI /* {
                    id: 1,
                    profileImage:
                        'http://k.kakaocdn.net/dn/usXTf/btrISNCWCxI/TNCEwVk0kxp7WFkdY1cXo1/img_640x640.jpg',
                    name: '정지원',
                    nickname: '손님',
                    motto: null,
                }, */,
            }}
        >
            <BaseLayout>
                <Routes>
                    {routes.map((r) => (
                        <Route
                            key={r.id}
                            path={r.path}
                            element={<r.component />}
                        />
                    ))}
                </Routes>
            </BaseLayout>
        </AuthContext.Provider>
    );
}

export default App;
