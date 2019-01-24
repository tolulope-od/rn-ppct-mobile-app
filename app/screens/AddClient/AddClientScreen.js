import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

// load styles
import styles from "./styles";

class AddClientScreen extends Component {
  static navigationOptions = {
    headerTitle: "Add Client",
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "#7B4EF5",
      elevation: 0
    },
    headerTransparent: {
      position: "absolute",
      backgroundColor: "transparent",
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is The Add so you can add then here Client Screen</Text>
      </View>
    );
  }
}

export default AddClientScreen;
