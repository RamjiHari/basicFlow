import 'react-native-gesture-handler';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { logout } from './actions';

export default function LogoutButton(props) {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logout());
    return (
        <Button title="Logout" onPress={() => { onLogout() }} />
    );
}
