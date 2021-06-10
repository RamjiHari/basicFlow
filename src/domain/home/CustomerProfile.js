import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomerData from './CustomerData';



export default function CustomerProfile() {


    const customerDetails = {
        "id_number": "12345",
        "partner": "67890",
        "biz_name": "Flow",
        "establishment_type": "Flow Global",
        "ownership": "Flow",
        "first_name": "Manish",
        "last_name": "Mandal",
        "gender": "Male",
        "dob": "01/01/01",
        "mobile_number": "9876543210",
        "messenger_number": "0123456789",
        "region": "India",
        "district": "Kanyakumari",
        "country": "India",
        "location": "India",
        "sub_country": "India",
        "parish": "Nagercoil",
        "village": "Krishnancoil",
        "landmark": "Krishnancoil",
        "id_img": "https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg",
        "prf_img": "https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg",
        "Passport_img": "https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg",

    }
    const customerDetailsImg = {
        one: customerDetails.id_img,
        two: customerDetails.Passport_img,
        three: customerDetails.prf_img
    };

    const customerIdImg = Object.values(customerDetailsImg);


    return (

        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <SliderBox
                    images={customerIdImg}
                    sliderBoxHeight={50}
                    dotColor="black"
                    inactiveDotColor="white"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={styles.paginationBox}
                    dotStyle={styles.dotStyle}
                    ImageComponentStyle={styles.imageComponent}
                    imageLoadingColor="#2196F3" />

            </View>
            <CustomerData customerDetails={customerDetails} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgContainer: {
        backgroundColor: "rgba(252, 194, 64, 2)",
        height:'40%'
    },
    paginationBox: {
        bottom:'-10%',
        paddingVertical: 0
    },
    dotStyle: {
        width: 15,
        height: 15,
        borderRadius: 15,
    },
    imageComponent: {
        borderRadius: 15,
        marginTop: 15,
        height:200,
        width:'90%'
    },

})