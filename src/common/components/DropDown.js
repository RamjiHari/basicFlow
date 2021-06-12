import React  from 'react'
import {StyleSheet,View} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Master from '../utils/DropDownMaster';

export default function DropDown(props) {

    console.log(Master,"sss")
    const[category,setCategory]= React.useState(Master.filter(e=>e.data_key==props.type))

    let items = category.map((item,index) => {
    return ( <Picker.Item key={index} label={item.data_code} value={item.data_code} /> )
    })
    return (
        <View style={styles[props.width]}>
        <Picker    onValueChange={props.handleText}>
         <Picker.Item label="Options"/>
            {items}
        </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
      half: {
        width:'40%',
        marginRight:20,
        marginLeft:20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(155,155,155,1)",
        paddingBottom: 5,
    },
    full: {
        width:'90%',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(155,155,155,1)",
        paddingBottom: 5,
    }
  })