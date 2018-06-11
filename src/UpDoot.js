import React, { Component } from 'react';

class UpDoot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			vote: props.name.value,
			clicked: false
		};

	}

	handleClick = () => {
		this.setState({
			vote: this.state.clicked ? this.state.vote - 1 : this.state.vote + 1,
			clicked: !this.state.clicked
		});
	}

	render() {
		return (
			<span>
				<button onClick={this.handleClick}>Click Me</button>
				---{this.state.vote}
			</span>
		);
	}
}

export default UpDoot