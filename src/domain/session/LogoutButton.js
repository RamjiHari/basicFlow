import 'react-native-gesture-handler';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer'
import {Avatar,Text,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { logout } from './actions';

export default function LogoutButton(props) {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logout());
    return (
        // <Button title="Logout" onPress={() => { onLogout() }} />

        <DrawerItem
                    icon={() => (
                        <Icon
                        name="exit-to-app"
                        color={props.colors}
                        size={25}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={props.labelStyle}
                    onPress={() => { onLogout() }}
                />
    );
}