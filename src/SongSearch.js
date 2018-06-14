import fire from './fire';
import React, { Component } from 'react';

const youtubeApiKey = 'AIzaSyDldSB62FVZHCb7VVaLCnMKD-OK1AIiHNE'

class SongSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
            videos: []
		}
        this.loadYoutubeApis
        
        this.search(props.search)
	}
 
	search = (query) => {

		var part = 'snippet';
		var maxResults = 5;

		var results = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${query}&part=${part}&maxResults=${maxResults}`);
		results.then(results => results.json()).then(results=>{
				var videos = [];
				results.items.forEach(item => {
                    console.log(item);
					videos.push(item);
                })
                
                this.setState({
                    videos: videos
                });
		});
	}

	render() {
		return(
			<div>
                {this.state.videos.map(video => {<li>video</li>})}
			</div>
			
		);

	}
}

export default SongSearch