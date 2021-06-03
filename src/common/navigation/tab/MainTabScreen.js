import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../../domain/home/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../utils/Colors";

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen=(props)=>{

    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor='#009387'
      barStyle={{ backgroundColor: colors.headerColor }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sticker" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}



export default MainTabScreen;

