import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {
	HANDLE_INPUT_NAME_ADD,
	HANDLE_INPUT_ROLE_ADD,
	HANDLE_INPUT_EMAIL_ADD,
	ADDING_EMPLOYEE,
	ADD_EMPLOYEE_OK,
	ADD_EMPLOYEE_ERROR
} from './type';
const API = 'https://actum-ask-aurelien.herokuapp.com/employees';

export const addInputName = (value) =>{
	return{
		type:HANDLE_INPUT_NAME_ADD,
		payload:value
	}
}

export const addInputRole = (value) =>{
	return{
		type:HANDLE_INPUT_ROLE_ADD,
		payload:value
	}
}

export const addInputEmail = (value) =>{
	return{
		type:HANDLE_INPUT_EMAIL_ADD,
		payload:value
	}
}

export const addEmployee = (name,role,email) =>{
	return(dispatch)=>{
		dispatch({
			type:ADDING_EMPLOYEE
		});
		axios.post(API,{
			name,
			role,
			email
		}).then((response)=>{
			dispatch({
				type:ADD_EMPLOYEE_OK
			});
			Actions.employeeList();
		}).catch((err)=>{
			dispatch({
				type:ADD_EMPLOYEE_ERROR,
				payload:'Please check your internet connection'
			})
		})
	}
}