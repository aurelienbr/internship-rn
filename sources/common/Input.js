import React from 'react';
import{
	Dimensions,
	View
}from 'react-native';
import TextField from 'react-native-md-textinput';

export const Input = ({value,onChangeText,label,highlightColor,labelColor,multiline,autoGrow}) =>{
	return(
		<View style={styles.container}>
			<TextField 	value={value}
				onChangeText={onChangeText}
				style={styles.input} 
				label={label} 
				highlightColor={highlightColor}
				labelColor={labelColor}
				multiline={multiline || false}
				autoGrow={autoGrow || false}/>
		</View>
	);
}

const styles={
	input:{
		height:40,
		width:(Dimensions.get('window').width)*0.8,
	},
	container:{
		alignItems:'center',
		marginTop:20
	}
}