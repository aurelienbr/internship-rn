import React from 'react';
import {TouchableOpacity,Text} from 'react-native'

export const RightButton = ({text,color,onPress}) =>{
	return(
		<TouchableOpacity onPress={onPress} style={{marginRight:10}}>
			<Text style={{color}}>{text}</Text>
		</TouchableOpacity>
	);
}