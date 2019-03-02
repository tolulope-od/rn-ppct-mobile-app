import DetailScreen from "../screens/Detail";
import HomeScreen from "../screens/Home";
import LoadingScreen from "../screens/Loading";
import LoginScreen from "../screens/Login";
import OptionsScreen from "../screens/Options";
import SettingsScreen from "../screens/Settings";
import BurgerMenu from "../components/BurgerMenu";
import PasswordResetScreen from "../screens/PasswordReset";
import RegisterScreen from "../screens/Register";
import TaskScreen from "../screens/Tasks";
import ClientScreen from "../screens/Clients";
import AddClientScreen from "../screens/AddClient";
import ClientViewScreen from "../screens/ViewClient";

import React from "react";

import { Platform } from "react-native";
import { Icon } from "react-native-elements";
// import navigation library to create screen stacks
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  StackViewTransitionConfigs,
  createAppContainer
} from "react-navigation";

const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.routeName ||
        (prevTransitionProps &&
          screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  {
    DetailScreen,
    HomeScreen,
    OptionsScreen,
    AddClientScreen
  },
  {
    initialRouteName: "HomeScreen",
    transitionConfig: dynamicModalTransition
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  // Lock tab bar when away from home screen iOS
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  // Lock drawer when away from homescreen
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "lock-closed";
  }

  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home" type="ionicon" color={tintColor} />
    )
  };
};

const TaskStack = createStackNavigator({ TaskScreen });

TaskStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  // Lock drawer when away from homescreen
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "lock-closed";
  }

  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-list" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: "Tasks",
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-list" type="ionicon" color={tintColor} />
    )
  };
};

const ClientsStack = createStackNavigator(
  {
    ClientScreen,
    ClientViewScreen,
    AddClientScreen
  },
  {
    initialRouteName: "ClientScreen"
  }
);

ClientsStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "lock-closed";
  }
  return {
    tabBarLabel: "Clients",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-contacts" type="ionicon" color={tintColor} />
    ),
    drawerLockMode,
    drawerLabel: "Clients",
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-contacts" type="ionicon" color={tintColor} />
    )
  };
};

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-cog" type="ionicon" color={tintColor} />
  ),
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }) => (
    <Icon name="md-cog" type="ionicon" color={tintColor} />
  )
};

const MainNavigator = Platform.select({
  ios: createDrawerNavigator(
    { HomeStack, TaskStack, ClientsStack, SettingsStack },
    { contentComponent: BurgerMenu }
  ),
  android: createDrawerNavigator(
    { HomeStack, TaskStack, ClientsStack, SettingsStack },
    { contentComponent: BurgerMenu }
  )
});

const Login = createStackNavigator({ LoginScreen, PasswordResetScreen });

Login.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tarBarLabel: "Log In",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({
        ios: "md-log-in",
        android: "md-log-in"
      });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible,
    tabBarOptions: {
      style: {
        backgroundColor: "#E0C3FC",
        borderTopColor: "transparent"
      }
    }
  };
};

const Register = createStackNavigator({ RegisterScreen });

Register.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tarBarLabel: "Log In",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({
        ios: "ios-person-add",
        android: "ios-person-add"
      });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible,
    tabBarOptions: {
      style: {
        backgroundColor: "#E0C3FC",
        borderTopColor: "transparent"
      }
    }
  };
};

const AuthTabs = createBottomTabNavigator({ Login, Register });

const RootSwitch = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      AuthTabs,
      MainNavigator
    },

    // use this if the log in stack isn't configured yet
    {
      // initialRouteName: "MainNavigator"
    }
  )
);

export default RootSwitch;
