import React, {Component} from 'react'; // 1
import {Text, View, StyleSheet, TextInput, FlatList} from 'react-native';
import api from './src/service/api';
import Card from './src/components/card';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/home';
import DetailsScreen from './src/screens/details';
// 3


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
 
  render() {
    return (
          <AppContainer />
          );
  }
}