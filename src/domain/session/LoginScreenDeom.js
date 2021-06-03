import * as React from 'react';
import { Button,Image, View, Text, StyleSheet,Dimensions,TouchableOpacity,TextInput ,StatusBar,Alert,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import styles from './LoginStyle.js';
import { useBackHandler } from "@react-native-community/hooks"
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions';



export default function LoginScreen(props) {
    const session = useSelector(state => state.session);

    const dispatch = useDispatch();
    const onLogin = (username,password) => dispatch(login(username,password));
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser:true,
        isValidPassword:true
    });

    const textInputChange=(val)=>{
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser:true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    }
    const handlePasswordChange=(val)=>{
        if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password:val,
            isValidPassword:true
        })
        }else{
            setData({
                ...data,
                password:val,
                isValidPassword:false
            })
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    const handleValidUser=(val)=>{
        if(val.trim().length>=4){
            setData({
                ...data,
                isValidUser:true
            })
        }else{
            setData({
                ...data,
                isValidUser:false
            })
        }
    }

  // Callback function for back action
  const backActionHandler = () => {
    props.navigation.push('Signin')
    return true;
  };

// hook which handles event listeners under the hood
  useBackHandler(backActionHandler)


    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.imgcontainer}>
        <Text style={styles.text_footer}>FLOW</Text>
      </View>
            <Text style={styles.text_footer}></Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                    placeholder="Enter Your Username"
                    style={styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText={(val) => textInputChange(val)}
                    value={data.username}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn">
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>:null}
            </View>
            { data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            <Text style={[styles.text_footer,{marginTop:35}]}></Text>
            <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                    placeholder="Enter Your Password"
                    secureTextEntry={data.secureTextEntry?true:false}
                    style={styles.textInput}
                    value={data.password}
                    onChangeText={(val) => handlePasswordChange(val)}
                    />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    <Feather
                        name={data.secureTextEntry?'eye-off':'eye'}
                        color="gray"
                        size={20}
                        />
                </TouchableOpacity>

            </View>
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
            </Animatable.View>
            }

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {onLogin(data.username,data.password)}} >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}>
                    <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
        {console.log(session,"session")}
        { session.loggingIn && <Text>Please wait logging in</Text> }
        { session.error && <Text>UserName passwor wrong</Text> }

    </View>
    );
}