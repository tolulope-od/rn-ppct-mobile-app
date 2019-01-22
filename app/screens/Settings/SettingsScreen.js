// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import { Text, View, Platform, TouchableOpacity, Image } from "react-native";

import { Icon } from "react-native-elements";

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Settings",
    headerLeft: Platform.select({
      ios: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/icons/menu-dark.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      ),
      android: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/icons/menu-dark.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      )
    })
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Settings Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
