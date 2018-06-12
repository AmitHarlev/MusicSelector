import React, { Component } from 'react';
import fire from './fire'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class UpDoot extends Component {

	constructor(props) {
		super(props);
	}

	handleClick = () => {
		fire.database().ref('songs/'+ this.props.id ).update({
			value: this.props.value + 1
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