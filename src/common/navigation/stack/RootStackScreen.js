import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../domain/home/HomeScreen';
import CustomerScreen from '../../../domain/customer/';
import RegisterScreen from '../../../domain/registerCustomer';
import LoginScreen from '../../../domain/login';
import { colors } from '../../utils/Colors';
import { FONT_FAMILY, HOME_HEAD, REGISTER_HEAD ,CUSTOMER_HEAD} from '../../utils/Constants';
import { HeaderLeft, HeaderRight } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Stack=createStackNavigator()

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

export  const  LogStackScreen=({navigation}) =>{
  return (
   <Stack.Navigator headerMode='none'>
       <Stack.Screen name="Signin" component={LoginScreen}/>
   </Stack.Navigator>
  );
}

export const HomeStackScreen=({navigation}) =>{
            return(<Stack.Navigator>
                    <Stack.Screen name="Home"   component={HomeScreen} options={{
                    headerTitle:'',
                    headerTitleStyle: { alignSelf: 'center' ,backgroundColor:'white'},
                    headerLeft: () => (
                    <HeaderLeft screen ='Home' navigation={navigation} />
                    ),
                    headerRight: () => (
                    <HeaderRight screen ='Home'/>
                    )
                    }} />
                    <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterStackScreen} />
            </Stack.Navigator>)

}

export const CustomerStackScreen=({navigation}) =>{
    return(<Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Search" component={CustomerScreen} options={{
            title:CUSTOMER_HEAD,
            headerTitleStyle: { alignSelf: 'center' },
            headerLeft: () => (
            <HeaderLeft screen ='Customer' navigation={navigation} />
            ),
            headerRight: () => (
            <HeaderRight screen ='Customer'/>
            )
            }} />
    </Stack.Navigator>)

}

export const RegisterStackScreen=({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Register"  component={RegisterScreen} options={{
            title:REGISTER_HEAD,
            headerTitleStyle: { alignSelf: 'center' },

            headerLeft: () => (
               <HeaderLeft screen ='Register' navigation={navigation} />

            ),
            headerRight: () => (
               <HeaderRight/>
            )
            }} />
        </Stack.Navigator>
    )
}
