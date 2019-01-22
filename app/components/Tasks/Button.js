import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Button = ({ deleteAllItems }) => (
  <View>
    <TouchableOpacity onPress={deleteAllItems} style={styles.buttonText}>
      <MaterialIcons name="delete" color="white" size={24} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700"
  }
});

export default Button;
