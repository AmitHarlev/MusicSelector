import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import SongDetails from './SongDetails';


const style = {
	padding: "15px",
	margin: "20px"
}

class SongSearch extends Component {

	render() {
		return (
			<div>
				{this.props.videos.map((video, index) =>
					<Paper elevation={4} style={{ margin: "20px" }} key={index}>
						<li style={style}>
							<span style={{ paddingRight: "15px" }}>
								<Button mini variant="fab" color="primary" onClick={() => this.props.callback(video.snippet.title, `http://youtu.be/${video.id.videoId}`, video.snippet.thumbnails.default.url)}>
									<AddIcon />
								</Button>
							</span>
							<SongDetails videoUrl={`http://youtu.be/${video.id.videoId}`} thumbnailUrl={video.snippet.thumbnails.default.url} songTitle={video.snippet.title}/>
						</li>
					</Paper>
				)}
			</div>
		);
	}
}

export default SongSearch