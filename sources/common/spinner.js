import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-spinkit';

export const PersonnalSpinner = ({color,size,isVisible,type,containerStyle}) =>{
	return(
		<View style={containerStyle}>
			<Spinner isVisible={isVisible} type={type} color={color} size={size}/>
		</View>
	);
}
