import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomerScreen({navigation}) {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text>SearchCustomer</Text>
            <Text>first Checkout</Text>
         </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
})
