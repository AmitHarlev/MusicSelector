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
						<img src={this.props.items[this.props.id].thumbnail} alt="Song Thumbnail" align="middle" style={{marginLeft:"20px", marginRight:"20px"}}/>
						<a href={this.props.items[this.props.id].link} style={{textDecoration:"none"}}>{this.props.items[this.props.id].name}</a>
						{this.props.admin ?`    Submitted by ${this.props.userName}` : ""}
					</li>
				</Paper>
			</span>
		)
	}
}

export default SongPost