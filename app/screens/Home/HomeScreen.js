// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Dashboard from "../../components/Dashboard/Dashboard";

import { Icon, Button } from "react-native-elements";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Home",
    headerLeft: Platform.select({
      ios: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/icons/menu.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      ),
      android: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/icons/menu.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      )
    }),
    headerStyle: {
      backgroundColor: "#7B4EF5",
      borderBottomColor: "#7B4EF5",
      elevation: 0
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: Platform.select({ ios: "Avenir-Heavy", android: "Roboto" }),
      color: "rgb(255,255,255)"
    }
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Dashboard />
      </View>
    );
  }
}

export default HomeScreen;
