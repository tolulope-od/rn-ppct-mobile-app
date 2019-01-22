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
    OptionsScreen
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
    { HomeStack, TaskStack, SettingsStack },
    { contentComponent: BurgerMenu }
  ),
  android: createDrawerNavigator(
    { HomeStack, TaskStack, SettingsStack },
    { contentComponent: BurgerMenu }
  )
});

const LoginStack = createStackNavigator({ LoginScreen, PasswordResetScreen });

LoginStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tarBarLabel: "Log In",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({
        ios: "ios-log-in",
        android: "md-log-in"
      });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
};

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen });

const RootSwitch = createSwitchNavigator(
  {
    LoadingScreen,
    AuthTabs,
    MainNavigator
  }
  /*
  // use this if the log in stack isn't configured yet
  {
    initialRouteName: "MainNavigator"
  }*/
);
const AppRootSwitch = createAppContainer(RootSwitch);

export default AppRootSwitch;
