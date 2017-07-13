import React,{Component} from 'react';
import {
	View,
	StyleSheet,
	ListView,
	Text,
	Image
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {getAllEmployees} from '../../actions';
import {
	Employee,
	PersonnalError,
	PersonnalSpinner
} from '../common';
import styles from '../../styles/employeesListStyle';

const error = "Could not fetch data";

class employeeList extends Component{

	componentWillMount(){
		this.createDataSource(this.props.employeeList);
	}
	
	componentDidMount(){
		this.props.getAllEmployees();
	}
	
	renderRow(employee){
		return(
			<Employee data={employee} onPress={()=>Actions.employee({id:employee._id})}/>
		);
	}
	
	createDataSource(employeeList){
		const ds = new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(employeeList);
	}
	
	componentWillReceiveProps({employeeList}){
		this.createDataSource(employeeList);
	}
	
	renderMain(){
		if(this.props.loading){
			return <PersonnalSpinner containerStyle={styles.spinner} isVisible={true} type="Pulse" color="#3498db" size={50}/>
		}
		if(this.props.error){
			return <PersonnalError message={error} styleContainer={styles.errorContainer} styleText={styles.errorMessage}/>	
		}
		return(
			<View style={styles.container}>
				<ListView
					style={styles.listEmployee}
					ref="employeeList"
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow.bind(this)}
					initialListSize={20}
				/>
			</View>
		);
	}
	
	render(){
		return(
			<View style={styles.container}>
				{this.renderMain()}
			</View>
		);
	}
}

const mapStateToProps = ({employeeListReducer}) =>{
	const {
		employeeList,
		loading,
		error
	} = employeeListReducer;

	return{
		employeeList,
		loading,
		error
	};
}

export default connect(mapStateToProps,{getAllEmployees})(employeeList);