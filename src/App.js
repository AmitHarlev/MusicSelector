import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

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
			items: ["Call Me Maybe"]
		}
	}

	SongList = () => {
		return this.state.items.map((item, index) => (
			<li key={index}><span>{item} <UpVote /></span></li>
		));
	}

	addSong = (songName) => {
		this.setState({
			items: this.state.items.concat(songName)
		})
	}


	render() {
		return (
			<div>
				<AddForm add={this.addSong} />
				<this.SongList />
			</div>
		)
	}
}

class AddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textBoxValue: ""
		}
	}

	handleChange = (e) => {
		this.setState({ textBoxValue: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.add(this.state.textBoxValue)
		this.setState({
			textBoxValue: ""
		});
	}

	render() {
		return (<form onSubmit={this.handleSubmit}>
			<input type="text" value={this.state.textBoxValue} onChange={this.handleChange}></input>
			<input type="submit" />
		</form>)
	}
}

class UpVote extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			vote: 0,
			alreadyVoted: false
		};

	}

	vote = () => {
		if (this.state.alreadyVoted) {
			this.setState({
				vote: this.state.vote - 1,
				alreadyVoted: false
			})
		} else {
			this.setState({
				vote: this.state.vote + 1,
				alreadyVoted: true
			});
		}
	}

	render() {
		return (<div>
			<button onClick={this.vote}>{(this.state.alreadyVoted) ? "Remove Upvote" : "Upvote"}</button>
			<span>{this.state.vote}</span>
		</div>);
	}
}

export default App;
