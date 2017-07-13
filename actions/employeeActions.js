import axios from 'axios';
import {
	GET_EMPLOYEE_OK,
	GET_EMPLOYEE_ERROR,
	GETTING_EMPLOYEE
} from './type';

const API = 'https://actum-task-aurelien.herokuapp.com/employees';

export const getEmployeeData = (id) =>{
	return(dispatch)=>{

		dispatch({
			type:GETTING_EMPLOYEE
		});
		
		axios.get(`${API}/${id}`).then((response)=>{
			let payload = response.data;
			dispatch({
				type:GET_EMPLOYEE_OK,
				payload
			})
		}).catch((err)=>{
			dispatch({
				type:GET_EMPLOYEE_ERROR
			})
		})
	}
}