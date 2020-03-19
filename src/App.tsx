import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import AuthPage from "./components/auth-page/AuthPage";
import MessagesList from "./components/messages-page/messages-list/MessagesList";
import AuthContextProvider from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoutes";
import MessageContextProvider from "./contexts/MessageContext";

function App() {
    return (
        <div>
            <AuthContextProvider>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/auth' component={AuthPage}/>
                    <MessageContextProvider>
                        <PrivateRoute exact path='/messages' component={MessagesList}/>
                    </MessageContextProvider>
                </Switch>
            </AuthContextProvider>
        </div>
    );
}

export default App;
