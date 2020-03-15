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
        try {
            authStateRef.current.user = await registerService(data);
            authenticateUser(authStateRef.current.user);
        } catch (e) {
            authStateRef.current.error = e.message;
        }
    };

    const login = async (data: LoginDataType) => {
        try {
            authStateRef.current.user = await loginService(data);
            authenticateUser(authStateRef.current.user);
        } catch (error) {
            authStateRef.current.error = error;
        }
    };

    const authenticateUser = (value: { _id: string; email: string; token: string }) => {
        localStorage.setItem('user', JSON.stringify(value));
        authStateRef.current.isLoggedIn = true;
        authStateRef.current.error = '';
    };



    return (
        <AuthContext.Provider value={{ authState: authStateRef.current, register, login }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
