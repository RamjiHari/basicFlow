import { Alert } from 'react-native'
import React from 'react'
import { ConfirmDialog } from 'react-native-simple-dialogs';

export function Confirm(props) {
    return (
        <ConfirmDialog
            title="Confirm Dialog"
            message="Are you sure about that?"
            visible={true}
            positiveButton={{
                title: "YES",
                onPress: () => props.onSubmit()
            }}
            negativeButton={{
                title: "NO",
                onPress: () => props.cancel()
            }}
        />
    )
}

export const  Message=(head,msg)=> {
    Alert.alert ( head ,  msg ,   [
         { text :  'Okay' }
     ] );
}

