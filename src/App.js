import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import MainPanel from './MainPanel'

var database = fire.database();

class App extends Component {

	render() {
		return (
			<div>
				<MainPanel database={database}/>
			</div>
		);
	}
}

export default App;
