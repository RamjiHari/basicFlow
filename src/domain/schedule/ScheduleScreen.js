import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Confirm} from '../../common/components/Alertify'

export default function ScheduleScreen() {
    const [show,setShow]=useState(false)
    const onSubmitHandler =() =>{
        setShow(!show)
        alert("Working")
    }
    return (
        <View>
            <TouchableOpacity onPress={()=>setShow(!show)}>
                <Text>Submit</Text>
            </TouchableOpacity>
           {show? <Confirm title="Confirm Dialog" message="Are you sure about that?" onSubmit={()=>onSubmitHandler()} cancel ={()=>setShow(!show)}/>:null}
        </View>

    )
}
