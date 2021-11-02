import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        authenticated: false
    };

    // TODO: ADD PROPER AUTHENTICATION HERE!

    handleSignIn = () => {
        this.props.history.push('/dashboard');

        console.log("handle Sign in")
        this.setState(() =>({
            authenticated: true
        }));

        console.log('button pressed', this.authenticated);
    };

    render () {
        return (
            <div>
                <h1>Sign in</h1>
                <input id="username" type="text"></input>
                <input id="userpassword" type="password"></input>
                <button onClick={this.handleSignIn}>Sign In</button>
                <Link to="/Create">Click here to Create Account</Link>
            </div>
        )
    }

    
};

export default Login;