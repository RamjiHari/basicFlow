import  React,{useState,useEffect} from 'react';
import { Button, View, Text ,ActivityIndicator,Alert} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import {DrawerContent} from './src/common/navigation/drawer/DrawerScreen'
import {LogStackScreen} from './src/common/navigation/stack/RootStackScreen';
const Drawer = createDrawerNavigator();
import { MenuProvider } from 'react-native-popup-menu';
import { useSelector} from 'react-redux';
import { colors } from './src/common/utils/Colors';

function AppRoot() {
  const session = useSelector((state) => state.session);

  if(session.loggingIn) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color={colors.primaryColor}/>
      </View>
    );
}

if(session.userToken==null && session.logginError !='' && !session.loggedIn){
  Alert.alert('Invalid User!', session.logginError , [
                    {text: 'Okay'}
                ]);
}

if(session.userToken==null && session.error !='' && !session.loggedIn){
  Alert.alert('Invalid User!', session.error , [
                    {text: 'Okay'}
                ]);
}
  return (

    <NavigationContainer>
      <MenuProvider>
        {session.loggedIn ?
        (<Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Index" component={MainTabScreen} />
        </Drawer.Navigator> )
        :
        <LogStackScreen/>

        }
      </MenuProvider>
    </NavigationContainer>

  );
}

export default AppRoot;
