import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

import strings from '../Utils/Strings/String';
import Color from '../Theme/colors';

export default class FooterComponent extends Component {

  constructor(props) {
		super(props);
		this.state = {
			selectedIndex: props.selected || 1,
		};
	}
  clickOnTab = index => {
		this.setState({ selectedIndex: index });
		this.props.clickFooter(index);
	};

  render() {
    const {title, hasAddButton, hasAddButton2,onPress,title1,onPress1} =this.props;
    return (
      <View style={styles.container}>
        { hasAddButton?(
      <TouchableOpacity 
      style={styles.button}
      onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>): null
  } 
{hasAddButton2?(
  <TouchableOpacity 
  style={styles.button1}
      onPress={onPress1} >
    <Text style={styles.title1}>{title1}</Text>
  </TouchableOpacity>
):null}

      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:Color.white,
        flexDirection:'row',
        borderRadius:10,
       width:360,
      // justifyContent:'flex-end',
       padding:5
    },
    button:{
backgroundColor:Color.c0047AB,
width:90,
height:35,
marginRight:10,
borderRadius:10,
justifyContent:'center',
alignItems:'center'
},
title:{
color:Color.white,
fontWeight:'600'

},
button1:{
  backgroundColor:Color.c0047AB,
width:90,
height:35,
marginRight:310,
borderRadius:10,
justifyContent:'center',
alignItems:'center'
},
title1:{
  color:Color.white,
  fontWeight:'600'
  
  },
})

