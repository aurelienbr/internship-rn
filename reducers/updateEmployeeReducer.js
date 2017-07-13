import {
	HANDLE_INPUT_NAME_UPDATE,
	HANDLE_INPUT_ROLE_UPDATE,
	HANDLE_INPUT_EMAIL_UPDATE,
	GET_EMPLOYEE_OK,
	UPDATING_EMPLOYEE,
	UPDATE_EMPLOYEE_ERROR,
	UPDATE_EMPLOYEE_OK
} from '../actions/type';

const INITIAL_STATE = {
	name:'',
	role:'',
	email:'',
	loading:false,
	error:false,
	errorMessage:''
}

export default(state = INITIAL_STATE,action)=>{
	switch(action.type){
		case HANDLE_INPUT_NAME_UPDATE:
			return{...state,name:action.payload}
		case HANDLE_INPUT_ROLE_UPDATE:
			return{...state,role:action.payload}
		case HANDLE_INPUT_EMAIL_UPDATE:
			return{...state,email:action.payload}
		case GET_EMPLOYEE_OK:
			return{...state,name:action.payload.name,role:action.payload.role,email:action.payload.email}
		case UPDATING_EMPLOYEE:
			return{...state,error:false,loading:true}
		case UPDATE_EMPLOYEE_ERROR:
			return{...state,error:true,loading:false,errorMessage:action.payload}
		case UPDATE_EMPLOYEE_OK:
			return{...state,error:false,loading:false}
		default:
			return state;
	}
}