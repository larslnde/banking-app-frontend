import React from 'react';
import { Link } from 'react-router-dom';

const SignInForm = (props) => (
    <div>
        <h1>Sign in</h1>
        <input id="username" type="text"></input>
        <input id="userpassword" type="password"></input>
        {/* TODO: Add sign in validation! */}
        <button onClick={props.handleSignIn}>Sign In</button>
        <Link to="/Create">Click here to Create Account</Link>

    </div>
);

export default SignInForm;