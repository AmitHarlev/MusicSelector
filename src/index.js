import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import Search from './Search'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

ReactDOM.render(
	(
		<Router>
			<Switch>
				<Route path="/app" component={App}/>
				<Route path="/search" component={Search}/>
				<Redirect from="/" to="app" />
			</Switch>
		</Router>
	), document.getElementById('root'));
registerServiceWorker();
