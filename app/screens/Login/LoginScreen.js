// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Login Screen</Text>
        <Button
          title="Forgot Password?"
          onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
        />
        <Button
          title="Log In"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

export default LoginScreen;
