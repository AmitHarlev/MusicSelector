import fire from './fire';
import React, { Component } from 'react';
import UpDoot from './UpDoot';
import SubmitSong from './SubmitSong';
import SignOutButton from './SignOutButton';

class MainPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
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
		return Object.keys(this.state.items).map((itemKey, index) => (
			<span><li key={itemKey}>{this.state.items[itemKey].name} <UpDoot uid={this.props.uid} value={(this.state.items[itemKey].votes) ? Object.keys(this.state.items[itemKey].votes).length : 0} id={itemKey} /></li></span>
		));
	}

	render() {
		return (
			<div>
				<SubmitSong />
				<ul>
					<this.SongList />
				</ul>
			</div>
		)
	}
}

export default MainPanel