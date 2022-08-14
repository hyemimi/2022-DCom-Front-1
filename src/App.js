import React, { useEffect, useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { ThemeContext } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';
import { fetchAllUserList } from './store/user';
import { useThemeColor } from './Context/theme';

function App () {
    const theme = useThemeColor();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchAllUserList()
            .then((res) => {
                setUser(res.data[1]);
                setIsLoggedIn(true);
                console.log('user', res.data);
            });
    }, []);

    return (
        <ThemeContext.Provider>
            <AuthContext.Provider
                value={{
                    isLoggedIn,
                    user
                }}>
                <BaseLayout>
                    <Routes style={{backgroundColor: theme.background}}>
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
