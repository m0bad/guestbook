import React, { createContext, useRef } from 'react';
import { getCurrentUser, loginService, registerService } from "../services/authService";
// eslint-disable-next-line no-unused-vars
import { LoginDataType, UserDataType } from "../types/UserTypes";

// @ts-ignore
export const AuthContext = createContext();

const AuthContextProvider = (props: any) => {
    const loggedInUser: boolean = !!getCurrentUser();
    const authStateRef = useRef({
        isLoggedIn: loggedInUser,
        user: {
            email: '',
            _id: '',
            token: '',
        },
        error: '',
    });

    const register = async (data: UserDataType) => {
        authStateRef.current.user = await registerService(data);
        authenticateUser(authStateRef.current.user);
    };

    const login = async (data: LoginDataType) => {
        authStateRef.current.user = await loginService(data);
        authenticateUser(authStateRef.current.user);
    };

    const authenticateUser = (value: { _id: string; email: string; token: string }) => {
        authStateRef.current.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(value));
    };

    return (
        <AuthContext.Provider value={{ authState: authStateRef.current, register, login }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
