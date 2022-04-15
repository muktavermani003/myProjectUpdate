 import React, { Component } from 'react';
 import {
   View,
   Text, StyleSheet, TouchableOpacity
 } from 'react-native';
import Color from '../Theme/colors';

 class ButtonComponent extends Component {
   render() {
 const {title,onPress, titleStyle ,buttonStyle}=this.props
     return (
       <View style={styles.container}>
         <TouchableOpacity style={[styles.button, buttonStyle]}
          onPress={onPress}
        >
         <Text style={[styles.title, titleStyle]}>{title}</Text>
         </TouchableOpacity>
       </View>
     )
   }
}
 export default ButtonComponent;
 
 const styles = StyleSheet.create({
   container: {
     //backgroundColor: 'green',
   },
   button:{
       backgroundColor:Color.c0047AB,
       height:30,
       width:75,
       //marginLeft:230,
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center',
       margin:5
   },
   title:{
       //fontSize:15,
      color:Color.white,
      fontFamily:'bold'
   }
 })
 