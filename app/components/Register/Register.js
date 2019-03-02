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
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      companyName: "",
      companyEmail: "",
      operatingCountry: "",
      phoneNumber: "",
      password: "",
      password2: ""
    };
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontFamily: "montserrat-bold",
            marginBottom: 10,
            fontSize: 40,
            color: "white"
          }}>
          Register an account
        </Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={firstName =>
              this.setState({
                firstName
              })
            }
            placeholder="First Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={lastName =>
              this.setState({
                lastName
              })
            }
            placeholder="Last Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon
            style={styles.IconStyle}
            name="building"
            size={20}
            color="black"
          />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={companyName =>
              this.setState({
                companyName
              })
            }
            placeholder="Enter Company Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon
            style={styles.IconStyle}
            name="envelope"
            size={20}
            color="black"
          />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={companyEmail =>
              this.setState({
                companyEmail
              })
            }
            placeholder="Enter Company Email"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="phone" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={phoneNumber =>
              this.setState({
                phoneNumber
              })
            }
            placeholder="Enter Phone Number"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="key" size={20} color="black" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
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
        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="key" size={20} color="black" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={password2 =>
              this.setState({
                password2
              })
            }
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
      </View>
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
    justifyContent: "center",
    backgroundColor: "rgb(104,72,160)",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    marginBottom: 20,
    marginTop: -10,
    alignItems: "center",
    alignContent: "center",
    margin: 75
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(231,234,237)",
    width: 90 + "%",
    alignSelf: "center",
    borderRadius: 15,
    margin: 10,
    fontFamily: "montserrat-regular"
  },
  ScrollStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 90 + "%",
    alignSelf: "center"
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

export default Register;
