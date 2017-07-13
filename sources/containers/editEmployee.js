import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
	View,
	Text
}from 'react-native';
import {Input} from '../common';
import{
	updateInputName,
	updateInputRole,
	updateInputEmail
}from '../../actions';
import styles from '../../styles/updateEmployeeStyle';

class editEmployee extends Component{
	
	handleNameInput(value){
		this.props.updateInputName(value);
	}
	
	handleRoleInput(value){
		this.props.updateInputRole(value);
	}
	
	handleEmailInput(value){
		this.props.updateInputEmail(value);
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

const mapStateToProps = ({updateEmployeeReducer}) =>{
	const {
		name,
		role,
		email
	} = updateEmployeeReducer;

	return{
		name,
		role,
		email
	}
}

export default connect(mapStateToProps,{
	updateInputName,
	updateInputRole,
	updateInputEmail
})(editEmployee);