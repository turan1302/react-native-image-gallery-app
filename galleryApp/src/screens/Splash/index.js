import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

@inject("AuthStore")
@observer

export default class Splash extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  isAuthenticated = async () => {
    const { navigation } = this.props;


    navigation.addListener("focus", () => {
      setTimeout(() => {
        this.props.AuthStore.getToken();
      }, 2000);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Entypo name={"images"} size={50} color={"#000"}/>
        <ActivityIndicator color={"#000"} size={30} style={styles.indicator_style}/>
      </View>
    );
  }
}


