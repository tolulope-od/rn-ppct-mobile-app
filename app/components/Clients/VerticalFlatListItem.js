import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform
} from "react-native";

import { withNavigation } from "react-navigation";

import { Thumbnail } from "native-base";

import FeatherIcon from "react-native-vector-icons/Feather";

class VerticalFlatListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() =>
          this.props.navigation.navigate("ClientViewScreen", {
            stateData: this.props.item
          })
        }
        onLongPress={() => alert("Editing Client Information")}>
        <View
          style={{
            flexDirection: "column",
            padding: 5,
            backgroundColor: "rgb(255, 255, 255)",
            borderBottomWidth: 0.5,
            borderBottomColor: "rgb(231, 234, 237)",
            borderRadius: 15
          }}
          key={this.props.item.key}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "space-between"
              }}>
              <Thumbnail
                medium
                source={{
                  uri:
                    "https://propertycloudtech.xyz/app-assets/logo_ppct_2.jpg"
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: Platform.select({
                    ios: "Avenir",
                    android: "Roboto"
                  }),
                  fontWeight: "bold"
                }}>
                {this.props.item.firstName} {this.props.item.lastName}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "space-between"
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontFamily: Platform.select({
                    ios: "Avenir",
                    android: "Roboto"
                  }),
                  fontWeight: "normal",
                  marginTop: 5,
                  paddingHorizontal: 5
                }}>
                {this.props.item.email}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontFamily: Platform.select({
                    ios: "Avenir",
                    android: "Roboto"
                  }),
                  fontWeight: "normal",
                  marginTop: 5,
                  paddingHorizontal: 5,
                  paddingBottom: 5
                }}>
                {this.props.item.phone}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 5,
                margin: 5
              }}>
              <TouchableOpacity
                onPress={() => alert("Edit Contact Information")}>
                <FeatherIcon name="edit" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Calling Client")}>
                <FeatherIcon name="phone" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Mailing Client")}>
                <FeatherIcon name="mail" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(VerticalFlatListItem);
