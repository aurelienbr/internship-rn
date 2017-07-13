import {
	HANDLE_INPUT_NAME_ADD,
	HANDLE_INPUT_ROLE_ADD,
	HANDLE_INPUT_EMAIL_ADD,
	ADD_EMPLOYEE_OK,
	ADDING_EMPLOYEE,
	ADD_EMPLOYEE_ERROR
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
		case HANDLE_INPUT_NAME_ADD:
			return{...state,name:action.payload}
		case HANDLE_INPUT_ROLE_ADD:
			return{...state,role:action.payload}
		case HANDLE_INPUT_EMAIL_ADD:
			return{...state,email:action.payload}
		case ADDING_EMPLOYEE:
			return{...state,loading:true,error:false}
		case ADD_EMPLOYEE_OK:
			return{...state,name:'',role:'',email:'',loading:false}
		case ADD_EMPLOYEE_ERROR:
			return{...state,loading:false,error:true,errorMessage:action.payload}
		default:
			return state;
	}
}