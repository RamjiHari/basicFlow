import React from 'react'
import { StyleSheet,TextInput } from 'react-native'
import { colors } from '../utils/Colors'

export default function InputText(props) {
    return (
            <TextInput
          style={styles[props.width]}
          value={props.value}
          placeholder={props.placeholder}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.handleText}
        />
    )
}

const styles = StyleSheet.create({
    half: {
      width:'40%',
      borderBottomWidth: 1,
      borderBottomColor: "rgba(155,155,155,1)",
      marginRight:20,
      marginLeft:20,
    },
    full: {
      width:'90%',
      borderBottomWidth: 1,
      borderBottomColor: "rgba(155,155,155,1)",
    },
  })