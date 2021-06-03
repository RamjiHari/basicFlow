import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../../domain/session/LoginScreen';

const RootStack = createStackNavigator();
export  const  RootStackScreen=({navigation}) =>{
  return (
   <RootStack.Navigator headerMode='none'>
       <RootStack.Screen name="Signin" component={LoginScreen}/>
   </RootStack.Navigator>
  );
}

