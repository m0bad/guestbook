// eslint-disable-next-line no-unused-vars
import {LoginDataType, UserDataType} from "../types/UserTypes";

const apiHelper = async (reqType: string, url: string, body: any): Promise<any> => {
    return fetch(url, {
        method: reqType,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

export const registerService = async (data: UserDataType) => {
    const {email, password, rePassword} = data;
    if (password !== rePassword) {
        throw new Error('invalid email/password')
    }
    const result = await apiHelper('POST', '/api/auth/signup', {email, password});

    if (result.status === 200) {
        return result.json();
    } else {
        // TODO: handle this later
        throw new Error('ERROR at register')

    }
};


export const loginService = async (data: LoginDataType) => {
    const {email, password} = data;
    const result = await apiHelper('POST', '/api/auth/signin', {email, password});
    if (result.status === 200) {
        return result.json();
    } else {
        // TODO: handle this later
        throw new Error('ERROR at login')

    }

};
