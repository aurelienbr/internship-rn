import React,{Component} from 'react';
import{
	TouchableOpacity,
	Text,
	ToastAndroid,
	Platform,
	AlertIOS
}from 'react-native';
import {BtnSpinner} from '../common';
import{
	addEmployee
}from '../../actions';
import {connect} from 'react-redux';
import testInput from '../testInput';

class AddButton extends Component{

	addEmployee(){
		const {name,role,email,addEmployee} = this.props;

		if(!testInput.testRole(role) && !testInput.testEmail(email)){
			this.showMessageError('Please enter a valid name or role');
		}
		else if(testInput.testEmail(email)){
			addEmployee(name,role,email);
		}
		else{
			this.showMessageError('Please enter a valid e-mail');
		}
	}

	componentWillReceiveProps(nextProps){
		const {error} = this.props;

		if(nextProps.error !== error){
			this.showMessageError(nextProps.errorMessage);
		}
	}

	showMessageError(message = 'error'){
		if(Platform.OS === 'android'){
				ToastAndroid.show(message, ToastAndroid.SHORT);
		}else{
				AlertIOS.alert(
				'Error',
				message
			);
		}
	}

	renderMain(){
		const {loading} = this.props;

		if(loading){
			return (<BtnSpinner/>);
		}
		return(
			<Text style={{color:'#3498db'}}>
				Ok
			</Text>
		);
	}

	render(){
		return(
			<TouchableOpacity style={{marginRight:10}} onPress={this.addEmployee.bind(this)}>
				{this.renderMain()}
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = ({addEmployeeReducer}) =>{
	const{
		name,
		role,
		email,
		loading,
		error,
		errorMessage
	} = addEmployeeReducer;

	return{
		name,
		role,
		email,
		loading,
		error,
		errorMessage
	}
}

export default connect(mapStateToProps,{addEmployee})(AddButton);