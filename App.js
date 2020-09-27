import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/home/HomeScreen";
import SearchScreen from "./src/screens/home/SearchScreen";
import OffersScreen from "./src/screens/home/OffersScreen";

import ProductDetailsScreen from "./src/screens/products/ProductDetails";

import CartScreen from "./src/screens/shoping/CartScreen";
import OrderScreen from "./src/screens/shoping/OrderScreen";
import PaymentScreen from "./src/screens/shoping/PaymentScreen";

import SigninScreen from "./src/screens/user/SigninScreen";
import SignupScreen from "./src/screens/user/SignupScreen";
import AccountScreen from "./src/screens/user/AccountScreen";

import { setNavigator } from "./src/utils/NavigationRef";

const switchNavigator = createSwitchNavigator({
  homeStack: createBottomTabNavigator({
    Home: createStackNavigator({
      TopProducts: HomeScreen,
      Search: SearchScreen,
      ProductDetail: ProductDetailsScreen,
    }),
    Offer: OffersScreen,
    Cart: createStackNavigator({
      Shoping: CartScreen,
      Order: OrderScreen,
      Payment: PaymentScreen,
    }),
    Account: AccountScreen,
  }),
  loginStack: createStackNavigator({
    //Signup: SignupScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
    
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
}

