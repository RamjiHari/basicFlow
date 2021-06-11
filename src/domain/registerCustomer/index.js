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
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 1!</Text>
          <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
    <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
    <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
    <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
    <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
    <View style={styles.action}>
      <InputText placeholder="lname"/>
    </View>
        </View>
      </ProgressStep>
      <ProgressStep label="Second Step">
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 2!</Text>
        </View>
        <View style={styles.action}>
      <DropDown type = 'visit_purpose'/>
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
  action: {
    flexDirection: 'row',
    width:'90%',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(155,155,155,1)",
    paddingBottom: 5,
    marginLeft:6
}
})
