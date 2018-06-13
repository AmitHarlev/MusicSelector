import fire from './fire';
import React, { Component } from 'react';
import UpDoot from './UpDoot';
import SubmitSong from './SubmitSong';
import SignOutButton from './SignOutButton';

class MainPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {},
			sortedKeys: []
		}

		fire.database().ref('songs').on('value', (snapshot) => {

			console.log(snapshot.val());
			const items = Object.keys(snapshot.val()).map(val => snapshot.val()[val])
			console.log(Object.keys(snapshot.val()));
			this.setState({
				items: snapshot.val()
			});
		});


	}

	SongList = () => {
		return sortedKeys.map((itemKey, index) => (
			<span key={itemKey}><li><UpDoot uid={this.props.uid} value={this.getSongVoteCount(itemKey)} id={itemKey} login={this.props.login}/>{this.state.items[itemKey].name}</li></span>
		));
	}

	getSongVoteCount = (songKey) => {
		console.log(this.state.items[songKey])
		return (this.state.items[songKey].votes) ? Object.keys(this.state.items[songKey].votes).length : 0
	}

	render() {
		return (
			<div>
				<h1>{this.props.login}</h1>
				<SubmitSong/>
				<ul>
					<this.SongList />
				</ul>
			</div>
		)
	}
}

export default MainPanel