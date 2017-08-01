import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import CardSearch from './CardSearch';
import CardInfo from './CardInfo'; 

class Cards extends Component{
	render(){
		return(
			<div>
				<h2>Cardscardscards!!</h2>
				<Switch>
					<Route exact path="/cards" component={CardSearch}/>
					<Route path="/cards/:id" component={CardInfo}/>
				</Switch>
			</div>
			);
	}
}

export default Cards;

