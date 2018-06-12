import React, { Component } from 'react';
import logo from './logo.svg';
import fire from './fire';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
    }

    handleGoogleLogin = () => {
        firebase.auth().signInWithRedirect(this.provider);

        // firebase.auth().getRedirectResult().then(function(result) {
        //     if (result.credential) {
        //       // This gives you a Google Access Token. You can use it to access the Google API.
        //       var token = result.credential.accessToken;
        //       // ...

        //       this.props.router.push('/app')
        //       console.log("Auth Succesful")
        //     }
        //     // The signed-in user info.
        //     this.props.router.push('/foo')
        //     console.log("Auth Succesful")
        //     window.location.href = "/app";
        //     var user = result.user;
        //   }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        //   });
    }

    handleSignOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

	render() {
		return  (
                    <div>
                        <h1>Login</h1>
                        <div>
                        <Button variant="contained" color='secondary' onClick={this.handleGoogleLogin}>
                            Sign in with Google
                        </Button>
                        <Button variant="contained" color='primary' onClick={this.handleSignOut}>
                            Sign Out
                        </Button>
                        </div>
                    </div>
		        );
    }

}

export default Login;
