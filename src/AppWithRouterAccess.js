import { Route, useHistory, Switch } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import {oktaAuthConfig, oktaSignInConfig} from './Config.js';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    console.log(originalUri)
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin))
  };

  return (
      <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri = {restoreOriginalUri}>
      <Switch>
      <Route path="/" exact={true} component={Home}/>
      <SecureRoute path='/protected' component={Protected} />
      <Route path='/login' render={() => <Login config={oktaSignInConfig}/>}></Route>
      <Route path='/login/callback' component={LoginCallback} />
      </Switch>
      </Security>
  );
}

export default AppWithRouterAccess;
