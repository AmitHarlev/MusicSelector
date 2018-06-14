import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

const style = {
	padding: "15px",
	margin: "20px"
}

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
                {this.props.videos.map(video => <Paper elevation = {4} style = {{margin:"20px"}}><li style={style}>{video.snippet.title}</li></Paper>)}
			</div>
			
		);

	}
}

export default SongSearch