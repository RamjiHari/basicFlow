import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../common/utils/Colors';
import HomeNavigation from './HomeNavigation';


export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                    <Image source={require('../../common/assets/images/icon.png')} style={styles.logo} />
            </View>
            <View>
            <HomeNavigation/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.defaultWhite
    },
    logoContainer: {
        alignItems:'center'
    },
    logo: {
        width: 150,
        height: 150,

    },
})