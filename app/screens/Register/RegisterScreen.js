// Load styles object
import styles from "./styles";

import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo";

import Register from "../../components/Register/Register";

class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <LinearGradient colors={["#8EC5FC", "#E0C3FC"]} style={styles.container}>
        <Register />
      </LinearGradient>
    );
  }
}

export default RegisterScreen;
