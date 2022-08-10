import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
export const AuthContext = createContext({
    isLoggedIn: false,
    user: {
        id: null,
        name: null,
        profileImage: null,
        nickname: null,
        motto: null,
    },
    setIsSignedIn: () => {},
    setProfile: () => {},
});

export const useAuth = () => useContext(AuthContext);
