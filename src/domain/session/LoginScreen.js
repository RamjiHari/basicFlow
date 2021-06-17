import React ,   { useState } from 'react';
import  {
    View ,
    Text ,
    TouchableOpacity ,
    TextInput ,
    Platform ,
    StyleSheet  ,
    StatusBar ,
    Image ,
    ImageBackground,
 } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import PhoneInput from "react-native-phone-number-input";
import  {  useDispatch ,  useSelector  } from 'react-redux';
import  {  login ,validation } from './actions';
import  {  colors  } from '../../common/utils/Colors';
import { FLOW_LOGO, LOGIN_BG_IMAGE, LOGIN_HEAD } from '../../common/utils/Image';
import {Message} from '../../common/components/Alertify'

const LoginScreen  =   (  { navigation } )  =>  {

    const session  =  useSelector ( state  => state.session );
    const  [ phone ,  setPhone ]  =  useState ( '' )
    const  [ otp ,  setOtp ]  =  useState ( '' )
    const  [ password ,  setPassword ]  =  useState ( '' )

    const dispatch  =  useDispatch (  );



    const  [ secureTextEntry , setsecureTextEntry ] = useState ( true )

    const updateSecureTextEntry  =   (  )  =>  {
        setsecureTextEntry ( !secureTextEntry )
     }



    const  [ tab , setTab ]  =  useState (  { type : 'password' , status : true } );
    const setTabHandler  =   ( type , status )  => {
        setTab (  { type : type , status : status } )
     }


    const  [ show , setShow ] = useState ( false )
    const setShowhandler  =   (  )  => {
        if  (  phone.length  ==  0  )  {

            Message( 'Wrong Input!' , 'Phone Number cannot be empty!')
             return ;
         }
        setShow ( true )
     }


     const loginData = {
        phone : phone ,
        password : tab.type == 'password' ? password : otp ,
        type : tab.type
    }

    const loginHandle  =   ( data )  =>  {

        if  (  loginData.phone.length  ==  0 || (loginData.password.length  ==  0  ) )  {
            Message('Wrong Input!' , 'Username or password field cannot be empty.')
            return;
         }

        dispatch ( login ( data ) );

     }

    return  (
    <View style =  { styles.container }>
        <StatusBar backgroundColor =  { colors.secondaryColor } barStyle = "light-content"/>
            <View style =  { styles.header }>
                <Image
                    style =  { styles.flowLogo }
                    source =  {  FLOW_LOGO }
                />
            </View>

        <Animatable.View animation = "fadeInUpBig" style =  { styles.footer }>
            <ImageBackground source =  { LOGIN_BG_IMAGE }  imageStyle =  { styles.imageStyle } style =  { styles.bgImage }>
                <View animation = "fadeInUpBig"  style =  { styles.loginView }>
                    <Text style =  { styles.logText }>{LOGIN_HEAD}</Text>
                </View>

                <View  style =  { styles.tabButton }>
                    <TouchableOpacity
                        style =  {  [ styles.pwdbutton ,  {  backgroundColor :  tab.status  ? colors.defaultYellow  :  colors.textGray } ] }
                        onPress =  {  (  )  => setTabHandler ( 'password' , true )  }>
                        <Text> Password </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style =  {  [ styles.pwdbutton ,  {  backgroundColor :  !tab.status  ?  colors.defaultYellow  :  colors.textGray } ] }
                        onPress =  {  (  )  => setTabHandler ( 'otp' , false )  }>
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

                 { tab.status &&
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
                                onEndEditing={()=>dispatch (validation(password))}

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
                                onPress =  {  (  )  =>  { loginHandle ( loginData ) } }
                            style =  { styles.signIn }>
                            <Text>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                 }


                     { !tab.status  &&
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
                                    <TouchableOpacity onPress =  {  (  )  =>  { loginHandle (  loginData  ) } } style =  { styles.signIn }>
                                        <Text>Login</Text>
                                    </TouchableOpacity>
                            </View>
                             }



                        </View>
                      }

            </ImageBackground>
        </Animatable.View>
        <Text> { session.valid_msg }</Text>
         {/*
             {  !session.loggedIn && <Text> { session.logginError }</Text>  }
             {  session.error && <Text> { session.error }</Text>  } */}

    </View>
     );
 };

export default LoginScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryColor
      },
      header: {
          flex: 1,
          justifyContent: 'center',
          alignItems:'center',
          paddingHorizontal: 20,

      },
      flowLogo:{
          width: 200,
          height: 50,
      },
      loginView:{
          flexDirection:'row',
          justifyContent:'center',
          padding:20,
      },
      centerView:{
          alignItems:'center'
      },
      logText:{
          color: colors.defaultWhite,
          fontSize:30,
          fontFamily:'Montserrat-Regular'
      },
      phoneContainer:{
          padding:0,
          opacity: .8,
          width:'100%',
          color:colors.defaultWhite
      },
      phoneText:{
          padding:0,
          opacity: .8
      },
      tabButton:{
          flexDirection:'row',
          justifyContent:'center'
      },
      otpAgainText:{
          color: colors.defaultWhite,
          marginTop:15,
          marginRight:10
      },
      otpAgainView:{
          width:'100%',
          flexDirection:'row',
          justifyContent:'flex-end'
      },
      footer: {
          flex: 3,
          backgroundColor:colors.primaryColor,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
      },
      bgImage:
      {
          flex: 1,
          resizeMode: "stretch",
      },
      pwdbutton: {
          alignItems: "center",
          padding: 10,
          width:"40%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 15
        },
      otpbutton: {
        alignItems: "center",
        padding: 10,
        width:"40%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      imageStyle:{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          opacity:.5
      },

      action: {
          width:'90%',
          flexDirection: 'row',
          marginTop: 20,
          borderBottomWidth:1,
          borderBottomColor: colors.defaultWhite,
          paddingBottom: 5,
          justifyContent:'center',
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: colors.defaultWhite
      },
      button: {
          alignItems: 'center',
          marginTop: 30,
          width:'90%',
      },
      signIn: {
          width: '50%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor:colors.hexGray
      },
      otp: {
          width: '50%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor:colors.secondaryColor,

      },
});



