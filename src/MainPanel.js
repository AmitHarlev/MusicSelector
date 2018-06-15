import React, { Component } from 'react';
import SubmitSong from './SubmitSong';
import SongPost from './SongPost';
import getSongVoteCount from './Utilities';
import SongSearch from './SongSearch';
import fire from './fire';
import youtubeApiKey from './ApiKeys';
import Button from '@material-ui/core/Button';

class MainPanel extends Component {

	constructor(props) {
		super(props)
		this.sortedKeys = [];
		this.state = {
			videos: [],
			searched: false
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
			<SongPost key={itemKey} uid={this.props.uid} items={this.props.items} id={itemKey} login={this.props.login} />
		));
	}

	search = (query) => {

		var part = 'snippet';
		var maxResults = 5;

		var results = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${query}&part=${part}&maxResults=${maxResults}&type=video&videoCategoryId=10`);
		results.then(results => results.json()).then(results => {
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
		this.setState({
			searched: true
		});
	}

	handleSongSelected = (song, songLink, thumbnailLink) => {
		this.setState({
			searched: false
		})
		var songLinkArray = [];
		for (var item in this.props.items) {
			songLinkArray.push(this.props.items[item].link);
		}
		console.log(songLinkArray, songLink)
		if (songLinkArray.indexOf(songLink) === -1) {
			fire.database().ref('songs').push({ name: song, link: songLink, thumbnail: thumbnailLink });
		} else {
			alert("That song is already on the list. Please go vote for it if you would like it to play!");
		}
	}

	handleBackButton = () => {
		this.setState({
			searched: false
		})
	}

	render = () => {
		return (
			<div>
				<SubmitSong callback={this.handleSongSubmitted} login={this.props.login} />
				{this.state.searched ?
					<ul style={{ listStyleType: "none", padding: "0px" }}>
						<SongSearch videos={this.state.videos} callback={this.handleSongSelected} />
						<Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={this.handleBackButton}>Back</Button>
					</ul> :
					<ul style={{ listStyleType: "none", padding: "0px" }}>
						<this.SongList />
					</ul>
				}
			</div>
		)
	}
}

export default MainPanel