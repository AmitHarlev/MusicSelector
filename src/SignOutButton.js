import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'

class SignOutButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                    <Button variant="outlined" color='inherit' onClick={this.handleSignOut}>
                        Sign Out
                    </Button>
		        );
    }

}

export default SignOutButton;
