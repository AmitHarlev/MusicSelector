import React, { Component } from 'react';
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
			this.setState({
				items: snapshot.val()
			});
			this.setState({databaseRecieved: true});
		});
	}


	render = () => {
		return this.state.databaseRecieved ? (
			<div>
				<ButtonAppBar login={this.state.login}/>
				<MainPanel login={this.state.login} uid={this.uid} items={this.state.items} />
			</div>
		) : <p> loading.... </p>;
	}
}

export default App;
