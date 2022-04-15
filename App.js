import React, { Component } from 'react';

import LoginScreen from './app/pages/LoginModule/LoginScreen';
import ScreenUI from './app/pages/ScreenModule/ScreenUI'
import DetailScreenUI from './app/pages/DetailModule/DetailScreenUI';
import AddDetailUI from './app/pages/AddDetailModule/AddDetailUI';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()


export default class App extends Component{
  render(){
return(
  <NavigationContainer>
 <Stack.Navigator>
   <Stack.Screen name="Login To Your Account" component={LoginScreen}/>
      <Stack.Screen name="ScreenUI" component={ScreenUI} />
      <Stack.Screen name="DetailScreenUI" component={DetailScreenUI}/>
      <Stack.Screen name="AddDetailUI" component ={AddDetailUI}/>
 </Stack.Navigator>
 </NavigationContainer>
)
}
}