import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as NavigationService from "../../../NavigationService";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={NavigationService.back}>
          <AntDesign name={"arrowleft"} color={"#000"} size={30} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#000", alignSelf: "center" }}>Yeni Resim</Text>
        <View />
      </View>
    )
  }
}
