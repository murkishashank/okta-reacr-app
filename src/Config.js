const oktaAuthConfig = {
    issuer: 'https://dev-76014703.okta.com/oauth2/default',
    clientId: '0oa2f4bri5HvOPXmq5d7',
    redirectUri: window.location.origin + '/login/callback',
    // pkce: true,
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-76014703.okta.com',
    clientId: '0oa2f4bri5HvOPXmq5d7',
    redirectUri: window.location.origin + '/login/callback',
};

export { oktaAuthConfig, oktaSignInConfig };