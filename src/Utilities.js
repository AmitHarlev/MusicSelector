function getSongVoteCount(items, songKey) {
	return (items[songKey].votes) ? Object.keys(items[songKey].votes).length : 0
}

export default getSongVoteCount