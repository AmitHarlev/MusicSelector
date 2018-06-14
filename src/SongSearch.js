import React, { Component } from 'react';

class SongSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
            videos: []
        }
        this.loadYoutubeApis
        
    }


	render() {
        // this.search(this.props.search)
		return(
			<div>
                {this.props.videos.map(video => <li>{video.snippet.title}</li>)}
			</div>
			
		);

	}
}

export default SongSearch