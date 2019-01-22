import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ subtitle }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{subtitle.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700"
  }
});

export default SubTitle;
