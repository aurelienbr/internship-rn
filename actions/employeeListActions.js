import axios from 'axios';
import {
	GET_ALL_EMPLOYEES_OK,
	GET_ALL_EMPLOYEES_ERROR
} from './type';

const API = 'https://actum-task-aurelien.herokuapp.com/employees';

export const getAllEmployees = () =>{
	return(dispatch)=>{
		axios.get(API).then((response)=>{
			let payload = response.data;
			dispatch({
				type:GET_ALL_EMPLOYEES_OK,
				payload
			})
		}).catch((err)=>{
			dispatch({
				type:GET_ALL_EMPLOYEES_ERROR
			})
		})
	}
}