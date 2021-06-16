import React from 'react'
import { TextInput } from 'react-native'

export default function InputText(props) {
    return (
            <TextInput
          value={props.value}
          placeholder={props.placeholder}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.handleText}
          keyboardType={props.keyboardType}
        />
    )
}