// @flow
"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";

import Pie from "./charts/Pie";
import Theme from "./theme";
import data from "./data";

export default class ExpenseChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({ ...this.state, activeIndex: newIndex });
  }

  _shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  render() {
    const height = 200;
    const width = 500;

    return (
      <View style={styles.container}>
        <Pie
          pieWidth={150}
          pieHeight={150}
          onItemSelected={this._onPieItemSelected}
          colors={Theme.colors}
          width={width}
          height={height}
          data={data.spendingsLastMonth}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    marginLeft: 15,
    justifyContent: "center",
    alignContent: "center"
  }
};
