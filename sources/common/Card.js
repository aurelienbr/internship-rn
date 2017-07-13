import React from 'react';
import {TouchableOpacity} from 'react-native';
import style from '../../styles/cardStyle';

export const Card = ({children,onPress}) =>{
	return(
		<TouchableOpacity onPress={onPress} style={style.container}>
			{children}
		</TouchableOpacity>
	);
}