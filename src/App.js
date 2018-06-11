import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

var database = fire.database();

class App extends Component {

	render() {
		return (
			<div>
				<MainPanel />
			</div>
		);
	}
}

class MainPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			textBoxValue: ""
		}
		fire.database().ref('songs').once('value').then((snapshot) => {
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

		database.ref('songs').push({ name: this.state.textBoxValue, value: 0 });

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

class UpDoot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			vote: props.name.value,
			clicked: false
		};

	}

	handleClick = () => {
		this.setState({
			vote: this.state.clicked ? this.state.vote - 1 : this.state.vote + 1,
			clicked: !this.state.clicked
		});
	}

	render() {
		return (
			<span>
				<button onClick={this.handleClick}>Click Me</button>
				---{this.state.vote}
			</span>
		);
	}
}

export default App;
