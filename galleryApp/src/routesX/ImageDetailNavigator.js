import React, { Component } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageDetail from "../screens/Profile/Images/ImageDetail";
const Stack = createNativeStackNavigator();

export default class ImageDetailNavigator extends Component {
  render() {
    return (
     <Stack.Navigator initialRouteName={"ImageDetail"} screenOptions={({navigation,route})=>{
       return {
         headerShown : false
       }
     }}>
       <Stack.Screen name={"ImageDetail"} component={ImageDetail}/>
     </Stack.Navigator>
    )
  }
}
