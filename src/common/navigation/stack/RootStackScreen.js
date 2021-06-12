import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../domain/home';
import CustomerScreen from '../../../domain/customer/';
import RegisterScreen from '../../../domain/registerCustomer';
import ScheduleScreen from '../../../domain/schedule';
import LoginScreen from '../../../domain/login';
import Profile from '../../../domain/customer/profile';
import { colors } from '../../utils/Colors';
import { FONT_FAMILY, HOME_HEAD, REGISTER_HEAD ,CUSTOMER_HEAD,SCHEDULE_HEAD,CUSTOMER_PROFILE} from '../../utils/Constants';
import { HeaderLeft, HeaderRight } from '../../components/Header';

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
function option (navigation,head,screen){
    return ({
        title:head,
            headerTitleStyle: { alignSelf: 'center' },
            headerLeft: () => (
            <HeaderLeft screen ={screen} navigation={navigation} />
            ),
            headerRight: () => (
            <HeaderRight screen ={screen}/>
            )
    })
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
                    <Stack.Screen name="Home"   component={HomeScreen} options={option(navigation,null,'Home')} />
                    <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterStackScreen} />
                    <Stack.Screen name="Schedule" options={{headerShown:false}} component={ScheduleStackScreen} />
                    <Stack.Screen name="Search" options={{headerShown:false}} component={CustomerStackScreen} />
            </Stack.Navigator>)

}

export const CustomerStackScreen=({navigation}) =>{
    return(<Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Search"     component={CustomerScreen}  options={option(navigation,CUSTOMER_HEAD,'Search')} />
            <Stack.Screen name="Profile"    component={Profile}  options={option(navigation,CUSTOMER_PROFILE,'Profile')}/>
    </Stack.Navigator>)

}

export const RegisterStackScreen=({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Register"  component={RegisterScreen}  options={option(navigation,REGISTER_HEAD,'Register')} />
        </Stack.Navigator>
    )
}

export const ScheduleStackScreen=({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Schedule"  component={ScheduleScreen}  options={option(navigation,SCHEDULE_HEAD,'Schedule')} />
        </Stack.Navigator>
    )
}
