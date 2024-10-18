import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Register from "../screens/Register";
import Splash from "../screens/Splash";

import { navigationRef } from "../../src/NavigationService";
import WelcomeNavigator from "./WelcomeNavigator";

const Stack = createNativeStackNavigator();

export default class Routes extends Component {
  render() {
    return (
     <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={"Splash"} screenOptions={({navigation,route})=>{
        return {
          headerShown : false
        }
      }}>
        <Stack.Screen name={"Welcome"} component={WelcomeNavigator}/>
        <Stack.Screen name={"Splash"} component={Splash}/>
        <Stack.Screen name={"Login"} component={Login}/>
        <Stack.Screen name={"Register"} component={Register}/>
      </Stack.Navigator>
     </NavigationContainer>
    )
  }
}
