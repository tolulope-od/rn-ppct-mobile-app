// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import { Text, View } from "react-native";

class OptionsScreen extends Component {
  static navigationOptions = {
    headerTitle: "Options"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Options Screen</Text>
      </View>
    );
  }
}

export default OptionsScreen;
