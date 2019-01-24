import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Platform
} from "react-native";

import { withNavigation } from "react-navigation";

import { LinearGradient, Font } from "expo";
import moment from "moment";

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import OctIcons from "react-native-vector-icons/Octicons";

import ExpenseChart from "./AnalyticCharts/ExpenseChart";
import AnimatedDisplay from "./Statistics/AnimatedScrollDisplay";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get("window").height,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "raleway-medium": require("../../../assets/fonts/Raleway-Medium.ttf"),
      "raleway-bold": require("../../../assets/fonts/Raleway-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { screenWidth, screenHeight } = this.state;
    const date = new Date();
    const formattedDate = moment(date).format("LL");

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
            <LinearGradient
              colors={["#7B4EF5", "#7676EE"]}
              style={{
                height: 30 + "%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                width: screenWidth
              }}>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    fontFamily: Platform.select({
                      ios: "Avenir-Heavy",
                      android: "Roboto"
                    }),
                    color: "black",
                    marginTop: -3,
                    marginBottom: 7,
                    color: "#F1EEE7"
                  }}>
                  YOUR STATS
                </Text>
              ) : null}

              <AnimatedDisplay />
            </LinearGradient>

            {this.state.fontLoaded ? (
              <Text style={styles.chartHeaderText}>SHORTCUTS</Text>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
                alignContent: "center"
              }}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                  margin: 10
                }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100
                  }}>
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() =>
                      this.props.navigation.navigate("AddClientScreen")
                    }>
                    <AntDesignIcon
                      name="addusergroup"
                      color="#7B4EF5"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.5)",
                      marginTop: 3,
                      textAlign: "center",
                      fontWeight: "normal",
                      fontFamily: "raleway-medium",
                      fontWeight: "bold"
                    }}>
                    Add Client
                  </Text>
                ) : null}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                  margin: 10
                }}>
                <View
                  style={{
                    marginLeft: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 100
                  }}>
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() =>
                      this.props.navigation.navigate("OptionsScreen")
                    }>
                    <MaterialCommunityIcon
                      name="view-dashboard-outline"
                      color="#7B4EF5"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      marginLeft: 30,
                      color: "rgba(0, 0, 0, 0.5)",
                      marginTop: 3,
                      textAlign: "center",
                      fontWeight: "normal",
                      fontFamily: "raleway-medium",
                      fontWeight: "bold"
                    }}>
                    Dashboard??
                  </Text>
                ) : null}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                  margin: 10
                }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    width: 40,
                    height: 40,
                    borderRadius: 100
                  }}>
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() =>
                      this.props.navigation.navigate("TaskScreen")
                    }>
                    <OctIcons name="tasklist" color="#7B4EF5" size={20} />
                  </TouchableOpacity>
                </View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.5)",
                      marginTop: 3,
                      textAlign: "center",
                      fontWeight: "normal",
                      fontFamily: "raleway-medium",
                      fontWeight: "bold"
                    }}>
                    Manage Tasks
                  </Text>
                ) : null}
              </View>
            </View>

            {this.state.fontLoaded ? (
              <Text style={styles.chartHeaderText}>SPEND ANALYSIS</Text>
            ) : null}
            <View
              style={{
                backgroundColor: "transparent",
                margin: 5,
                borderRadius: 15,
                padding: 5,
                paddingRight: 15,
                shadowOpacity: 0.3,
                shadowRadius: 2,
                shadowColor: "black",
                shadowOffset: { height: 2, width: 1 },
                marginTop: 10,
                justifyContent: "center"
              }}>
              <ExpenseChart />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    backgroundColor: "rgb(231, 234, 237)"
  },
  btn: {
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    alignSelf: "flex-end",
    alignContent: "center",
    padding: 5,
    borderRadius: 100,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 },
    zIndex: 15,
    height: 40,
    width: 40,
    marginRight: 10
  },

  btnText: {
    color: "rgb(236, 88, 101)",
    fontFamily: Platform.select({
      ios: "Avenir",
      android: "Roboto"
    }),
    fontWeight: "bold",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  sectionHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "stretch",
    marginBottom: 5,
    paddingLeft: 10,
    alignContent: "stretch",
    fontFamily: "raleway-bold",
    color: "white",
    marginTop: 5
  },
  cardView: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5,
    width: 30 + "%",
    height: 80,
    marginTop: 20,
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderTopColor: "#F76B1C",
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 },
    margin: 10
  },
  mainViewAlternate: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  sectionBodyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgb(104,193,111)",
    paddingLeft: 10,
    fontFamily: "raleway-medium",
    marginTop: 10
  },
  sectionBodyTextAlt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 10,
    fontFamily: "raleway-bold",
    color: "white"
  },
  sectionHeaderTextAlt: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "stretch",
    marginBottom: 5,
    paddingLeft: 10,
    alignContent: "stretch",
    fontFamily: "raleway-bold",
    color: "white"
  },
  chartHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: 10,
    alignContent: "center",
    fontFamily: "raleway-bold",
    marginTop: 15,
    color: "#7356EC"
  },
  chartBodyText: {
    fontSize: 15,
    fontWeight: "100",
    alignSelf: "stretch",
    paddingLeft: 10,
    alignContent: "stretch",
    fontFamily: "raleway-bold",
    color: "black",
    marginLeft: 5,
    marginTop: 5,
    color: "#F76B1C"
  },
  sectionBodyInfo: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    paddingLeft: 10,
    fontFamily: "raleway-bold",
    color: "white"
  },
  actionPanel: {
    padding: 10,
    marginTop: 10,
    margin: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgb(132,135,139)",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  iconImage: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 9
  }
});

export default withNavigation(Dashboard);
