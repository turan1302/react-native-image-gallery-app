import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileInfo from "../screens/Profile/ProfileInfo";
import ProfileAccount from "../screens/Profile/ProfileAccount";
import ImagesList from "../screens/Profile/Images/ImagesList";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageDetailNavigator from "./ImageDetailNavigator";
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

        <Stack.Screen options={({navigation})=>{
          return {
            headerShown : true,
            headerShadowVisible : false,
            title : "Resimlerim",
            headerLeft : ()=>(
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name={"arrow-back"} size={30} color={"#000"}/>
              </TouchableOpacity>
            ),
            headerTitleAlign : "center"
          }
        }} name={"ImagesList"} component={ImagesList}/>

        <Stack.Screen options={({navigation})=>{
          return {
            headerShown : true,
            headerShadowVisible : false,
            title : "Resim Detay",
            headerLeft : ()=>(
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name={"arrow-back"} size={30} color={"#000"}/>
              </TouchableOpacity>
            ),
            headerTitleAlign : "center"
          }
        }} name={"ImageDetailNavigator"} component={ImageDetailNavigator}/>
      </Stack.Navigator>
    )
  }
}
