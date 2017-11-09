import React, {Component} from 'react';
import {FormGroup, FormControl, HelpBlock, ControlLabel, Col, Button} from 'react-bootstrap';
import * as UserActions from '../Actions/UserActions';
import UserStore from '../Stores/UserStore';

class Login extends Component{
	constructor(props, context){
		super(props, context);
		this.state={
			logginIn: false,
			username: '',
			password: ''
		}
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({logginIn: true});
		let data = {username: this.state.username, password: this.state.password};
		console.log(this.state);
		UserActions.login(data);
		UserStore.login(data);

	}

	handleUsernameChange(e){
		this.setState({
			username: e.target.value
		});
	}
//TODO: esto apesta y seguro hay una forma mejor
	handlePasswordChange(e){
		this.setState({
			password: e.target.value
		});
	}

	render(){
		return (
			<div>
				<h1>YEAH LOGIN</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<Col xs={3}>
					    <FormGroup controlId="login">
					      <ControlLabel>Username</ControlLabel>
					      <FormControl value={this.state.username} placeholder=":)" onChange={this.handleUsernameChange.bind(this)}/>
					      <HelpBlock></HelpBlock>
					      <ControlLabel>Password</ControlLabel>
					      <FormControl value={this.state.password} placeholder=":#" onChange={this.handlePasswordChange.bind(this)}/>
					      <HelpBlock>a little help would be appreciated</HelpBlock>
					    </FormGroup>
					    <Button type="submit">Login</Button>
					</Col>
				</form>
			</div>

			);
	}
}
export default Login;