import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel'
import firebase from 'firebase'

class App extends Component {

	constructor(props) {
		super(props);

		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				// User is signed in.
				// var displayName = user.displayName;
				// var email = user.email;
				// var emailVerified = user.emailVerified;
				// var photoURL = user.photoURL;
				// var isAnonymous = user.isAnonymous;
				// var uid = user.uid;
				// var providerData = user.providerData;
				props.history.push("/app");
				// ...
			} else {
				props.history.push("/login");
				// ...
			}
		});
	}

	render() {
		return (
			<MainPanel />
		);
	}
}

export default App;
