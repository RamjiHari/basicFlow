import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/Colors";
import {HomeStackScreen,RegisterStackScreen} from '../stack/RootStackScreen';

const Tab = createMaterialBottomTabNavigator();



const MainTabScreen=(props)=>{

    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.secondaryColor}
      barStyle={{ backgroundColor: colors.defaultWhite ,borderWidth:0.15}}>

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Register"
        component={RegisterStackScreen}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: ({ color }) => (
            <Icon name="person-add" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}



export default MainTabScreen;


