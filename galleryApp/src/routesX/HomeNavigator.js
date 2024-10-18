import React, { Component } from 'react'
import Home from "../screens/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowImage from "../screens/ShowImage";
const Stack = createNativeStackNavigator();


export default class HomeNavigator extends Component {
  render() {
    return (
    <Stack.Navigator screenOptions={({route,navigation})=>{
      return {
        headerShown : false
      }
    }}>
      <Stack.Screen name={"Home"} component={Home}/>
      <Stack.Screen name={"ShowImage"} component={ShowImage}/>
    </Stack.Navigator>
    )
  }
}
