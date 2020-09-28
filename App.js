//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image} from 'react-native';
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
    Home: {
      screen: createStackNavigator({
        TopProducts: HomeScreen,
        Search: SearchScreen,
        ProductDetail: ProductDetailsScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#0099FF',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./assets/icons/blue_home.png')
              : require('./assets/icons/home.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Offer: {
      screen: OffersScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#0099FF',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./assets/icons/blue_offer.png')
              : require('./assets/icons/offer.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator({
        Shoping: CartScreen,
        Order: OrderScreen,
        Payment: PaymentScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#0099FF',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./assets/icons/blue_cart.png')
              : require('./assets/icons/cart.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#0099FF',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let img =
            focused == true
              ? require('./assets/icons/blue_account.png')
              : require('./assets/icons/account.png');
          return <Image source={img} style={styles.tabIcon} />;
        },
      },
    },
  }),
  loginStack: {
    screen: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen,
    }),
  },
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

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});