import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FONT_FAMILY } from '../../common/utils/Constants';
import { colors } from '../../common/utils/Colors';


export default function HomeNavigation({navigation}) {
      const [items, setItems] = React.useState([
       { name: 'Overdue    FAs', icon: 'warning', size: 33 , navigation :'Register'},
        { name: 'Due Today  FAs', icon: 'lock-clock', size: 36 , navigation :'Register'},
        { name: 'Schedule   Visit', icon: 'add-location', size: 35, navigation :'Register' },
       { name: 'Customer  Agreement', icon: 'file-copy', size: 33, navigation :'Register' },
        { name: 'Register Customer', icon: 'person-add', size: 33, navigation :'Register' },
        { name: 'Search Customer', icon: 'person-search', size: 33, navigation :'Search' },
        //monetization-on,where-to-vote,wrong-location
      ]);
    return (
        <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <TouchableOpacity style={styles.itemView} onPress={() => navigation.navigate(item.navigation)}>
              <MaterialIcons name={item.icon} size={item.size} color='black' />
              <Text style={styles.itemName}>{item.name}{item.naviagtion}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
    )
}
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
    },
    itemContainer: {
      borderRadius: 10,
      padding: 10,
      height: 100,
      opacity:.8,
      backgroundColor: colors.defaultYellow
    },
    itemView:{
      alignItems:'center',
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontFamily:FONT_FAMILY,
      textAlign:'center'
    },

  });