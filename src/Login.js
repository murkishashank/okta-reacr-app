import React from "react";
import { Redirect } from "react-router";
import OktaSignInWidget from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react/";

const Login = ({config}) => {
    const {oktaAuth, authState} = useOktaAuth();

    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (error) => {
        console.log('error logging in', error);
    };

    if(!authState) return null;

    return authState.isAuthenticated ? <Redirect to={{pathname: '/'}} /> : <OktaSignInWidget config={config} onSuccess = {onSuccess} onError = {onError}/>;
};

export default Login;