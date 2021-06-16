import React from 'react'
import {View, ScrollView, Text , Image , StyleSheet, TouchableOpacity} from 'react-native'

export default function PreviewRegisterScreen ({ route }) {
    
    const details = route.params;


    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading}>Customer Registration Preview</Text>
                <View>
                    <Text style={styles.tittle}>IDs</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>ID Proof Type</Text>
                            <Text style={styles.contentTextKey}>ID Number</Text>
                            <Text style={styles.contentTextKey}>Partner</Text>
                            <Text style={styles.contentTextKey}>Partner Cust Id</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{details.id_type}</Text>
                            <Text style={styles.contentTextValue}>{details.national_id}</Text>
                            <Text style={styles.contentTextValue}>{details.data_prvdr_code}</Text>
                            <Text style={styles.contentTextValue}>{details.data_prvdr_cust_id}</Text>
                        </View>
                    </View>
                    <View style={styles.imageView}>
                    <Image style={styles.image} source={{ uri : details.id_photo}} />
                    <Text> Id Proof Photo</Text>
                    </View>
                </View>

                <View >
                    <Text style={styles.tittle}>Biz Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Biz Name</Text>
                            <Text style={styles.contentTextKey}>Establishment Type</Text>
                            <Text style={styles.contentTextKey}>Ownership</Text>
                            <Text style={styles.contentTextKey}>Business Distance</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{details.biz_name}</Text>
                            <Text style={styles.contentTextValue}>{details.biz_addr_prop_type}</Text>
                            <Text style={styles.contentTextValue}>{details.ownership}</Text>
                            <Text style={styles.contentTextValue}>{details.business_distance}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                        <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri : details.photo_biz_lic}} />
                        <Text> BizLicence Photo</Text>
                        </View>
                        <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri : details.photo_shop}} />
                        <Text> Establishment Photo</Text>
                        </View>
                    </View>
                </View>

                <View >
                    <Text style={styles.tittle}>Personal Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>First Name</Text>
                            <Text style={styles.contentTextKey}>Last Name</Text>
                            <Text style={styles.contentTextKey}>Gender</Text>
                            <Text style={styles.contentTextKey}>DOB</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{details.first_name}</Text>
                            <Text style={styles.contentTextValue}>{details.last_name}</Text>
                            <Text style={styles.contentTextValue}>{details.gender}</Text>
                            <Text style={styles.contentTextValue}>{details.dob}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                        <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri : details.photo_selfie}} />
                        <Text> Selfie Photo</Text>
                        </View>
                        <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri : details.photo_pps}} />
                        <Text> Passport Photo</Text>
                        </View>
                    </View>
                </View>

                <View >
                    <Text style={styles.tittle}>Contact Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Mobile Number</Text>
                            <Text style={styles.contentTextKey}>Messenger Number</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                                <Text style={styles.contentTextValue}>{details.mob_num}</Text>
                                <Text style={styles.contentTextValue}>{details.whatsapp}</Text>
                        </View>
                    </View>
                </View>

                <View >
                    <Text style={styles.tittle}>Location</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Region</Text>
                            <Text style={styles.contentTextKey}>District</Text>
                            <Text style={styles.contentTextKey}>Country</Text>
                            <Text style={styles.contentTextKey}>Location</Text>
                            <Text style={styles.contentTextKey}>Sub Country</Text>
                            <Text style={styles.contentTextKey}>Parish</Text>
                            <Text style={styles.contentTextKey}>Village</Text>
                            <Text style={styles.contentTextKey}>Landmark</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{details.region}</Text>
                            <Text style={styles.contentTextValue}>{details.district}</Text>
                            <Text style={styles.contentTextValue}>{details.country}</Text>
                            <Text style={styles.contentTextValue}>{details.location}</Text>
                            <Text style={styles.contentTextValue}>{details.sub_country}</Text>
                            <Text style={styles.contentTextValue}>{details.parish}</Text>
                            <Text style={styles.contentTextValue}>{details.village}</Text>
                            <Text style={styles.contentTextValue}>{details.landmark}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.fixToText}>
                    <TouchableOpacity style={styles.leftbutton} onPress={() => alert('save button pressed')}>
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightbutton} onPress={() => alert('cancel button pressed')}>
                        <Text style={styles.rightbuttontext}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d6d6d6'
    },
    heading: {
        textAlign:'center',
        fontSize:20,
        marginTop:20,
        fontWeight:'bold'
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        margin:20,
        textDecorationLine:'underline'
    },
    contentContainer: {
        flexDirection: 'row',
    },
    content: {
        flex: 1,
    },
    contentTextKey: {
        marginLeft: 50,
    },
    contentTextValue: {
        marginLeft: 50,
    },
    colon: {
        fontWeight: 'bold'
    },
    imageView: {
        alignItems:'center',
    },
    image: {
        width:100,
        height:80,
        margin:10
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical:80
      },
      leftbutton: {
          paddingHorizontal:50,
          paddingVertical:10,
          borderRadius:10,
          backgroundColor: '#fcb83b',
          alignItems:'center',
      },
      rightbutton: {
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#545454',
        backgroundColor: '#fff',
        alignItems:'center',
    },
      text: {
          fontSize:18
      },
      rightbuttontext: {
          color:'#545454',
          fontSize:18
      }
})