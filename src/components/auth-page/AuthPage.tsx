import React, {useContext, useState} from 'react';
import './auth.css';
import AuthTab from "./AuthTab";
import Signup from "./Signup";
import Signin from "./Signin";
import ResetPassword from "./ResetPassword";
import {withRouter} from 'react-router-dom';
import {AuthContext} from "../../contexts/AuthContext";
import useInputState from "../../hooks/useInputState";

//TODO: how to do this with type script
const AuthPage = (props: any) => {
    const {register} = useContext(AuthContext);
    const [currentForm, setCurrentForm] = useState('signin');
    const [value, handleChange, reset] = useInputState({
        email: '',
        password: '',
        rePassword: ''
    });
    const getCurrentForm = () => {
        switch (currentForm) {
            case 'signin':
                return <Signin />;
            case 'signup':
                return <Signup handleChange={handleChange} value={value}/>;
            default:
                return <ResetPassword/>;
        }
    };

    const getCurrentButton = () => {
        switch (currentForm) {
            case 'signin':
                return <button type='submit'>Sign in</button>;
            case 'signup':
                return <button onClick={handleButtonSubmit} type='submit'>Sign up</button>;
            default:
                return <button type='submit'>Reset password</button>;
        }
    };

    const handleButtonSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        register(value);
        reset();
    };
    return (
        <div>
            <form>
                <AuthTab name='signin' label='Sign in' changeForm={setCurrentForm}/>
                <AuthTab name='signup' label='Sign up' changeForm={setCurrentForm}/>
                <AuthTab name='reset' label='Reset' changeForm={setCurrentForm}/>
                <div id='wrapper'>
                    {getCurrentForm()}
                </div>

                {getCurrentButton()}
            </form>

            <div id='hint' onClick={() => props.history.goBack()}>Go To Home Page</div>
        </div>
    );
};


export default withRouter(AuthPage);
