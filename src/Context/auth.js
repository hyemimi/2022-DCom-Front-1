import { createContext, useContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    profileImage: null,
    nickname: null,
    motto: null,
    setIsSignedIn: () => {},
    setProfile: () => {},
})

export const useAuth = () => useContext(AuthContext)