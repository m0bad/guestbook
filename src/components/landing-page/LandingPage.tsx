import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './landing-page.css';
import {AuthContext} from "../../contexts/AuthContext";

export const LandingPage = () => {
    const {authState} = useContext(AuthContext);
    return (
        <header className="landing-page-container">
            <div className="landing-page-brand-box">
                <span className="landing-page-brand">Guestbook</span>
            </div>

            <div className="landing-page-text-box">
                <h1 className="landing-page-heading-primary">
                    <span className="landing-page-heading-primary-main">Welcome to Guestbook</span>
                    <span className="landing-page-heading-primary-sub">What do you think about us?</span>
                </h1>
                {
                    authState.isLoggedIn
                        ? <Link to="/messages" className="landing-page-btn landing-page-btn-white">Messages</Link>
                        : <Link to="/auth" className="landing-page-btn landing-page-btn-white">Login</Link>
                }
            </div>
        </header>
    );
};


export default LandingPage;
