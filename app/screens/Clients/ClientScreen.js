import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Button, Icon, Fab } from "native-base";
// load styles
import styles from "./styles";
import ClientList from "../../components/Clients";

class ClientScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Clients",
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

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ClientList />
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#7B4EF5" }}
          position="bottomRight"
          onPress={() => {
            navigate("AddClientScreen");
          }}>
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

export default ClientScreen;
