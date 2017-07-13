import React from 'react';
import {View,Text} from 'react-native';


export const PersonnalError = ({message,styleContainer,styleText}) =>{
	return(
		<View style={styleContainer}>
			<Text style={styleText}>
				{message}
			</Text>
		</View>
	);
}