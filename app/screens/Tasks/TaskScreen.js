import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo";
import { primaryGradientArray } from "../../utils/colors";
import SubTitle from "../../components/Tasks/Subtitle";
import Button from "../../components/Tasks/Button";
import Input from "../../components/Tasks/Input";
import List from "../../components/Tasks/List";
import styles from "./styles";

import { ScrollView } from "react-native-gesture-handler";
import uuid from "uuid";

class TaskScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Tasks",
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
      backgroundColor: "#f18a69",
      borderBottomColor: "#f18a69",
      elevation: 0
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: Platform.select({ ios: "Avenir-Heavy", android: "Roboto" }),
      color: "rgb(255,255,255)"
    }
  });

  state = {
    inputValue: "",
    loadingItems: false,
    allItems: {},
    isCompleted: false
  };

  componentDidMount = () => {
    this.loadingItems();
  };

  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };

  loadingItems = async () => {
    try {
      const allItems = await AsyncStorage.getItem("ToDos");
      this.setState({
        loadingItems: true,
        allItems: JSON.parse(allItems) || {}
      });
    } catch (err) {
      console.log(err);
    }
  };
  onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      this.setState(prevState => {
        const id = uuid();
        const newItemObject = {
          [id]: {
            id,
            isCompleted: false,
            text: inputValue,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          inputValue: "",
          allItems: {
            ...prevState.allItems,
            ...newItemObject
          }
        };
        this.saveItems(newState.allItems);
        return { ...newState };
      });
    }
  };
  deleteItem = id => {
    this.setState(prevState => {
      const allItems = prevState.allItems;
      delete allItems[id];
      const newState = {
        ...prevState,
        ...allItems
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };
  completeItem = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allItems: {
          ...prevState.allItems,
          [id]: {
            ...prevState.allItems[id],
            isCompleted: true
          }
        }
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };
  incompleteItem = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allItems: {
          ...prevState.allItems,
          [id]: {
            ...prevState.allItems[id],
            isCompleted: false
          }
        }
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };
  deleteAllItems = async () => {
    try {
      await AsyncStorage.removeItem("ToDos");
      this.setState({ allItems: {} });
    } catch (err) {
      console.log(err);
    }
  };
  saveItems = newItem => {
    const saveItem = AsyncStorage.setItem("Tasks", JSON.stringify(newItem));
  };

  render() {
    const { inputValue, loadingItems, allItems } = this.state;
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.centered} />
        <View style={styles.inputContainer}>
          <SubTitle subtitle={"What's Next?"} />
          <Input
            inputValue={inputValue}
            onChangeText={this.newInputValue}
            onDoneAddItem={this.onDoneAddItem}
          />
        </View>
        <View style={styles.list}>
          <View style={styles.column}>
            <SubTitle subtitle={"Recent Tasks"} />
            <View style={styles.deleteAllButton}>
              <Button deleteAllItems={this.deleteAllItems} />
            </View>
          </View>
          {loadingItems ? (
            <ScrollView contentContainerStyle={styles.scrollableList}>
              {Object.values(allItems)
                .reverse()
                .map(item => (
                  <List
                    key={item.id}
                    {...item}
                    deleteItem={this.deleteItem}
                    completeItem={this.completeItem}
                    incompleteItem={this.incompleteItem}
                  />
                ))}
            </ScrollView>
          ) : (
            <ActivityIndicator size="large" color="white" />
          )}
        </View>
      </LinearGradient>
    );
  }
}

export default TaskScreen;
