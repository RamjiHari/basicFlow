import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Text,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style.js';
import { useSelector,useDispatch} from 'react-redux';
import { logout } from '../../../domain/session/actions';

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
                        <Avatar.Image
                            source={{
                                uri: 'https://img-premium.flaticon.com/png/512/3135/3135715.png?token=exp=1623046068~hmac=0b079baed796da5f8933ea13e8624376'
                            }}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>John Peter</Title>
                            <Caption style={styles.caption}>{session.userInfo.user.phone}</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Customer</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Pending Approval</Caption>
                            </View>
                        </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />




                    </Drawer.Section>

            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { onLogout() }}
                />
        </Drawer.Section>

    </View>
  );
}




