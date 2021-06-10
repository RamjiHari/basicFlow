import React ,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import InputText from '../../common/components/InputText';
//import { Checkbox } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DropDown from '../../common/components/DropDown'
import MultiSelector from '../../common/components/MultiSelect';
import Timer from './Timer';

export default function RegisterScreen({navigation}) {
  const session = useSelector(state => state.session);
  const [date, setDate] = React.useState(new Date())
  const [show, setShow] = React.useState(false)
  const [state, setstate] = React.useState({
    fname:'' , lname : '' , addr_type :'' , visit_purpose : '' ,selectedItems : [] , isSelected:false,
   })

   const onChangeText = (key, val) => {
    let updated,lnameUpdated;
    if(key == 'isSelected' || (key == 'fname' && state.isSelected)){
      if((key == 'fname' && state.isSelected)){
        lnameUpdated = val;
      }else{
        lnameUpdated = state.fname;
      }
      updated = {
        ...state,
        lname:lnameUpdated,
        [key]:val
      }

    }else{
      updated = {
        ...state,
        [key]:val
      }
    }

    setstate(updated)

  }
  //  const onChangeText = (key, val) => {
  //   let updated,lnameUpdated;
  //   if(key == 'isSelected' || (key == 'fname' && state.isSelected)){
  //     if((key == 'fname' && state.isSelected)){
  //       lnameUpdated = val;
  //     }else{
  //       lnameUpdated = state.fname;
  //     }
  //     updated = {
  //       ...state,
  //       lname:lnameUpdated,
  //       [key]:val
  //     }

  //   }else{
  //     updated = {
  //       ...state,
  //       [key]:val
  //     }
  //   }

  //   setstate(updated)

  // }

function onsubmit(){
 console.log(state,"state")
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

    <DropDown type = 'addr_type'  handleText={(val) => onChangeText('addr_type',val)}/>

    <View style={styles.action}>
      <DropDown type = 'visit_purpose'   handleText={(val) => onChangeText('visit_purpose',val)}/>
    </View>

    <View style={styles.action}>
      <InputText placeholder="fname" value={state.fname}   handleText={val => onChangeText('fname', val)}/>
    </View>



      <CheckBox
      value={state.isSelected}
      onValueChange={val => onChangeText('isSelected', val)}
      style={styles.checkbox}
      />
      <Text style={styles.label}>Same As Mobile Number?</Text>

      <Text>CheckBox is {state.isSelected ? "Checked" : "Unchecked"}</Text>


      <View style={styles.action}>
      <InputText placeholder="lname" value={  state.lname }   handleText={val => onChangeText('lname', val)}/>
    </View>


    <MultiSelector type='visit_purpose' selectedItems={state.selectedItems} handleText={(val) => onChangeText('selectedItems',val)}/>
    <TouchableOpacity onPress={onsubmit}>
      <Text>Submit</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
      <Text>Profile</Text>
    </TouchableOpacity>

    <Timer/>




    <Text>{state.addr_type}</Text>
    <Text>{state.fname}</Text>
    <Text>{state.lname}</Text>
    <Text>{state.selectedItems}</Text>
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
