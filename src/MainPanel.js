import React, { Component } from 'react';
import SubmitSong from './SubmitSong';
import SongPost from './SongPost';
import getSongVoteCount from './Utilities';
import SongSearch from './SongSearch';

class MainPanel extends Component {

	constructor(props) {
		super(props)
		this.sortedKeys = [];
	}

	SongList = () => {
		if (this.sortedKeys.length === 0) {
			var newSortedKeys = Object.keys(this.props.items);
			newSortedKeys.sort((a, b) => (
				getSongVoteCount(this.props.items, b) - getSongVoteCount(this.props.items, a)
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
			<SongPost key={itemKey} uid={this.props.uid} items={this.props.items} id={itemKey} login={this.props.login}/>
		));
	}

	render = () => {
		return (
			<div>
				<h1>{this.props.login}</h1>
				<SubmitSong />
				<ul>
					<this.SongList />
				</ul>
				<SongSearch/>
			</div>
		)
	}
}

export default MainPanel