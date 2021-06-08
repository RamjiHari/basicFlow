import React ,   { useState } from 'react';
import  {
    View ,
    Text ,
    TouchableOpacity ,
    TextInput ,
    Platform ,
    StyleSheet  ,
    StatusBar ,
    Alert ,
    Image ,
    ImageBackground,
 } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import  {  useDispatch ,  useSelector  } from 'react-redux';
import  {  login  } from './actions';
import PhoneInput from "react-native-phone-number-input";
import  {  colors  } from '../../common/utils/Colors';
import styles from './LoginStyle';
import { logout } from '../../domain/session/actions';
import { LOGIN_HEAD } from '../../common/utils/Constants';


const SignInScreen  =   (  { navigation } )  =>  {

    const session  =  useSelector ( state  => state.session );
    const  [ phone ,  setPhone ]  =  useState ( '' )
    const  [ otp ,  setOtp ]  =  useState ( '' )
    const  [ password ,  setPassword ]  =  useState ( '' )
    const image  =  require ( '../../common/assets/images/flow_banner.jpg' );
    const dispatch  =  useDispatch (  );
    const onLogout = () => dispatch(logout());



    const  [ secureTextEntry , setsecureTextEntry ] = useState ( true )
    const updateSecureTextEntry  =   (  )  =>  {
        setsecureTextEntry ( !secureTextEntry )
     }



    const  [ btn , setBtn ]  =  useState (  { type : 'password' , status : true } );
    const setBtnHandler  =   ( type , status )  => {
        setBtn (  { type : type , status : status } )
     }


    const  [ show , setShow ] = useState ( false )
    const setShowhandler  =   (  )  => {
        if  (  phone.length  ==  0  )  {
            Alert.alert ( 'Wrong Input!' ,  'Phone Number cannot be empty!' ,   [
                 { text :  'Okay' }
             ] );
            return ;
         }
        setShow ( true )
     }


     const data = {
        phone : phone ,
        password : btn.type == 'password' ? password : otp ,
        type : btn.type
    }

    const loginHandle  =   ( data )  =>  {

        if  (  data.phone.length  ==  0 || (data.password.length  ==  0  ) )  {
            Alert.alert ( 'Wrong Input!' ,  'Username or password field cannot be empty.' ,   [
                 { text :  'Okay' }
             ] );
            return;
         }

        dispatch ( login ( data ) );

     }



    console.log(data,"logdata")

    return  (
    <View style =  { styles.container }>
        <StatusBar backgroundColor =  { colors.secondaryColor } barStyle = "light-content"/>
            <View style =  { styles.header }>
                <Image
                    style =  { styles.flowLogo }
                    source =  { require ( '../../common/assets/images/flow.png' ) }
                />
            </View>

        <Animatable.View animation = "fadeInUpBig" style =  { styles.footer }>
            <ImageBackground source =  { image }  imageStyle =  { styles.imageStyle } style =  { styles.bgImage }>
                <View animation = "fadeInUpBig"  style =  { styles.loginView }>
                    <Text style =  { styles.logText }>{LOGIN_HEAD}</Text>
                </View>

                <View  style =  { styles.tabButton }>
                    <TouchableOpacity
                        style =  {  [ styles.pwdbutton ,  {  backgroundColor :  btn.status  ? colors.defaultYellow  :  colors.textGray } ] }
                        onPress =  {  (  )  => setBtnHandler ( 'password' , true )  }>
                        <Text> Password </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style =  {  [ styles.pwdbutton ,  {  backgroundColor :  !btn.status  ?  colors.defaultYellow  :  colors.textGray } ] }
                        onPress =  {  (  )  => setBtnHandler ( 'otp' , false )  }>
                        <Text>OTP</Text>
                    </TouchableOpacity>
                </View>

                <View style =  { styles.centerView }>
                    <View style =  { styles.action }>
                    <PhoneInput
                    placeholder = 'Mobile Number'
                    containerStyle =  { styles.phoneContainer }
                    textInputStyle =  { styles.phoneText }
                    defaultCode = "UG"
                    onChangeFormattedText =  {  ( val ) => setPhone ( val ) }
                    withShadow
                    defaultValue =  { phone }
                    />
                    </View>
                </View>

                 { btn.status &&
                    <View style =  { styles.centerView }>

                        <View style =  { styles.action }>
                            <Feather
                                    name = "lock"
                                    color =  { colors.defaultWhite }
                                    size =  { 20 }
                                />

                            <TextInput
                                placeholder = "Enter Your Password"
                                placeholderTextColor =  { colors.defaultWhite }
                                style =  {  [ styles.textInput ] }
                                autoCapitalize = "none"
                                secureTextEntry =  { secureTextEntry ? true  :  false }
                                value =  { password }
                                onChangeText =  {  ( val ) => setPassword ( val ) }

                            />
                            <TouchableOpacity onPress =  { updateSecureTextEntry }>
                                 { secureTextEntry ?
                                <Feather
                                    name = "eye-off"
                                    color = "white"
                                    size =  { 20 }
                                />
                                 :
                                <Feather
                                    name = "eye"
                                    color = "white"
                                    size =  { 20 }
                                />
                                 }
                            </TouchableOpacity>

                        </View>
                        <View style =  { styles.button }>
                            <TouchableOpacity
                                onPress =  {  (  )  =>  { loginHandle ( data ) } }
                            style =  { styles.signIn }>
                            <Text>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                 }


                     { !btn.status  &&
                        <View style =  { styles.centerView }>

                             {   !show &&
                                <View style =  { styles.button }>
                                    <TouchableOpacity
                                    onPress =  {  (  ) => setShowhandler (  ) }
                                    style =  { styles.otp }>
                                    <Text style =  {  { color : colors.defaultWhite } }>Send OTP</Text>
                                    </TouchableOpacity>
                                </View>
                             }

                             {  show &&
                                <View style =  { styles.action }>
                                    <Feather
                                            name = "lock"
                                            color =  { colors.defaultWhite }
                                            size =  { 20 }
                                    />

                                    <TextInput
                                        placeholder = "Enter Your OTP"
                                        placeholderTextColor =  { colors.defaultWhite }
                                        style =  {  [ styles.textInput ] }
                                        autoCapitalize = "none"
                                        onChangeText =  {  ( val ) => setOtp ( val ) }
                                        value =  { otp }

                                    />

                                </View>
                             }

                             {  show &&
                                <View style =  { styles.otpAgainView }>
                                    <TouchableOpacity>
                                        <Text style =  { styles.otpAgainText }>Send otp again!</Text>
                                    </TouchableOpacity>
                                </View>
                             }

                             {  show &&
                                <View style =  { styles.button }>
                                    <TouchableOpacity onPress =  {  (  )  =>  { loginHandle (  data  ) } } style =  { styles.signIn }>
                                        <Text>Login</Text>
                                    </TouchableOpacity>
                            </View>
                             }



                        </View>
                      }

            </ImageBackground>
        </Animatable.View>
         {/*
             {  !session.loggedIn && <Text> { session.logginError }</Text>  }
             {  session.error && <Text> { session.error }</Text>  } */}

    </View>
     );
 };

export default SignInScreen;



