import React, { Component } from 'react';
import SubmitSong from './SubmitSong';
import SongPost from './SongPost';
import getSongVoteCount from './Utilities';
import SongSearch from './SongSearch';

const youtubeApiKey = 'AIzaSyDldSB62FVZHCb7VVaLCnMKD-OK1AIiHNE'

class MainPanel extends Component {

	constructor(props) {
		super(props)
		this.sortedKeys = [];
		this.state = {
			videos: []
		}		

	}

	SongList = () => {
		if (this.sortedKeys.length === 0) {
			var newSortedKeys = Object.keys(this.props.items);
			newSortedKeys.sort((a, b) => (
				getSongVoteCount(this.props.items, b) - getSongVoteCount(this.props.items, a)
			));
			this.sortedKeys = newSortedKeys;
		} else {
			var newKeys = Object.keys(this.props.items)
			for (var i = 0; i < newKeys.length; i++) {
				if (this.sortedKeys.indexOf(newKeys[i]) === -1) {
					this.sortedKeys.push(newKeys[i]);
				}
			}
			for (var x = 0; x < this.sortedKeys.length; x++) {
				if (newKeys.indexOf(this.sortedKeys[x]) === -1) {
					this.sortedKeys.splice(x, 1)
				}
			}
		}
		return this.sortedKeys.map((itemKey, index) => (
			<SongPost key={itemKey} uid={this.props.uid} items={this.props.items} id={itemKey} login={this.props.login}/>
		));
	}

	search = (query) => {

		var part = 'snippet';
		var maxResults = 5;

		var results = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${query}&part=${part}&maxResults=${maxResults}`);
		results.then(results => results.json()).then(results=>{
				var videos = [];
				results.items.forEach(item => {
					videos.push(item);
                })
                
                this.setState({
                    videos: videos
                });
		});
	}


	handleSongSubmitted = (input) => {
		this.search(input)
	}

	render = () => {
		return (
			<div>
				<SubmitSong callback={this.handleSongSubmitted}/>
				<ul style={{listStyleType: "none", padding: "0px"}}>
					<this.SongList />
				</ul>
				<SongSearch videos={this.state.videos}/>
			</div>
		)
	}
}

export default MainPanel