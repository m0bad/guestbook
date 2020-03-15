import React from 'react';
// eslint-disable-next-line no-unused-vars
import {UserDataType} from "../../types/UserDataType";

type SignUpProps = {
    handleChange(): void;
    value: UserDataType
}
const Signup: React.FC<SignUpProps> = ({value, handleChange}: SignUpProps) => {
    return (
        <div>
            <input
                id='email'
                placeholder='Email'
                type='text' name='email'
                value={value.email}
                onChange={handleChange}
            />
            <input
                id='pass'
                placeholder='Password'
                type='password'
                name='password'
                value={value.password}
                onChange={handleChange}
            />
            <input
                id='repass'
                placeholder='Repeat password'
                type='password'
                name='rePassword'
                value={value.rePassword}
                onChange={handleChange}/>
        </div>
    );
};

export default Signup;
