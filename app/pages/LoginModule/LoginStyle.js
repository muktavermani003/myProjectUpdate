import {StyleSheet} from 'react-native'
import Color from '../../Theme/colors';
import { Dimensions } from "react-native";
import { ThemeProvider } from 'react-native-paper';
import { normalScale, verticalScale } from '../../Utils/Device/normalize';
const win = Dimensions. get('window');


const styles = StyleSheet.create({
    container: { 
      flex: 1,
       backgroundColor: Color.white, 
      
      },
      photoContainer:{
        height:verticalScale(100),
        width:normalScale(100),
        backgroundColor:Color.c0047AB,
        borderRadius:normalScale(25),
        padding:normalScale(20),
        marginLeft:normalScale(120)
      },
      photoText:{
        color:Color.white,
        marginTop:normalScale(5)
      },
    txtinp1: {
      borderColor: Color.black,
      width: normalScale(329),
      marginLeft: normalScale(16),
      marginRight: normalScale(15),
      padding: normalScale(10),
      marginTop: verticalScale(10),
      paddingLeft: normalScale(30),
  borderRadius:normalScale(20),
  borderWidth:normalScale(1),
    },
    txtinp2: {
      borderColor: Color.black,
      width: normalScale(329),
      marginLeft: verticalScale(16),
      marginRight: normalScale(15),
      padding: normalScale(10),
      marginTop: verticalScale(10),
      paddingLeft: normalScale(30),
      borderRadius:normalScale(20),
  borderWidth:1,
      
    },
    loginbutton: {
      width: normalScale(190),
      height: verticalScale(40),
      borderRadius: 10,
      backgroundColor: Color.c0047AB,
      marginLeft: 85,
      marginTop: 35,
    },
    button:{
      width:190,
      height:normalScale(40),
      marginTop:verticalScale(20),
      marginLeft:normalScale(90)
    },
    loginWithButtons:{
     flexDirection:'row',
    },
    mediaButton1:{
      //resizeMode:'contain',
      paddingHorizontal:30,
      width:20,
      height:20
    },
    mediaButton2:{
      resizeMode:'contain',
     marginTop:10,
     paddingHorizontal:10
    },

    logintext: {
      fontSize: 14,
      textAlign: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: Color.white,
      padding:10
    },
    loginOption:{
      fontSize:18,
      color:Color.black,
      fontWeight:'500',
      textDecorationLine:'underline'
    },
    forgotPassword:{
      color:Color.c000075,
     marginLeft:190,
     fontSize:16,
     borderBottomColor:Color.c000075,
     marginTop:10,
     textDecorationLine:'underline'
    },
    heading:{
      fontWeight:'bold',
      fontSize:16,
      color:Color.black,
      marginTop:20,
      paddingHorizontal:15,
      textDecorationLine:'underline'

    }
  });
  export default styles;