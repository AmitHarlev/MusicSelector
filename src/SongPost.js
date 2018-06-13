import React, { Component } from 'react';
import UpDoot from './UpDoot';
import getSongVoteCount from './Utilities';

class SongPost extends React.Component {

	constructor(props) {
		super(props)
	}

	render = () => {
		return (<span><li><UpDoot uid={this.props.uid} value={getSongVoteCount(this.props.items, this.props.id)} id={this.props.id} login={this.props.login} />{this.props.items[this.props.id].name}</li></span>)
	}
}

export default SongPost