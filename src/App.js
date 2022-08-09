import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(true);
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            profileImage: null,
            nickname: 'chichi',
            motto: 'I AM CUTE'
        }}>
            <BaseLayout>
                <Routes>
                    {routes.map((r)=>
                        (<Route
                            key={r.id}
                            path={r.path}
                            element={<r.component/>}/>))
                    }
                </Routes>
            </BaseLayout>
        </AuthContext.Provider>
    );
}

export default App;
