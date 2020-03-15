import React, {createContext, useState} from 'react';
import {getCurrentUser, loginService, registerService} from "../services/authService";
// eslint-disable-next-line no-unused-vars
import {LoginDataType, UserDataType} from "../types/UserTypes";

// @ts-ignore
export const AuthContext = createContext();

const AuthContextProvider = (props: any) => {
    // @ts-ignore
    const loggedInUser: boolean = (getCurrentUser !== '');
    let [authState, setAuthState] = useState({
        isLoggedIn: loggedInUser,
        user: {
            email: '',
            _id: '',
            token: '',
        },
        error: '',
    });


    const register = async (data: UserDataType) => {
        const registerUser = await registerService(data);
        const {email, _id, token} = registerUser;
        setAuthState({...authState, user: {email, _id, token}});
        authenticateUser();
    };

    const login = async (data: LoginDataType) => {
        const loggedInUser = await loginService(data);
        const {email, _id, token} = loggedInUser;
        setAuthState({...authState, user: {email, _id, token}});
        authenticateUser();
    };

    const authenticateUser = () => {
        const user = {
            email: authState.user.email,
            _id: authState.user._id,
            token: authState.user.token,
        };
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState({...authState, isLoggedIn: true});
    };

    return (
        <AuthContext.Provider value={{authState, register, login}}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;
