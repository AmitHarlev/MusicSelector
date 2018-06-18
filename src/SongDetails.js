import React, { Component } from 'react';

class SongDetails extends Component {

	render = () => {
		return (<a href={this.props.videoUrl} rel="noopener noreferrer" target="_blank" style={{textDecoration:"none", fontFamily:"roboto"}}><img src={this.props.thumbnailUrl} alt="Song Thumbnail" align="middle" style={{marginLeft:"20px", marginRight:"20px"}}/>{this.props.songTitle}</a>);
	}
}

export default SongDetails