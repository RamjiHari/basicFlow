import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const data = [
    { "id": "123456", "partner": "678901", "biz_name": "Flow1", "name": "Flow Global1" },
    { "id": "123457", "partner": "678902", "biz_name": "Flow2", "name": "Flow Global2" },
    { "id": "123458", "partner": "678903", "biz_name": "Flow3", "name": "Flow Global3" },
    { "id": "123459", "partner": "678904", "biz_name": "Flow4", "name": "Flow Global4" },
    { "id": "123459", "partner": "678904", "biz_name": "Flow4", "name": "Flow Global4" },
    { "id": "123459", "partner": "678904", "biz_name": "Flow4", "name": "Flow Global4" },
    { "id": "123459", "partner": "678904", "biz_name": "Flow4", "name": "Flow Global4" },
    { "id": "123459", "partner": "678904", "biz_name": "Flow4", "name": "Flow Global4" },
]
export default function SearchList({navigation}) {
    const renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                <TouchableOpacity style={styles.searchResult}>
                    <View>
                        <Image
                            style={styles.custPic}
                            source={require('../../common/assets/images/icon.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.listText}>Name</Text>
                        <Text style={styles.listText}>Biz Name</Text>
                    </View>
                    <View>
                        <Text style={styles.listText}>:</Text>
                        <Text style={styles.listText}>:</Text>
                    </View>
                    <View>
                        <Text style={styles.listText}>{item.name}</Text>
                        <Text style={styles.listText}>{item.biz_name}</Text>
                        <TouchableOpacity style={styles.icons}>
                            <Icon size={15} color="black" name="user-alt" onPress={()=>navigation.navigate('Profile')} style={{marginTop:2}} />
                            <MaterialIcons name='add-location-alt' size={18} color='black' onPress={() => alert('click')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.listText}>Cust Id</Text>
                        <Text style={styles.listText}>Partner Id</Text>
                    </View>
                    <View>
                        <Text style={styles.listText}>:</Text>
                        <Text style={styles.listText}>:</Text>
                    </View>
                    <View>
                        <Text style={styles.listText}>{item.id}</Text>
                        <Text style={styles.listText}>{item.partner}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    searchResult: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 5,
    },
    custPic: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },
    listText: {
        fontSize: 15,
        padding: 1
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})