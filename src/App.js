import React, { useEffect, useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { ThemeContext } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';
import { fetchAllUserList, fetchUserInfo } from './store/user';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserInfo(2).then((res) => {
            setUser(res.data);
            setIsLoggedIn(true);
            console.log('user', res.data);
        });
    }, []);

    return (
        <ThemeContext.Provider>
            <AuthContext.Provider
                value={{
                    isLoggedIn,
                    user,
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
        </ThemeContext.Provider>
    );
}

export default App;
