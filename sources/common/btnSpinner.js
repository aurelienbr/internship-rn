import React from 'react';
import{
	ActivityIndicator,
	View
}from 'react-native';

export const BtnSpinner = ({size,style}) =>{
	return(
		<View style={style}>
			<ActivityIndicator
				size={size || 'large'}
			/>
		</View>
	);
}