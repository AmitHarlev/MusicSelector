import React from 'react';
import UpDoot from './UpDoot';
import { Paper } from '@material-ui/core';

class SongPost extends React.Component {

	render = () => {

		const style = {
			padding: "15px",
			margin: "20px"
		}

		return (
			<span>
				<Paper elevation = {4} style = {{margin:"20px"}}>
					<li style={style}>
						<UpDoot uid={this.props.uid} items={this.props.items} id={this.props.id} login={this.props.login} />
						<img src={this.props.items[this.props.id].thumbnail} alt="Song Thumbnail" />
						<a href={this.props.items[this.props.id].link}>{this.props.items[this.props.id].name}</a>
					</li>
				</Paper>
			</span>
		)
	}
}

export default SongPost