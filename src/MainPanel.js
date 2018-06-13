import fire from './fire';
import React, { Component } from 'react';
import UpDoot from './UpDoot';
import SubmitSong from './SubmitSong';
import SignOutButton from './SignOutButton';

class MainPanel extends Component {

	SongList = () => {
		return Object.keys(this.props.items).map((itemKey, index) => (
			<span key={itemKey}><li>{this.props.items[itemKey].name} <UpDoot uid={this.props.uid} value={(this.props.items[itemKey].votes) ? Object.keys(this.props.items[itemKey].votes).length : 0} id={itemKey} login={this.props.login}/></li></span>
		));
	}

	render = () => {
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