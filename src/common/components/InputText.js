import React from 'react'

export default function InputText(props) {
    return (
            <TextInput
          value={props.value}
          placeholder={props.placeholder}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.handleText}
        />
    )
}