import React, { Component } from 'react';
import './App.css';
import MainPanel from './MainPanel'
import firebase from 'firebase'
import fire from './fire'
import ButtonAppBar from './ButtonAppBar';
import Loading from './Loading'

class App extends Component {

	constructor(props) {
		super(props);
		document.body.style = 'background:#F0F0F0;';
		this.state = {
			login: false,
			databaseRecieved: false,
			items: {}
		}


		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				// User is signed in.
				this.displayName = user.displayName;
				// var email = user.email;
				// var emailVerified = user.emailVerified;
				// var photoURL = user.photoURL;
				// var isAnonymous = user.isAnonymous;
				this.uid = user.uid;
				// var providerData = user.providerData;
				var email = user.email.split('@')
				if(email[email.length-1]=="dtechhs.org"){
					this.setState({
						login: true
					});
				}else{
					alert("You are attempting to use a non-dtechhs email! Please sign in with your school email.")
				}
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
				<ButtonAppBar login={this.state.login} name={this.displayName}/>
				<MainPanel login={this.state.login} uid={this.uid} items={this.state.items} />
			</div>
		) : <Loading/>;
	}
}

export default App;
