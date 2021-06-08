import React from 'react'
import { StyleSheet,TextInput } from 'react-native'
import { colors } from '../utils/Colors'

export default function InputText(props) {
    return (
            <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.handleText}
        />
    )
}

const styles = StyleSheet.create({
    input: {

        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
    },
  })