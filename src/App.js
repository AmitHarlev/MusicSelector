import React, { Component, ReactFragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import MainPanel from './MainPanel'

var database = fire.database();

class App extends Component {

	render() {
		return (
			<Switch>
				<Route path="/">
					<MainPanel database={database} />
				</Route>
			</Switch>
		);
	}
}

export default App;
