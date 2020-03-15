import React, {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import AuthPage from "../components/auth-page/AuthPage";
import {Route} from "react-router-dom";

type PrivateRouteProps = {
    component: React.FC;
    options: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component, ...options}: PrivateRouteProps) => {
    const {isLoggedIn} = useContext(AuthContext);
    const finalComponent = isLoggedIn ? component : AuthPage;

    return <Route {...options} component={finalComponent}/>
};

export default PrivateRoute;
