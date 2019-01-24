import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";

import { Icon } from "react-native-elements";

import { Thumbnail } from "native-base";

class ClientView extends Component {
  render() {
    const { stateData } = this.props.navigation.state.params;
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/images/profileBackgrnd.jpg")}
          style={{ width: 100 + "%", height: 40 + "%" }}
        />
        <Thumbnail
          large
          source={{
            uri:
              "https://propertycloudtech.xyz/resources/storage/avatars/WRSjcNU3.jpeg"
          }}
          style={{ marginTop: -25, zIndex: 5 }}
        />
        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: 90 + "%",
            alignItems: "center",
            borderRadius: 15,
            marginTop: -15,
            padding: 5
          }}
          key={stateData.key}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: Platform.select({
                ios: "Avenir",
                android: "Roboto"
              }),
              fontWeight: "bold",
              margin: 5
            }}>
            {stateData.firstName} {stateData.lastName}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: Platform.select({
                ios: "Avenir",
                android: "Roboto"
              }),
              fontWeight: "normal"
            }}>
            10, Maryland way, Oniru, Lekki.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Platform.select({
                  ios: "Avenir",
                  android: "Roboto"
                }),
                fontWeight: "normal"
              }}>
              {stateData.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5
            }}>
            <Icon
              name="ios-call"
              type="ionicon"
              size={14}
              style={{ marginLeft: 5 }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: Platform.select({
                  ios: "Avenir",
                  android: "Roboto"
                }),
                fontWeight: "normal"
              }}>
              {" "}
              {stateData.phone}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#7676EE",
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 25,
              padding: 5,
              margin: 5
            }}>
            <Icon
              name="ios-text"
              type="ionicon"
              size={15}
              containerStyle={{ marginLeft: 5 }}
              color="#FFFFFF"
            />
            <Text
              style={{
                fontSize: 15,
                color: "white",
                fontFamily: Platform.select({
                  ios: "Avenir",
                  android: "Roboto"
                }),
                fontWeight: "normal",
                margin: 5
              }}>
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(ClientView);
