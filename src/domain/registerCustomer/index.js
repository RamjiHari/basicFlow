import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DropDown from '../../common/components/DropDown';
import InputText from '../../common/components/InputText';

export default function RegisterCustomer() {
  const state = {
    isValid: false,
    errors: false
};



return (
  <View style={styles.container}>
    <ProgressSteps>
      <ProgressStep label="First Step">
      <View style={{alignItems:'center'}}>
        <Text>This is the content within step 1!</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <InputText placeholder="lname" width="half"/>
          <InputText placeholder="lname"  width="half"/>
        </View>
      <InputText placeholder="lname"  width="full"/>
      <InputText placeholder="lname"  width="full"/>

      <InputText placeholder="lname" width="half"/>
      <InputText placeholder="lname"  width="half"/>
        </View>
        <InputText placeholder="lname"  width="full"/>
        <InputText placeholder="lname"  width="half"/>
      </ProgressStep>
      <ProgressStep label="Second Step">
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 2!</Text>

       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <DropDown type = 'visit_purpose' width="half"/>
       <DropDown type = 'visit_purpose' width="half"/>
       </View>

       <DropDown type = 'visit_purpose' width="full"/>
       <DropDown type = 'visit_purpose' width="half"/>
       </View>



      </ProgressStep>
    </ProgressSteps>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  },

})
