import React,{Component} from 'react';
import {
	Router,
	Scene,
	Actions
} from 'react-native-router-flux';
import employeeList from './containers/employeeList';
import employee from './containers/employee';
import addEmployee from './containers/addEmployee';
import editEmployee from './containers/editEmployee';

import AddButton from './containers/addButton';
import EditButton from './containers/editButton';

import {RightButton} from './common';


class RouterComponent extends Component{
	render(){
		return(
			<Router>
				<Scene key="screen">
					<Scene
						initial
						key="employeeList"
						component={employeeList}
						renderRightButton={()=><RightButton onPress={()=>Actions.addEmployee()} color="#3498db" text="Add"/>}
						title="Here is your employees"
					/>
					<Scene 
						key="employee"
						component={employee}
						title="Details"
						renderRightButton={()=><RightButton onPress={()=>Actions.editEmployee()} color="#3498db" text="Edit"/>}
					/>
					<Scene
						key="addEmployee"
						component={addEmployee}
						title="Add your employee"
						renderRightButton={()=><AddButton/>}
					/>
					<Scene
						key="editEmployee"
						component={editEmployee}
						title="Edit"
						renderRightButton={()=><EditButton/>}
					/>
				</Scene>
			</Router>
		);
	}
}

export default RouterComponent;