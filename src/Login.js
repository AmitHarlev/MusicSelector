import React, { Component } from 'react';
import logo from './logo.svg';
import fire from './fire';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'
import SignOutButton from './SignOutButton'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            //   var displayName = user.displayName;
            //   var email = user.email;
            //   var emailVerified = user.emailVerified;
            //   var photoURL = user.photoURL;
            //   var isAnonymous = user.isAnonymous;
            //   var uid = user.uid;
            //   var providerData = user.providerData;
              props.history.push("/app");
              // ...
            } else {
                props.history.push("/login");
              // ...
            }
          });
    }

    handleGoogleLogin = () => {
        firebase.auth().signInWithRedirect(this.provider);
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
                        <SignOutButton/>
                        </div>
                    </div>
		        );
    }

}

export default Login;
