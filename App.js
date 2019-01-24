import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";
import { Font } from "expo";
// import Navigator to be renedered into the app
import Navigator from "./app/navigation/Navigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "raleway-medium": require("./assets/fonts/Raleway-Medium.ttf"),
      "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.otf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return <Navigator />;
  }
}
