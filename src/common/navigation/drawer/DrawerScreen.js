import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Text,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style.js';
import { useSelector,useDispatch} from 'react-redux';
import { logout } from '../../../domain/session/actions';
import { colors } from '../../utils/Colors.js';


export function  DrawerContent(props){
    const[isDarkTheme,setDarkTheme]=React.useState(false);
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logout());

    const session = useSelector((state) => state.session);
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image  source={{uri:'https://www.flowglobal.net/content/media/LRM_EXPORT_28953082622816_20191110_115223070.jpeg'}} />
                        <View style={{marginLeft:15,}}>
                            <Title style={styles.title}>John Peter</Title>
                            {/* <Caption style={styles.caption}>{session.userInfo.user.phone}</Caption> */}
                        </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Customer</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>10</Paragraph>
                                <Caption style={styles.caption}>Pending Approval</Caption>
                            </View>
                        </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                name="home"
                                color={colors.textblack}
                                size={size}

                                />
                            )}
                            label="Home"
                            labelStyle={{color:colors.textblack}}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                name="person-add"
                                color={colors.textblack}
                                size={size}

                                />
                            )}
                            label="Register"
                            labelStyle={{color:colors.textblack}}
                            onPress={() => {props.navigation.navigate('Register')}}
                        />

                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                name="search"
                                color={colors.textblack}
                                size={size}

                                />
                            )}
                            label="Search"
                            labelStyle={{color:colors.textblack}}
                            onPress={() => {props.navigation.navigate('Search')}}
                        />


                    </Drawer.Section>

            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
                    icon={({ size}) => (
                        <Icon
                        name="exit-to-app"
                        color={colors.textblack}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{color:colors.textblack}}
                    onPress={() => { onLogout() }}
                />
        </Drawer.Section>

    </View>
  );
}




