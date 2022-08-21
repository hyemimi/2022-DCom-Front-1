import { createContext, useContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    user: {
        id: null,
        email: null,
        name: null,
        profileImage: null,
        nickname: null,
        motto: null,
        groups: [],
    },
    setIsLoggedIn: () => {},
    setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);
