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
import { HOME_HEAD, REGISTER_HEAD } from '../../utils/Constants';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const screenOptions = {
    headerStyle: {
    backgroundColor: colors.secondaryColor,
    },
    headerTintColor: colors.defaultWhite,
    headerTitleStyle: {
    fontWeight: 'bold'
    }
}

export const HeaderLeft = ({navigation,screen}) => {

    return(
        <View style={{flexDirection:'row'}}>

        {screen!='Home'?<Icon name="chevron-back" size={25} color={colors.defaultWhite} onPress={() => navigation.goBack()}></Icon> : null }
        <MaterialCommunityIcons name="menu" size={25} color={colors.defaultWhite} onPress={() => navigation.openDrawer()}></MaterialCommunityIcons>

        </View>
    )
}

export const HeaderRight = ({navigation,screen}) => {

    return(
        <View>
            <TouchableOpacity>
                <Avatar.Image source={require('../../assets/images/icon.png')} size={40} />
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

export const HomeStackScreen=(props) =>{
            return(<HomeStack.Navigator screenOptions={screenOptions}>
                    <HomeStack.Screen name="Home" component={HomeScreen} options={{
                    title:HOME_HEAD,
                    headerTitleStyle: { alignSelf: 'center' },
                    headerLeft: () => (
                        <HeaderLeft screen ='Home' navigation={props.navigation} />
                    ),
                    headerRight: () => (
                        <HeaderRight screen ='Home' navigation={props.navigation} />
            ),

                    }} />
            </HomeStack.Navigator>)
}

export const RegisterStackScreen=(props) =>{
    return(
        <RegisterStack.Navigator screenOptions={screenOptions}>
            <RegisterStack.Screen name="Register" component={RegisterScreen} options={{
            title:REGISTER_HEAD,
            headerTitleStyle: { alignSelf: 'center' },
            headerLeft: () => (
               <HeaderLeft screen ='Register' navigation={props.navigation} />

            ),
            headerRight: () => (
               <HeaderRight screen ='Register' navigation={props.navigation} />

            )
            }} />
    </RegisterStack.Navigator>
    )
}
