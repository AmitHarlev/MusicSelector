import React, { Component } from 'react';
import fire from './fire'

class UpDoot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			vote: props.name.value,
			clicked: false
		};

	}

	handleClick = () => {
		// fire.database().ref('songs').ref(this.props.id).on('value', (snapshot) => {
		// 	// const items = Object.keys(snapshot.val()).map(val => snapshot.val()[val])
		// 	// console.log(items);
		// 	this.setState({
		// 		vote: this.state.clicked ? this.state.vote - 1 : this.state.vote + 1,
		// 		clicked: !this.state.clicked
		// 	});
		//  });
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