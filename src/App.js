import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel'
import firebase from 'firebase'
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			login:false
		}

		this.login = false

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				// User is signed in.
				// var displayName = user.displayName;
				// var email = user.email;
				// var emailVerified = user.emailVerified;
				// var photoURL = user.photoURL;
				// var isAnonymous = user.isAnonymous;
				this.uid = user.uid;
				// var providerData = user.providerData;
				this.setState({
					login:true
				});
				// ...
			} else {
				// ...
				this.setState({
					login:false
				});
			}
		});
	}

	render() {
		return (
			<div>
				<MainPanel login={this.state.login} uid={this.uid}/>
				<SignInButton />
				<SignOutButton />
			</div>
		);
	}
}

export default App;
