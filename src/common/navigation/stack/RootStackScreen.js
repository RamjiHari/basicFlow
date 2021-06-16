import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../domain/home/HomeScreen';
import CustomerScreen from '../../../domain/customer/SearchCustomerScreen';
import RegisterScreen from '../../../domain/registerCustomer/RegisterCustomerScreen';
import PreviewRegisterScreen from '../../../domain/registerCustomer/PreviewRegisterScreen';
import LoginScreen from '../../../domain/login/LoginScreen';
import Profile from '../../../domain/customer/ProfileScreen';
import { colors } from '../../utils/Colors';
import { REGISTER_HEAD ,CUSTOMER_HEAD,SCHEDULE_HEAD,PROFILE_HEAD} from '../../utils/NavigationHead';
import { HeaderLeft, HeaderRight } from '../../components/Header';
import { HOME_ROOT, LOGIN_ROOT, PROFILE_ROOT, REGISTER_ROOT, SCHEDULE_ROOT, SEARCH_ROOT, PREVIEW_REGISTER_ROOT} from '../../utils/NavigationRoot';
import { FONT_FAMILY } from '../../utils/FontFamily';
import ScheduleScreen from '../../../domain/schedule/ScheduleScreen';
import MainTabScreen from '../tab/MainTabScreen';

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
       <Stack.Screen name={LOGIN_ROOT} component={LoginScreen}/>
   </Stack.Navigator>
  );
}

export const HomeStackScreen=({navigation}) =>{
            return(<Stack.Navigator>
                    <Stack.Screen name={HOME_ROOT}   component={HomeScreen} options={option(navigation,null,HOME_ROOT)} />
                    <Stack.Screen name={REGISTER_ROOT} options={{headerShown:false}} component={RegisterStackScreen} />
            </Stack.Navigator>)

}

export const CustomerStackScreen=({navigation}) =>{
    return(<Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={SEARCH_ROOT}     component={CustomerScreen}  options={option(navigation,CUSTOMER_HEAD,SEARCH_ROOT)} />
            <Stack.Screen name={PROFILE_ROOT}    component={Profile}  options={option(navigation,PROFILE_HEAD,PROFILE_ROOT)}/>
    </Stack.Navigator>)

}

export const RegisterStackScreen=({navigation}) =>{

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={REGISTER_ROOT} component={RegisterScreen}  options={option(navigation,REGISTER_HEAD,REGISTER_ROOT)} />
            <Stack.Screen name={PREVIEW_REGISTER_ROOT} component={PreviewRegisterScreen}  options={option(navigation,REGISTER_HEAD,REGISTER_ROOT)} />
        </Stack.Navigator>
    )
}

export const ScheduleStackScreen=({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={SCHEDULE_ROOT}  component={ScheduleScreen}  options={option(navigation,SCHEDULE_HEAD,SCHEDULE_ROOT)} />
        </Stack.Navigator>
    )
}