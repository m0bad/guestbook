import React from 'react';
import {Link} from 'react-router-dom';
import './landing-page.css';

export const LandingPage = () => {
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
                <Link to="/auth" className="landing-page-btn landing-page-btn-white">Login</Link>
            </div>
        </header>
    );
};


export default LandingPage;
