import React, { Component } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthLayout from "../../../../components/Layout/AuthLayout";
import Empty from "../../../../components/common/Empty";
import { inject, observer } from "mobx-react";
import RestClient from "../../../../RestAPI/RestClient";
import AppUrl from "../../../../RestAPI/AppUrl";
import { format } from "date-fns";
import ListItem from "../../../../components/Profile/Images/ImageList/ListItem";
import styles from "./styles";

@inject("AuthStore")
@observer

export default class ImagesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      images: [],
      filteredImages: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("focus", async () => {
      await this.getImages();
    });
  }

  getImages = async () => {
    await this.props.AuthStore.getAccessToken();
    const token = this.props.AuthStore.appState.user.access_token;

    RestClient.getRequest(AppUrl.get_images, {
      headers: {
        "Authorization": "Bearer " + token,
      },
    }).then((res) => {
      const result = res.data;
      const status = res.status;

      if (status === 200) {
        this.setState({
          isLoading: false,
          images: result.data,
          filteredImages: result.data,
        });
      }

      if (status === 401) {
        this.props.AuthStore.removeToken();
      }

      if (status === 500) {
        this.props.AuthStore.removeToken();
      }

    }).catch((err) => {
      console.log(err);
      this.props.AuthStore.removeToken();
    });
  };

  filterImages = (text) => {
    const { images, filteredImages } = this.state;
    if (text === "") {
      this.setState({
        filteredImages: images,
      });
    } else {
      const regex = new RegExp(text, "i"); // 'i' bayrağı büyük/küçük harf duyarsızlık sağlar
      const resultSearch = images.filter(item =>
        item.img_name.match(regex),
      );

      this.setState({
        filteredImages: resultSearch,
      });
    }
  };

  render() {
    const { navigation } = this.props;
    const { images, filteredImages, isLoading } = this.state;

    return (
      <AuthLayout>
        <View style={styles.container}>
          <View style={styles.input_area}>
            <TextInput style={styles.input_style}
                       onChangeText={(text) => this.filterImages(text)} placeholderTextColor={"#6e6e6e"}
                       placeholder={"Resim Başlığı Giriniz"} />
          </View>
          <FlatList ListEmptyComponent={() => (
            <Empty />
          )} showsVerticalScrollIndicator={false} bounces style={styles.flatlist_style} data={filteredImages}
                    keyExtractor={(item, index) => index} renderItem={({ item, index }) => (
            <ListItem item={item} />
          )} />
        </View>
      </AuthLayout>
    );
  }
}
