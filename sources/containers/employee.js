import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {getEmployeeData} from '../../actions';
import {
	PersonnalError,
	PersonnalSpinner
} from '../common';
import styles from '../../styles/employeeStyle';

class Employee extends Component{
	
	componentDidMount(){
		this.props.getEmployeeData(this.props.id);
	}
	
	renderMain(){
		const {
			error,
			loading,
			employeeData
		} = this.props;

		if(loading){
			return <PersonnalSpinner containerStyle={styles.spinner} isVisible={true} type="Pulse" color="#3498db" size={50}/>
		}
		if(error){
			return <PersonnalError message={error} styleContainer={styles.errorContainer} styleText={styles.errorMessage}/>	
		}
		return(
			<View style={styles.container}>
				<Text style={styles.name}>{employeeData.name}</Text>
				<Text style={styles.role}>{employeeData.role}</Text>
				<Text style={styles.email}>{employeeData.email}</Text>
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

const mapStateToProps = ({employeeReducer}) =>{
	const{
		error,
		loading,
		employeeData
	} = employeeReducer;
	
	return{
		error,
		loading,
		employeeData
	}
}

export default connect(mapStateToProps,{getEmployeeData})(Employee);