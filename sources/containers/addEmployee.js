import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
	View,
	Text
}from 'react-native';
import{
	addInputName,
	addInputRole,
	addInputEmail
}from '../../actions';
import{
	Input
}from '../common'
import styles from '../../styles/addEmployeeStyle';

class addEmployee extends Component{
	
	handleNameInput(value){
		this.props.addInputName(value);
	}
	
	handleRoleInput(value){
		this.props.addInputRole(value);
	}
	
	handleEmailInput(value){
		this.props.addInputEmail(value);
	}
	
	render(){
		const {name,role,email} = this.props;
		return(
			<View style={styles.container}>
				<Input 
					label="name"
					highlightColor="#3498db"
					labelColor="#3498db"
					onChangeText={this.handleNameInput.bind(this)}
					value={name}/>
				<Input 
					label="role"
					highlightColor="#3498db"
					labelColor="#3498db"
					onChangeText={this.handleRoleInput.bind(this)}
					value={role}/>
				<Input 
					label="email"
					highlightColor="#3498db"
					labelColor="#3498db"
					onChangeText={this.handleEmailInput.bind(this)}
					value={email}/>
			</View>
		);
	}
}

const mapStateToProps = ({addEmployeeReducer}) =>{
	const{
		name,
		role,
		email
	} = addEmployeeReducer;

	return{
		name,
		role,
		email
	}
}

export default connect(mapStateToProps,{
	addInputName,
	addInputRole,
	addInputEmail
})(addEmployee);