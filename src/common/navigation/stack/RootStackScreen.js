import React from 'react'
import { View, Text ,TouchableOpacity,} from 'react-native'
import {Avatar} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../domain/home/HomeScreen';
import RegisterScreen from '../../../domain/register/RegisterScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../../../domain/session/LoginScreen';
import { colors } from '../../utils/Colors';
import { FONT_FAMILY, HOME_HEAD, REGISTER_HEAD } from '../../utils/Constants';

import CustomerProfile from '../../../domain/home/CustomerProfile';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const screenOptions = {
    headerStyle: {
    backgroundColor: colors.secondaryColor,
    },
    headerTintColor: colors.defaultWhite,
    headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily:FONT_FAMILY
    },
}



export const HeaderLeft = ({navigation,screen}) => {

    return(
        <View style={{flexDirection:'row'}}>

            {screen!='Home'?<Icon name="chevron-back" size={40} color={colors.defaultWhite} onPress={() => navigation.goBack()}></Icon> : null }
            <MaterialCommunityIcons name="menu" size={40} color={screen!='Home' ? colors.defaultWhite :colors.textblack} onPress={() => navigation.openDrawer()}></MaterialCommunityIcons>

        </View>
    )
}

export const HeaderRight = ({screen}) => {

    return(
        <View style={{marginRight:10}}>

            <TouchableOpacity>
                <Avatar.Image  source={screen=='Home'? {uri:'https://www.flowglobal.net/content/media/LRM_EXPORT_28953082622816_20191110_115223070.jpeg'} : require('../../assets/images/icon.png')} size={40} />
            </TouchableOpacity>
        </View>
    )
}

export  const  LogStackScreen=({navigation}) =>{
  return (
   <LoginStack.Navigator headerMode='none'>
       <LoginStack.Screen name="Signin" component={LoginScreen}/>
   </LoginStack.Navigator>
  );
}

export const HomeStackScreen=({navigation}) =>{
            return(<HomeStack.Navigator>
                    <HomeStack.Screen name="Home" component={HomeScreen} options={{
                    headerTitle:'',
                    headerTitleStyle: { alignSelf: 'center' },
                    headerLeft: () => (
                    <HeaderLeft screen ='Home' navigation={navigation} />
                    ),
                    headerRight: () => (
                    <HeaderRight screen ='Home'/>
                    )
                    }} />

            </HomeStack.Navigator>)

}

export const RegisterStackScreen=({navigation}) =>{
    return(
        <RegisterStack.Navigator screenOptions={screenOptions}>
            {/* <RegisterStack.Screen name="Register"  component={RegisterScreen} options={{
            title:REGISTER_HEAD,
            headerTitleStyle: { alignSelf: 'center' },

            headerLeft: () => (
               <HeaderLeft screen ='Register' navigation={navigation} />

            ),
            headerRight: () => (
               <HeaderRight/>

            )
            }} /> */}

            <ProfileStack.Screen name="Profile" component={CustomerProfile} options={{
                    title:'Customer Profile',
                    headerTitleStyle: { alignSelf: 'center',fontFamily:FONT_FAMILY },
                    headerLeft: () => (
                    <HeaderLeft screen ='Profile' navigation={navigation} />
                    ),
                    headerRight: () => (
                    <HeaderRight screen ='Profile'/>
                    ),
                    }}  />

    </RegisterStack.Navigator>
    )
}
