import React ,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Timer() {

 const [time,setTime] = useState(0)
 const [start,setStart] = useState(false)

useEffect(() => {
    console.log("workin")
    let interval = null
    if (start){
        interval =setInterval(()=>{
            setTime(prevTime => prevTime + 10)
        },10)
    }else{
        clearInterval(interval)
    }
    return () => clearInterval(interval)
}, [start])




    return (
        <View>

            <Text>{"0" + Math.floor((time / 60000) % 60)} </Text>
            <Text>{ Math.floor((time / 1000) % 60)} </Text>
            <TouchableOpacity onPress={()=>setStart(false)}>
                <Text>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStart(true)}>
                <Text>Checkin</Text>
            </TouchableOpacity>
        </View>
    )
}
