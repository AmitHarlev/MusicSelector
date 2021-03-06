import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'

class SignInButton extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		this.provider = new firebase.auth.GoogleAuthProvider();
		this.provider.setCustomParameters({
			'hd': 'dtechhs.org', 'prompt': 'select_account'
		});
		firebase.auth().useDeviceLanguage();
	}

	handleGoogleLogin = () => {
		firebase.auth().signInWithRedirect(this.provider);
	}

	render() {
		return (
			<Button variant="outlined" color='inherit' onClick={this.handleGoogleLogin}>Login</Button>
		);
	}

}

export default SignInButton;
