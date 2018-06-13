import React, { Component } from 'react';
import UpDoot from './UpDoot';
import SubmitSong from './SubmitSong';

class MainPanel extends Component {

	constructor(props) {
		super(props)
		this.sortedKeys = [];
	}

	SongList = () => {
		if (this.sortedKeys.length === 0) {
			var newSortedKeys = Object.keys(this.props.items);
			newSortedKeys.sort((a, b) => (
				this.getSongVoteCount(b) - this.getSongVoteCount(a)
			));
			this.sortedKeys = newSortedKeys;
		} else {
			var newKeys = Object.keys(this.props.items)
			for (var i = 0; i < newKeys.length; i++) {
				if (this.sortedKeys.indexOf(newKeys[i]) === -1) {
					this.sortedKeys.push(newKeys[i]);
				}
			}
		}
		return this.sortedKeys.map((itemKey, index) => (
			<span key={itemKey}><li><UpDoot uid={this.props.uid} value={this.getSongVoteCount(itemKey)} id={itemKey} login={this.props.login} />{this.props.items[itemKey].name}</li></span>
		));
	}

	getSongVoteCount = (songKey) => {
		return (this.props.items[songKey].votes) ? Object.keys(this.props.items[songKey].votes).length : 0
	}

	render = () => {
		return (
			<div>
				<h1>{this.props.login}</h1>
				<SubmitSong />
				<ul>
					<this.SongList />
				</ul>
			</div>
		)
	}
}

export default MainPanel