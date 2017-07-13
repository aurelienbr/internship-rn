import {combineReducers} from 'redux';
import employeeListReducer from './employeeListReducer';
import employeeReducer from './employeeReducer';
import addEmployeeReducer from './addEmployeeReducer';
import updateEmployeeReducer from './updateEmployeeReducer';

export default combineReducers({
	employeeListReducer,
	employeeReducer,
	addEmployeeReducer,
	updateEmployeeReducer
});