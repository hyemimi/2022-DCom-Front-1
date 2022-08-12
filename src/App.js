import React, { useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user: {
                    id: 1,
                    profileImage:
                        'http://k.kakaocdn.net/dn/usXTf/btrISNCWCxI/TNCEwVk0kxp7WFkdY1cXo1/img_640x640.jpg',
                    name: '정지원',
                    nickname: '손님',
                    motto: null,
                    groups: [
                        {
                            description: '....',
                            id: 0,
                            name: '파이썬스터디',
                            users: [
                                {
                                    id: 0,
                                    motto: 'string',
                                    name: '이혜미',
                                    nickname: 'ㅁㅁㅁ',
                                    profileImage: 'string',
                                },
                            ],
                        },
                    ],
                },
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
