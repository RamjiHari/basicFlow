import React ,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Timer() {

 const [time,setTime] = useState(0)
 const [start,setStart] = useState(false)
 const sec=Math.floor((time / 1000) % 60)
 const min=Math.floor((time / 60000) % 60)


useEffect(() => {
    console.log("workin")
    let interval = null
    if (start){
        interval =setInterval(()=>{
            setTime(prevTime => prevTime + 1000)
        },1000)
    }else{
        clearInterval(interval)
    }
    return () => clearInterval(interval)
}, [start])


    return (
        <View>

            <Text>{min.toString().length ==1 ? '0' + min :min } : {sec.toString().length ==1 ? '0' +sec :sec } </Text>
            <Text></Text>
            <TouchableOpacity onPress={()=>setStart(false)}>
                <Text>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStart(true)}>
                <Text>Checkin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setTime(0)}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}
