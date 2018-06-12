import React, { Component } from 'react';
import fire from './fire'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class UpDoot extends Component {

	constructor(props) {
		super(props);
	}

	handleClick = () => {
		console.log()
		var songRef = fire.database().ref(`songs/${this.props.id}/votes/${this.props.uid}` )
		songRef.once("value", (snapshot) => {
			snapshot.val() ? songRef.remove() : songRef.set(true);
		});
	}

	render() {
		return (
			<span>
				<Button variant="fab" color="primary" aria-label="add" onClick={this.handleClick} disabled={this.props.login ? false : true}>
					<AddIcon />
				</Button>
				---{this.props.value}
			</span>
		);
	}
}

export default UpDoot