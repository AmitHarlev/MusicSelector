import React, { Component } from 'react';
import logo from './logo.svg';
import fire from './fire';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'
import SignOutButton from './SignOutButton'
import SignInButton from './SignInButton';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		firebase.auth().onAuthStateChanged(function (user) {
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

		firebase.auth().getRedirectResult().then(function (result) {
			if (result.credential) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
				// ...
			}
			// The signed-in user info.
			var user = result.user;
		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});

	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<div>
					<SignInButton />
					<SignOutButton />
				</div>
			</div>
		);
	}

}

export default Login;
