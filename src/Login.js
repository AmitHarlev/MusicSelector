import React, { Component, ReactFragment } from 'react';
import logo from './logo.svg';
import fire from './fire';
import Button from '@material-ui/core/Button';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};

       // let provider = new fire.auth.GoogleAuthProvider();
    }

    // handleGoogleLogin() {
    //     loginWithGoogle()
    //         .catch(function (error) {
    //             alert(error); // or show toast
    //             localStorage.removeItem(firebaseAuthKey);
    //         });
    //     localStorage.setItem(firebaseAuthKey, "1");
    // }

	render() {
		return  (
                    <div>
                        <h1>Login</h1>
                        <div>
                        <Button variant="contained" color='secondary'>
                            Sign in with Google
                        </Button>
                        </div>
                    </div>
		        );
    }

}

export default Login;
