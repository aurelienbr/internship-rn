import axios from 'axios';

import {
	HANDLE_INPUT_NAME_UPDATE,
	HANDLE_INPUT_ROLE_UPDATE,
	HANDLE_INPUT_EMAIL_UPDATE,
	UPDATING_EMPLOYEE,
	UPDATE_EMPLOYEE_OK,
	UPDATE_EMPLOYEE_ERROR
} from './type';

import {Actions} from 'react-native-router-flux';

const API = 'https://actum-task-aurelien.herokuapp.com/employees';

export const updateInputName = (value) =>{
	return{
		type:HANDLE_INPUT_NAME_UPDATE,
		payload:value
	}
}

export const updateInputRole = (value) =>{
	return{
		type:HANDLE_INPUT_ROLE_UPDATE,
		payload:value
	}
}

export const updateInputEmail = (value) =>{
	return{
		type:HANDLE_INPUT_EMAIL_UPDATE,
		payload:value
	}
}

export const updateEmployee = (name,role,email,id) =>{
	return(dispatch)=>{
		dispatch({
			type:UPDATING_EMPLOYEE
		})
		axios.put(`${API}/${id}`,{
			name,
			role,
			email
		}).then((response)=>{
			dispatch({
				type:UPDATE_EMPLOYEE_OK
			});
			Actions.pop();
		}).catch((err)=>{
			dispatch({
				type:UPDATE_EMPLOYEE_ERROR,
				payload:'Please check your internet connection'
			})
		})
	}
}