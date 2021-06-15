import React from 'react'
import { View, Text } from 'react-native'

export default function RegisterCustomerScreen() {


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

  return (
    <View>
      <Text>Hii</Text>
      <Text>first checkout</Text>
    </View>
  )
}
