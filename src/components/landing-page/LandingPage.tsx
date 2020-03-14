import React from 'react';
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
                <a href="#" className="landing-page-btn landing-page-btn-white">Login</a>
            </div>
        </header>
    );
};


export default LandingPage;
