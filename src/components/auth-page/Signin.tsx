import React from 'react';
// eslint-disable-next-line no-unused-vars
import {LoginDataType} from "../../types/UserTypes";

type SignInProps = {
    handleChange(): void;
    value: LoginDataType
}
const Signin: React.FC<SignInProps> = ({value, handleChange}: SignInProps) => {
    return (
        <div>
            <input
                id='email'
                placeholder='Email'
                name="email"
                type='text'
                value={value.email}
                onChange={handleChange}
            />
            <input
                id='pass'
                name="password"
                placeholder='Password'
                type='password'
                value={value.password}
                onChange={handleChange}
            />
        </div>
    );
};

export default Signin;
