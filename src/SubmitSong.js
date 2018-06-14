import fire from './fire';
import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';
import Search from '@material-ui/icons/Search'

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

		fire.database().ref('songs').push({ name: this.state.textBoxValue});

		this.setState({
			textBoxValue: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextField id = "search" label = "Search Song" type="search" margin = "normal" style = {{marginRight:"20px", marginLeft:"20px"}} value={this.state.textBoxValue} onChange={this.handleChange}></TextField>
				<Button variant = "contained" color = "primary" type="submit"><Search/></Button>
			</form>
		)
	}
}

export default SubmitSong	