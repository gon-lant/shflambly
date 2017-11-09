import dispatcher from '../dispatcher';

export function login(credentials){

	dispatcher.dispatch({
		type: "USER_LOGGING_IN",
		data: credentials
	});
}

export function userLoggedIn(data){
	dispatcher.dispatch({
		type: "USER_LOGGED_IN",
		data: data
	})
}

export function failLogin(data){
	dispatcher.dispatch({
		type: "USER_LOGIN_FAILED",
		data: data
	})
}