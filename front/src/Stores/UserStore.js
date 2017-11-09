import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import * as UserActions from '../Actions/UserActions';

class UserStore extends EventEmitter {
	constructor(){
		super();
		this.loggedIn = false;
		this.userData = {};
		
		this.users = [
		{
			username:'pepe',
			password:'123'

			}] 
	}
	handleActions(action){
		console.log('UserStore:: received an action', action);
		switch(action.type){
			case "USER_LOGGING_IN":{
				this.login(action.data).then((userData)=>{
					UserActions.userLoggedIn(userData);
				});
				break;
			}
			default:{

			}
		}
	}
	isLoggedIn(){
		return this.loggedIn;
	}
	getUser(){
		return this.userData;
	}
	login(data){
		this.fetchUser(data).then((userInfo)=> userInfo);
	}
	registerUser(data){
		this.createUser();
	}
	fetchUser(data){
		//Promise
	}
	createUser(data){
		this.users.push(data);
		//create user
	}

}
const userStore = new UserStore();
dispatcher.register();
export default userStore;
