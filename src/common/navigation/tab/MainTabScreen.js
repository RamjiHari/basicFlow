import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/Colors";
import {CustomerStackScreen, HomeStackScreen, RegisterStackScreen, ScheduleStackScreen} from '../stack/RootStackScreen';
import { HOME_ROOT , SCHEDULE_ROOT, SEARCH_ROOT } from '../../utils/NavigationRoot';

const Tab = createMaterialBottomTabNavigator();



const MainTabScreen=(props)=>{

    return(
        <Tab.Navigator
      initialRouteName={HOME_ROOT}
      activeColor={colors.secondaryColor}
      barStyle={{ backgroundColor: colors.defaultWhite ,borderWidth:0.15}}>

      <Tab.Screen
        name={HOME_ROOT}
        component={HomeStackScreen}
        options={{
          tabBarLabel: HOME_ROOT,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        listeners={({ navigation, route }) => ({
        tabPress: e => {
        if (route.state && route.state.routeNames.length > 0) {
        navigation.navigate(HOME_ROOT)
        }
        },
        })}
      />

      <Tab.Screen
        name={SEARCH_ROOT}
        component={CustomerStackScreen}
        options={{
          tabBarLabel: SEARCH_ROOT,
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}

      />

  <Tab.Screen
        name={SCHEDULE_ROOT}
        component={ScheduleStackScreen}
        options={{
          tabBarLabel: SCHEDULE_ROOT,
          tabBarIcon: ({ color }) => (
            <Icon name="time" color={color} size={26} />
          ),
        }}
      />


    </Tab.Navigator>




    )
}



export default MainTabScreen;


