// eslint-disable-next-line no-unused-vars
import {LoginDataType, UserDataType} from "../types/UserTypes";

export const registerService = async (data: UserDataType) => {
    const {email, password, rePassword} = data;
    if (password !== rePassword) {
        throw new Error('invalid email/password')
    }
    const result = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (result.status === 200) {
        return result.json();
    } else {
        // TODO: handle this later
        throw new Error('ERROR at register')

    }
};


export const loginService = async (data: LoginDataType) => {
    const {email, password} = data;
    const result = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (result.status === 200) {
        return result.json();
    } else {
        // TODO: handle this later
        throw new Error('ERROR at login')

    }

};
