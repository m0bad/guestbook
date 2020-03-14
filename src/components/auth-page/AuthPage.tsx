import React, {useState} from 'react';
import './auth.css';
import AuthTab from "./AuthTab";
import Signup from "./Signup";
import Signin from "./Signin";
import ResetPassword from "./ResetPassword";

export const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState('signin');

    const getCurrentForm = () => {
        switch (currentForm) {
            case 'signin':
                return <Signin/>;
            case 'signup':
                return <Signup/>;
            default:
                return <ResetPassword/>;
        }
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

                <button type='submit'>
                    {
                        currentForm === 'signin'
                            ? 'Sign in'
                            : currentForm === 'signup'
                            ? 'Sign up'
                            : 'Reset password'}
                </button>
            </form>

            <div id='hint'>Click on the tabs</div>
        </div>
    );
};
