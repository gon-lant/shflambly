import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import CardSearch from './CardSearch';
import CardInfo from './CardInfo'; 
import '../Styles/Cards.css'

class Cards extends Component{
	render(){
		return(
			<div>
				<header><h2>Cardscardscards!!</h2></header>
				<Switch>
					<Route exact path="/cards" component={CardSearch}/>
					<Route path="/cards/:id" component={CardInfo}/>
				</Switch>
			</div>
			);
	}
}

export default Cards;

