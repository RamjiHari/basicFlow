import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import DropDown from '../../common/components/DropDown'
import InputText from '../../common/components/InputText'
import SearchList from './SearchData'

export default function CustomerScreen({navigation}) {
    return (
        <View style={styles.container}>
           {/* <ReviewScheduleVisitScreen/> */}
            <View style={styles.searchContainer}>
                <View style={styles.searchHeading}>
                    <Text style={styles.searchHeadingText}>Search and Select Customer</Text>
                </View>
                <View style={styles.searchFieldContainer}>
                    
                    <View style={styles.searchField}>
                    <View style={styles.input}>
                              <DropDown type="visit_purpose"/>
                              </View>
                  
                    </View>
                    <View style={styles.searchField}>
                    {/* <TextInput
                                    style={styles.input}
                                    // onChangeText={}
                                    // value={text}
                                    placeholder="Location"
                                    keyboardType="default"
                                /> */}
                                <View style={styles.input}>
                              <DropDown type="visit_purpose"/>
                              </View>
                    </View>

                 
                </View>
                <View style={styles.searchField3}>
                    {/* <TextInput
                                    style={styles.input3}
                                    // onChangeText={}
                                    // value={text}
                                    placeholder="Name or Mobile or Partner"
                                    keyboardType="default"
                                /> */}
                                <View style={styles.input3}>
                                <InputText placeholder="Name or Mobile or Partner"/>
                                </View>
                    </View>

                    <View style={styles.btnContainer}>
                    <TouchableHighlight
                        style={styles.submit}
                        onPress={() => alert('click')}
                        underlayColor='#fff'>
                        <Text style={styles.submitText}>Search</Text>
                    </TouchableHighlight>

                </View>
                
            </View>
            <SearchList navigation={navigation}/>
 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer:{
        marginBottom:20
    },
    searchHeading: {
        padding: 10,
    },
    searchHeadingText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    searchFieldContainer: {
        flexDirection: 'row', 
    },
    searchField: {
        flex: 1,
        marginTop: 10,
    },
    input: {
        borderBottomWidth: 1,
        width: '60%',
        marginLeft: 30
    },
    searchField3: {
        justifyContent: 'center',
        marginTop: 20
    },
    input3: {
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: 30,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 18
    },
    submit: {
        width: '30%',
        padding:10,
        backgroundColor: 'rgba(252, 183, 27, 1)',
        borderWidth: 0.5,
        justifyContent: "center",
        borderRadius: 10
    },
    submitText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 22
    },
})

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
// })
