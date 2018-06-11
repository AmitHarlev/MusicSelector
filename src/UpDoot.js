import React, { Component } from 'react';
import fire from './fire'

class UpDoot extends React.Component {

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
				<button onClick={this.handleClick}>Click Me</button>
				---{this.props.value}
			</span>
		);
	}
}

export default UpDoot