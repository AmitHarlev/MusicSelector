import React from 'react';
import UpDoot from './UpDoot';
import grey from '@material-ui/core/colors/grey'

class SongPost extends React.Component {

	render = () => {

		const style = {
			outlineStyle: "dashed",
			padding: "15px",
			outlineWidth: "1px",
			outlineColor: grey,
			margin: "20px"
		}

		return (
			<span>
				<li style={style}>
					<UpDoot uid={this.props.uid} items={this.props.items} id={this.props.id} login={this.props.login} />
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.props.items[this.props.id].name}</a>
				</li>
			</span>
		)
	}
}

export default SongPost