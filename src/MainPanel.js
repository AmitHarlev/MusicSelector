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
			<span><li key={itemKey}>{this.state.items[itemKey].name} <UpDoot value={this.state.items[itemKey].value} id={itemKey} login={this.props.login}/></li></span>
		));
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