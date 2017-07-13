import React from 'react';
import {Card} from './Card';
import{
	TouchableOpacity,
	View,
	Text
}from 'react-native';

export const Employee = ({data,onPress}) => {
	return(
		<Card onPress={onPress}>
			<Text>
				{data.name}
			</Text>
		</Card>
	);
}