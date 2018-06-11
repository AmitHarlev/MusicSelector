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
			const items = Object.keys(snapshot.val()).map(val => snapshot.val()[val])
			console.log(items);
			this.setState({
				items: items
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