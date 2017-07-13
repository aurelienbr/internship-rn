import {Dimensions} from 'react-native';
let {width} = Dimensions.get('window');

export default styles = {
	container:{
		height:80,
		width:width*0.8,
		alignSelf:'center',
		alignItems:'center',
		justifyContent:'center',
		marginTop:20,
		borderWidth:8,
		borderColor:'#3498db'
	}
}