import React, { useEffect, useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { ThemeProvider } from './Context/theme';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';
import { fetchUserInfo, getCurrentUserInfo } from './store/user';
import { useThemeColor } from './Context/theme';
import { tempUser } from './store/temp/tempUserData';


function App() {
    const theme = useThemeColor();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // false로 수정해야함 (8/23)
    const [user, setUser] = useState(null); // null로 수정해야함 (8/23)

    useEffect(() => {
        getCurrentUserInfo().then((res) => {
            setUser(res.data);
            setIsLoggedIn(true);
        });
    }, []);

    return (
        <ThemeProvider>
            <AuthContext.Provider
                value={{
                    isLoggedIn,
                    user,
                }}
            >
                <BaseLayout>
                    <Routes style={{ backgroundColor: theme.background }}>
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
        </ThemeProvider>
    );
}

export default App;
