import fire from './fire';
import React, { Component } from 'react';
import UpDoot from './UpDoot';
import SubmitSong from './SubmitSong';

class MainPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		fire.database().ref('songs').on('value', (snapshot) => {
			const items = Object.keys(snapshot.val()).map(val => snapshot.val()[val])
			console.log(items);
			this.setState({
				items: items
			});
		});
	}

	SongList = () => {
		return this.state.items.map((item, index) => (
			<span><li key={item.name}>{item.name} <UpDoot name={item} /></li></span>
		));
	}

	swapArrayElements = (array, a, b) => {
		const temp = array[a];
		array[a] = array[b]
		array[b] = temp
		return array;
	}


	render() {
		return (
			<div>
				<SubmitSong database={this.props.database} />
				<ul>
					<this.SongList />
				</ul>
			</div>
		)
	}
}

export default MainPanel