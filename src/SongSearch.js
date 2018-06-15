import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';


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

        this.loadYoutubeAPI();
        
    }


    loadYoutubeAPI = () => {
        this.loadYoutubeApis
    }


	render() {
		return(
			<div>
                {this.props.videos.map((video,index) => 
                    <Paper elevation = {4} style = {{margin:"20px"}} key={index}>
                        <li style={style}>
                            <span style={{paddingRight: "15px"}}>
                                <Button mini variant="fab" color="primary" onClick={() => this.props.callback(video.snippet.title)}>
                                    <i className="material-icons">
                                        check
                                    </i>
                                </Button>
                            </span>
                            {video.snippet.title}
                        </li>
                    </Paper>
                )}
			</div>
			
		);

	}
}

export default SongSearch