import React, { Component } from 'react';
import fire from './fire'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Badge from '@material-ui/core/Badge';
import Remove from '@material-ui/icons/Remove'
import getSongVoteCount from './Utilities';

class UpDoot extends Component {

	handleClick = () => {
		var songRef = fire.database().ref(`songs/${this.props.id}/votes/${this.props.uid}` )
		songRef.once("value", (snapshot) => {
			snapshot.val() ? songRef.remove() : songRef.set(true);
		});
	}

	hasVoted = () => {
		var songVotes = this.props.items[this.props.id].votes;
		return (songVotes) ? ((songVotes[this.props.uid]) ? true : false) : false;
	}

	render() {
		return (
			<span style={{paddingRight: "15px"}}>
				<Badge badgeContent={getSongVoteCount(this.props.items, this.props.id)} color={(this.hasVoted()) ? "secondary" : "primary"}>
					<Button mini variant="fab" color="default" aria-label="add" onClick={this.handleClick} disabled={this.props.login ? false : true}>
						{(this.hasVoted()) ? <i class="material-icons" style={{color:'#f44336',fontSize:"150%"}}>keyboard_arrow_up</i> : <i class="material-icons" style={{color:"grey",fontSize:"150%"	}}>keyboard_arrow_up</i> }
						
					</Button>
				</Badge>
			</span>
		);
	}
}

export default UpDoot