import React from 'react';
import './auth.css';

type AuthTabProp = {
    name: string,
    label: string,
    changeForm(newForm: string): void
}

const AuthTab: React.FC<AuthTabProp> = ({name, label, changeForm}: AuthTabProp) => {
    return (
        <span onClick={() => changeForm(name)}>
            <input id={name} name='action' type='radio' value={name}/>
            <label htmlFor={name}>{label}</label>
        </span>
    );
};

export default AuthTab;

