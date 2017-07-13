import{
	GET_ALL_EMPLOYEES_OK,
	GET_ALL_EMPLOYEES_ERROR
}from '../actions/type';

const INITIAL_STATE = {
	employeeList:{},
	loading:true
}

export default(state = INITIAL_STATE,action)=>{
	switch(action.type){
		case GET_ALL_EMPLOYEES_OK:
			return {...state,employeeList:action.payload,error:false,loading:false}
		case GET_ALL_EMPLOYEES_ERROR:
			return {...state,error:true,loading:false}
		default:
			return state;
	}
}