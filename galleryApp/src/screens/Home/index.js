import React, { Component } from "react";
import { FlatList, View } from "react-native";
import AuthLayout from "../../components/Layout/AuthLayout";
import CustomHeader from "../../components/Home/CustomHeader";
import styles from "./styles";
import { inject, observer } from "mobx-react";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loader from "../../components/Home/Loader";
import Empty from "../../components/common/Empty";
import ListItem from "../../components/Home/ListItem";

@inject("AuthStore")
@observer

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      images: [],
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

    RestClient.getRequest(AppUrl.images, {
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

  render() {
    const { images, isLoading } = this.state;

    return (
      <AuthLayout>
        <View style={styles.container}>
          <CustomHeader />
          {(isLoading) ? (
            <Loader />
          ) : (
            <FlatList
              ListEmptyComponent={() => (
                <Empty />
              )}
              data={images} keyExtractor={(item, index) => index} renderItem={({ item, index }) => (
              <ListItem item={item} index={index} />
            )} />
          )}
        </View>
      </AuthLayout>
    );
  }
}
