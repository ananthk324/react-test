import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../pages/Signin";

const RoutesNoAuth = () => {
/*
    These routes will be provided to App when
    the User Auth state in Context is false or null - is logged out
*/
    return (
        <Switch>
            <Route exact path="/" component={ Signin } />
        </Switch> 
    );
}

export default RoutesNoAuth;