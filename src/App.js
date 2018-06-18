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
			items: {},
			admin: false
		}


		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				// User is signed in.
				this.displayName = user.displayName;
				this.email = user.email;
				// var emailVerified = user.emailVerified;
				// var photoURL = user.photoURL;
				// var isAnonymous = user.isAnonymous;
				this.uid = user.uid;
				// var providerData = user.providerData;
				var email = user.email.split('@');
				if(email[email.length-1]==="dtechhs.org"){
					this.setState({
						login: true
					});
					if(!this.isNumeric(email[email.length-2].charAt(email[email.length-2].length-1))){
						this.setState({
							admin: true
						})
					}
				}else{
					alert("You are attempting to use a non-dtechhs email! Please sign in with your school email.");
					firebase.auth().signOut().then(function() {
						// Sign-out successful.
					  }).catch(function(error) {
						// An error happened.
					  });
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
			if(snapshot.val() != undefined){
				this.setState({
					items: snapshot.val()
				});
			} else {
				this.setState({
					items: {}
				});
			}
			this.setState({databaseRecieved: true});
		});
	}

	isNumeric = (num) => {
		return !isNaN(parseFloat(num)) && isFinite(num);
	}


	render = () => {
		return this.state.databaseRecieved ? (
			<div>
				<ButtonAppBar login={this.state.login} name={this.displayName}/>
				<MainPanel login={this.state.login} uid={this.uid} items={this.state.items} admin={this.state.admin} userName={this.email}/>
			</div>
		) : <Loading/>;
	}
}

export default App;
