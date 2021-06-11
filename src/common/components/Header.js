import React from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/Colors';
import { Avatar } from 'react-native-paper';

export const HeaderLeft = ({navigation,screen}) => {

    return(
        <View style={{flexDirection:'row'}}>

            {screen!='Home'?<Icon name="chevron-back" size={40} color={colors.defaultWhite} onPress={() => navigation.goBack()}></Icon> : null }
            <MaterialCommunityIcons name="menu" size={40} color={screen!='Home' ? colors.defaultWhite :colors.textblack} onPress={() => navigation.openDrawer()}></MaterialCommunityIcons>

        </View>
    )
}

export const HeaderRight = ({screen}) => {

    return(
        <View style={{marginRight:10}}>
                <Avatar.Image  source={screen=='Home'? {uri:'https://www.flowglobal.net/content/media/LRM_EXPORT_28953082622816_20191110_115223070.jpeg'} : require('../assets/images/icon.png')} size={40} />
        </View>
    )
}
