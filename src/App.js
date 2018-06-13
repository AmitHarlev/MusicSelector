import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel'
import firebase from 'firebase'
import fire from './fire'
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import ButtonAppBar from './ButtonAppBar';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			login: false,
			databaseRecieved: false,
			items: {}
		}


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
					login: true
				});
				// ...
			} else {
				// ...
				this.setState({
					login: false
				});
			}
		});

		fire.database().ref('songs').on('value', (snapshot) => {
			console.log(snapshot.val());
			const items = Object.keys(snapshot.val()).map(val => snapshot.val()[val])
			console.log(Object.keys(snapshot.val()));
			this.setState({
				items: snapshot.val()
			});
			this.setState({databaseRecieved: true});
		});
	}


	render = () => {
		return this.state.databaseRecieved ? (
			<div>
				<ButtonAppBar/>
				<MainPanel login={this.state.login} uid={this.uid} items={this.state.items} />
				{this.state.login ? <SignOutButton /> : <SignInButton />}
			</div>
		) : <p> loading.... </p>;
	}
}

export default App;
