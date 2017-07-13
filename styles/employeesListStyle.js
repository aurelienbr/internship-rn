import {StyleSheet,Dimensions} from 'react-native';
let {width} = Dimensions.get('window');

export default styles = StyleSheet.create({
		container:{
			flex:1,
			backgroundColor:'#fff'
		},
		spinner:{
			flex:1,
			backgroundColor:'#fff',
			justifyContent:'center',
			alignItems:'center'
		},
		errorContainer:{
			flex:1,
			justifyContent:'center',
			alignItems:'center'
		},
		errorMessage:{
			fontSize:22
		},
		listEmployee:{
			marginBottom:20
		}
});