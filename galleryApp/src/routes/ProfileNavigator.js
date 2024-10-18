import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileInfo from "../screens/Profile/ProfileInfo";
import ProfileAccount from "../screens/Profile/ProfileAccount";
import ImagesList from "../screens/Profile/Images/ImagesList";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageDetailNavigator from "./ImageDetailNavigator";
import GalleryNavigator from "./GalleryNavigator";
const Stack = createNativeStackNavigator();


export default class ProfileNavigator extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={"ProfileInfo"} screenOptions={({navigation,route})=>{
        return {
          headerShown : false
        }
      }}>
        <Stack.Screen name={"ProfileInfo"} component={ProfileInfo}/>
        <Stack.Screen options={{
          headerShown : true,
          headerShadowVisible : false,
          title : "Hesap Bilgilerim"
        }} name={"ProfileAccount"} component={ProfileAccount}/>

        <Stack.Screen name={"GalleryNavigator"} component={GalleryNavigator}/>
      </Stack.Navigator>
    )
  }
}
