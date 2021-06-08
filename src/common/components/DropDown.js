import React , {useState} from 'react'
import { View, Text } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Master from '../utils/Master';

export default function DropDown(props) {


    const[category,setCategory]= React.useState(Master.filter(e=>e.data_key==props.type))

    let items = category.map((item,index) => {
    return ( <Picker.Item key={index} label={item.data_code} value={item.data_code} /> )
    })
    return (
        <Picker style={{ height: 50, width: '100%' }}   onValueChange={props.handleText}>
         <Picker.Item label="Options"/>
            {items}
        </Picker>
    )
}
