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

		this.props.callback(this.state.textBoxValue);

		this.setState({
			textBoxValue: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextField id = "search" label = "Search Song" type="search" margin = "normal" style = {{marginRight:"20px", marginLeft:"20px",width:"1000px"}} value={this.state.textBoxValue} onChange={this.handleChange} disabled={this.props.login ? false : true}></TextField>
				<Button variant = "contained" color = "primary" type="submit" disabled={this.props.login ? false : true}><Search/></Button>
			</form>
		)
	}
}

export default SubmitSong	