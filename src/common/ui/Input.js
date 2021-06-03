import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'

export default function Input(props) {
    return (
        <View>
            <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          autoCapitalize="none"
          onChangeText={props.handleText}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
  })
