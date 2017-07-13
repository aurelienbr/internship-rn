import{
	GET_EMPLOYEE_OK,
	GET_EMPLOYEE_ERROR,
	GETTING_EMPLOYEE
}from '../actions/type';

const INITIAL_STATE = {
	employeeData:{},
	loading:true,
	error:false
}

export default(state = INITIAL_STATE,action)=>{
	switch(action.type){
		case GETTING_EMPLOYEE:
			return{...state,loading:true,error:false}
		case GET_EMPLOYEE_OK:
			return {...state,employeeData:action.payload,loading:false}
		case GET_EMPLOYEE_ERROR:
			return {...state,error:true,loading:false}
		default:
			return state;
	}
}