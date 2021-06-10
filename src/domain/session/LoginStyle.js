import { StyleSheet } from 'react-native';
import { colors } from '../../common/utils/Colors';
export default StyleSheet.create({
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