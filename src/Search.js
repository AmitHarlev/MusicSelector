import React, { Component } from 'react';
import SubmitSong from './SubmitSong';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	render() {
		return (
			<div>
				<SubmitSong/>
			</div>
		)
	}
}

export default Search