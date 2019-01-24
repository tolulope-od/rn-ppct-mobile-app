// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo";

import Login from "../../components/Login/Login";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <LinearGradient colors={["#8EC5FC", "#E0C3FC"]} style={styles.container}>
        <Login />
      </LinearGradient>
    );
  }
}

export default LoginScreen;
