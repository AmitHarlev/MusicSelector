import fire from './fire';
import React, { Component } from 'react';
import UpDoot from './UpDoot';

class MainPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			textBoxValue: ""
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

	handleChange = (e) => {
		this.setState({ textBoxValue: e.target.value });
	}

	handleSubmit = (e) => {
	  e.preventDefault()

		this.props.database.ref('songs').push({ name: this.state.textBoxValue, value: 0 });

		this.setState({
			items: this.state.items.concat({ name: this.state.textBoxValue, value: 0 }),
			textBoxValue: ""
		});
	}

	SongList = () => {
		return Object.keys(this.state.items).map((itemKey, index) => (
			<span><li key={this.state.items[itemKey].name}>{this.state.items[itemKey].name} <UpDoot name={this.state.items[itemKey]} id="1" /></li></span>
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
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.textBoxValue} onChange={this.handleChange}></input>
					<input type="submit" />
				</form>
				<ul>
					<this.SongList />
				</ul>
			</div>
		)
	}
}

export default MainPanel