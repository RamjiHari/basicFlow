import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Linking, Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FONT_FAMILY } from '../../common/utils/Constants';


export default function CustomerData(props) {
    let customerDetails = props.customerDetails
    console.log(customerDetails)

    const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else { phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };

    return (
            <ScrollView>
                <View style={styles.detailList}>
                    <Text style={styles.tittle}>IDs</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>ID Number</Text>
                            <Text style={styles.contentTextKey}>Partner</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{customerDetails.id_number}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.partner}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
                    <Text style={styles.tittle}>Biz Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Biz Name</Text>
                            <Text style={styles.contentTextKey}>Establishment Type</Text>
                            <Text style={styles.contentTextKey}>Ownership</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}>{customerDetails.biz_name}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.establishment_type}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.ownership}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
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
                            <Text style={styles.contentTextValue}>{customerDetails.first_name}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.last_name}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.gender}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.dob}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
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
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.contentTextValue}>{customerDetails.mobile_number}</Text>
                                <TouchableOpacity

                                    onPress={() => { dialCall(customerDetails.mobile_number) }}
                                >

                                    <Icon name="phone" size={17} color="black" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>

                            </View>




                            <Text style={styles.contentTextValue}>{customerDetails.messenger_number}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
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
                            <Text style={styles.contentTextValue}>{customerDetails.region}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.district}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.country}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.location}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.sub_country}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.parish}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.village}</Text>
                            <Text style={styles.contentTextValue}>{customerDetails.landmark}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    tittle: {
        fontSize: 20,
        marginLeft: 5
    },
    contentContainer: {
        flexDirection: 'row',
    },
    content: {
        flex: 1,
    },
    contentTextKey: {
        marginLeft: '20%',
        fontFamily:FONT_FAMILY
    },
    contentTextValue: {
        marginLeft: '15%',
        fontFamily:FONT_FAMILY
    },
    colon: {
        fontWeight: 'bold'
    }
})