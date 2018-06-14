import React, { Component } from 'react';

const youtubeApiKey = 'AIzaSyDldSB62FVZHCb7VVaLCnMKD-OK1AIiHNE'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textBoxValue: ""
		}
		this.loadYoutubeApi
	}
 
	search = (query) => {

		var part = 'snippet';
		var maxResults = 5;

		var results = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${query}&part=${part}&maxResults=${maxResults}`);
		results.then(results => results.json()).then(results=>{
				var videos = [];
				results.items.forEach(item => {
					var video = [];
					console.log(item);
					video.push(item);
				})
		})
	}

	handleChange = (e) => {
		this.setState({ textBoxValue: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault()

		// fire.database().ref('songs').push({ name: this.state.textBoxValue, value: 0 });
		console.log(this.search(this.state.textBoxValue));

		this.setState({
			textBoxValue: ""
		});
	}

	render() {
		return(
			<div id = "parent">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.textBoxValue} onChange={this.handleChange}></input>
					<input type="submit" />
				</form>
				<div id="search-container">
				</div>
			</div>
			
		);

	}
}

export default Search