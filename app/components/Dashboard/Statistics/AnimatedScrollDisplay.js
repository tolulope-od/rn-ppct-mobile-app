import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";

import { LinearGradient, Font } from "expo";

// We declare this here because the device width will be used for the scrollview
const SCREEN_WIDTH = Dimensions.get("window").width;

// Screen component
class Screen extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../../../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../../../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../../../../assets/fonts/Montserrat-SemiBold.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.scrollPage}>
        {/* Animation function goes here */}
        <View style={styles.cardView}>
          <View style={{ flexDirection: "column" }}>
            {this.state.fontLoaded ? (
              <Text style={styles.chartHeaderText}>Revenue</Text>
            ) : null}

            {this.state.fontLoaded ? (
              <Text style={styles.chartBodyText}>₦ 400,022,899.08</Text>
            ) : null}
          </View>
          <Image
            source={require("../../../../assets/icons/revenue.png")}
            style={styles.iconImage}
          />
        </View>
      </View>
    );
  }
}

class Screen2 extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../../../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../../../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../../../../assets/fonts/Montserrat-SemiBold.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.scrollPage}>
        {/* Animation function goes here */}
        <View style={styles.cardView}>
          <View style={{ flexDirection: "column" }}>
            {this.state.fontLoaded ? (
              <Text style={styles.chartHeaderText}>Expenses</Text>
            ) : null}

            {this.state.fontLoaded ? (
              <Text style={styles.chartBodyText}>₦ 1,022,899.08</Text>
            ) : null}
          </View>
          <Image
            source={require("../../../../assets/icons/expenses.png")}
            style={styles.iconImage2}
          />
        </View>
      </View>
    );
  }
}

class Screen3 extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../../../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../../../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../../../../assets/fonts/Montserrat-SemiBold.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.scrollPage}>
        {/* Animation function goes here */}
        <View style={styles.cardView}>
          <View style={{ flexDirection: "column" }}>
            {this.state.fontLoaded ? (
              <Text style={styles.chartHeaderText}>Receipts</Text>
            ) : null}

            {this.state.fontLoaded ? (
              <Text style={styles.chartBodyText}>₦ 72,899.08</Text>
            ) : null}
          </View>
          <Image
            source={require("../../../../assets/icons/receipts.png")}
            style={styles.iconImage}
          />
        </View>
      </View>
    );
  }
}

const xOffset = new Animated.Value(0);

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

export default class AnimatedScroll extends Component {
  render() {
    const screen = [
      <Screen key={1} text="Screen 1" index={0} />,
      <Screen2 key={2} text="Screen 2" index={1} />,
      <Screen3 key={3} text="Screen 3" index={2} />
    ];

    const xOffset = new Animated.Value(0);
    let position = Animated.divide(xOffset, SCREEN_WIDTH);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          style={styles.scrollView}>
          {screen}
        </Animated.ScrollView>
        <View
          style={{ flexDirection: "row" }} // this will layout our dots horizontally (row) instead of vertically (column)
        >
          {screen.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              extrapolate: "clamp" // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 5,
                  width: 5,
                  backgroundColor: "#FFFFFF",
                  margin: 8,
                  borderRadius: 5
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: -20
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  },
  chartHeaderText: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "stretch",
    paddingLeft: 10,
    alignContent: "stretch",
    fontFamily: "Montserrat-SemiBold",
    color: "black",
    marginTop: 55,
    marginRight: 25,
    color: "#FFFFFF"
  },
  chartBodyText: {
    fontSize: 20,
    fontWeight: "100",
    alignSelf: "stretch",
    paddingLeft: 10,
    alignContent: "stretch",
    fontFamily: "Montserrat-Regular",
    color: "black",
    marginTop: 5,
    marginRight: 25,
    color: "#FFFFFF"
  },
  cardView: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 15,
    width: 80 + "%",
    height: 120,
    flexDirection: "row",
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 },
    margin: 5,
    justifyContent: "center",
    alignContent: "space-between"
  },
  iconImage: {
    width: 60,
    height: 60,
    marginTop: 15
  },
  iconImage2: {
    width: 60,
    height: 60,
    marginTop: 15
  },
  btn: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    alignSelf: "flex-end",
    alignContent: "center",
    padding: 5,
    borderRadius: 100,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  scrollView: {},
  btnText: {
    color: "rgb(240,133,51)",
    fontFamily: Platform.select({
      ios: "Avenir",
      android: "Roboto"
    }),
    fontWeight: "400",
    marginLeft: 5
  }
});
