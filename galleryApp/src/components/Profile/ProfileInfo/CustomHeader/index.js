import React, { Component } from 'react'
import {TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import * as NavigationService from "../../../../NavigationService";

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={{paddingVertical : 15,flexDirection : "row",justifyContent : "space-between",alignItems : "center"}}>
        <TouchableOpacity onPress={()=>NavigationService.back()}>
          <Ionicons name={"arrow-back"} size={30} color={"#000"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>NavigationService.navigate("ProfileAccount")}>
          <Ionicons name={"settings-outline"} size={30} color={"#000"}/>
        </TouchableOpacity>
      </View>
    )
  }
}
