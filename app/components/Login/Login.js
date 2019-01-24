import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Dimensions,
  Platform
} from "react-native";

import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      apiKey: "4G3VA6WfPKzvI9EjiwHkVQ4G5FAsfTxjABfaHbqw"
    };
  }

  render() {
    const width = Dimensions.get("window").width;
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "montserrat-semibold",
              marginBottom: 5,
              fontSize: 50,
              fontWeight: "bold",
              color: "white"
            }}>
            Log in to your account
          </Text>
          <Text
            style={{
              fontFamily: "montserrat-bold",

              fontSize: 60,
              fontWeight: "bold",
              color: "white"
            }}>
            ↪︎
          </Text>

          <View style={styles.SectionStyle}>
            <Icon
              style={styles.IconStyle}
              name="envelope"
              size={20}
              color="white"
            />

            <TextInput
              style={{
                flex: 1,
                fontSize: 16
              }}
              onChangeText={email =>
                this.setState({
                  email
                })
              }
              placeholder="Enter your email"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              autoCorrect={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <Icon
              style={styles.IconStyle}
              name="unlock"
              size={20}
              color="white"
            />
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              onChangeText={password =>
                this.setState({
                  password
                })
              }
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigate("HomeScreen")}>
            <Text
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "montserrat-regular"
              }}>
              Log In {"  "}
              <Icon name="arrow-right" size={20} />
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flexDirection: "row",
                alignSelf: "stretch",
                padding: 5,
                alignItems: "center",
                fontSize: 12,
                fontFamily: "montserrat-regular"
              }}>
              Forgot your Password?
            </Text>
            <TouchableOpacity onPress={() => navigate("PasswordResetScreen")}>
              <Text
                style={{
                  flexDirection: "row",
                  alignSelf: "stretch",
                  padding: 5,
                  alignItems: "center",
                  fontSize: 12,
                  fontFamily: "montserrat-regular",
                  marginLeft: -5,
                  color: "rgb(72,158,235)"
                }}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginBottom: 20,
    marginTop: -10,
    alignItems: "center",
    alignContent: "center",
    margin: 73
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(231,234,237, 0.4)",
    alignSelf: "center",
    borderRadius: 15,
    margin: 10,
    fontFamily: "montserrat-regular"
  },
  IconStyle: {
    padding: 5,
    margin: 5,
    alignItems: "center"
  },
  textInput: {
    alignSelf: "stretch",
    color: "rgb(236,88,101)",
    height: 40,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgb(236,88,101)",
    fontFamily: "montserrat-regular"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "rgb(236, 88, 101)",
    padding: 10,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10
  }
});

export default withNavigation(Login);
