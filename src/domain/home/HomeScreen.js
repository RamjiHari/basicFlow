import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../common/utils/Colors';
import { HOME_FLOW_IMAGE } from '../../common/utils/Constants';
import HomeNavigation from './HomeNavigation';


export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={HOME_FLOW_IMAGE} style={styles.logo} />
            </View>
            <HomeNavigation navigation={navigation}/>
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