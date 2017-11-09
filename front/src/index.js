import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './Pages/App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './Components/NavBar';
import Cards from './Pages/Cards';
import Login from './Pages/Login';

ReactDOM.render(
	<div>
		<BrowserRouter>
			<div>
				<NavBar/>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/cards" component={Cards}/>
					<Route path="/login" component={Login}/>
				</Switch>	
				<footer ></footer>
			</div>
		</BrowserRouter>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
