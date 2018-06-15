import React from 'react';
import UpDoot from './UpDoot';
import { Paper } from '@material-ui/core';
import SongDetails from './SongDetails';

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
						<SongDetails videoUrl={this.props.items[this.props.id].link} thumbnailUrl={this.props.items[this.props.id].thumbnail} songTitle={this.props.items[this.props.id].name}/>
					</li>
				</Paper>
			</span>
		)
	}
}

export default SongPost