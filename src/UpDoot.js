import React, { Component } from 'react';
import fire from './fire'

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
				<button onClick={this.handleClick}>Click Me</button>
				---{this.props.value}
			</span>
		);
	}
}

export default UpDoot