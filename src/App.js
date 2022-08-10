import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './store/Reducer';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        setIsLoggedIn(true);
        dispatch(init());
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                profileImage: null,
                nickname: 'chichi',
                motto: 'I AM CUTE',
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
