import React, { Component } from 'react';

class SubmitSong extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textBoxValue: ""
		}
	}

	handleChange = (e) => {
		this.setState({ textBoxValue: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault()

		// fire.database().ref('songs').push({ name: this.state.textBoxValue});

		this.props.callback(this.state.textBoxValue);

		this.setState({
			textBoxValue: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.textBoxValue} onChange={this.handleChange}></input>
				<input type="submit" />
			</form>
		)
	}
}

export default SubmitSong