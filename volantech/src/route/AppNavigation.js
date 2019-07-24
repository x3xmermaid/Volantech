import React, { Component } from 'react';
import {View, Text} from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from '../screens/Home'
import ComponentDrawer from '../components/sideDrawer'
import Add from '../screens/AddList'
import Edit from '../screens/EditList'

const Drawer = createDrawerNavigator({
  Home
},{
  drawerWidth: 220,
  // contentComponent : costumDrawer,
})

const costumDrawer = props => (
  <View style={{width: 200, width: 500,backgroundColor:'blue'}}>
    <Text >Mermaidasdhasjkjashdkjashdkjhaskdjhaskdhkasjhdkjashdjkahsdjkhaskdjhasjhdkjashdkj</Text>
  </View>
)

const AppNavigator = createStackNavigator({
  Home: {
    screen: Drawer
  },
  Edit: {
    screen: Edit
  },
  Add: {
    screen: Add
  },
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);