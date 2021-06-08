import React ,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import InputText from '../../common/components/InputText';
import DatePicker from 'react-native-date-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DropDown from '../../common/components/DropDown'

export default function RegisterScreen() {
  const session = useSelector(state => state.session);
  const [date, setDate] = React.useState(new Date())
  const [show, setShow] = React.useState(false)
  const [state, setstate] = React.useState({
    fname:'' , addr_type :'' , gender : ''
   })


   const onChangeText = (key, val) => {
   setstate({
        ...state,
       [key]: val
   })
  }

  return (
    <View style={styles.container}>
     <Text>Welcome {session.userInfo.user.phone}</Text>


      {/* <MaterialCommunityIcons name="home" onPress={()=>setShow(!show)}  size={26} />
    {show && <DatePicker
      date={date}
      mode="date"
      onDateChange={(d)=>setDate(d)}
    />
    }

    <Text>{date.getDate() + '-' + date.getMonth() + '-' + date.getYear() }</Text> */}

    <DropDown type = 'addr_type'  handleText={(itemValue) => onChangeText('addr_type',itemValue)}/>

    <View style={styles.action}>
      <DropDown type = 'gender'  handleText={(itemValue) => onChangeText('gender',itemValue)}/>
    </View>

    <View style={styles.action}>
      <InputText placeholder="fname"  handleText={val => onChangeText('fname', val)}/>
    </View>


    <Text>{state.addr_type}</Text>
    <Text>{state.fname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  },
  action: {
    flexDirection: 'row',
    width:'90%',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(155,155,155,1)",
    paddingBottom: 5,
    marginLeft:6
},
});
