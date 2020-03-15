import React, {createContext, useState} from 'react';
import {registerService}  from "../services/authService";
// eslint-disable-next-line no-unused-vars
import {UserDataType} from "../types/UserTypes";

// @ts-ignore
export const AuthContext = createContext();

const AuthContextProvider = (props: any) => {
    const [authState, setAuthState] = useState({
        // TODO: is LoggedIn should by dynamic
        isLoggedIn: false,
        user: {},
        email: '',
        password: '',
        rePassword: '',
        error: '',
    });

    const register = async (data: UserDataType) => {
        const registerUser = await registerService(data);
        setAuthState({...authState, user: registerUser});
    };

    return (
        <AuthContext.Provider value={{authState, register}}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;
