import React  from 'react'
import {Picker} from '@react-native-picker/picker';
import Master from '../utils/DropDownMaster';

export default function DropDown(props) {

    const[category,setCategory]= React.useState(Master.filter(e=>e.data_key==props.type))

    let items = category.map((item,index) => {
    return ( <Picker.Item key={index} label={item.data_code} value={item.data_code} /> )
    })
    return (
        <Picker    onValueChange={props.handleText} selectedValue={props.value}>
         <Picker.Item label="Options"/>
            {items}
        </Picker>
    )
}