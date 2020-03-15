import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import AuthPage from "./components/auth-page/AuthPage";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
    return (
        <div>
            <AuthContextProvider>
                <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/auth' component={AuthPage}/>
            </Switch>
            </AuthContextProvider>
        </div>
    );
}

export default App;
