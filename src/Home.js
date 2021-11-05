import { useHistory } from "react-router";
import {useOktaAuth} from '@okta/okta-react';
import { Link } from "react-router-dom";


function Home() {
    const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push('/login');

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button onClick={login}>Login</button>;
    return (
        <div>
            <Link to="/">Home</Link><br/>
            <h1>Welcome...You are loggedin</h1><br/>
            {button}
        </div>
    )   
}

export default Home;