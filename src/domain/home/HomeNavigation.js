import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FONT_FAMILY } from '../../common/utils/Constants';
import { colors } from '../../common/utils/Colors';

export default function HomeNavigation({navigation}) {
    console.log(navigation,"naviagte")
      const [items, setItems] = React.useState([
       { name: 'Overdue    FAs', icon: 'warning', size: 33 ,navigtion :'Profile'},
        { name: 'Due Today  FAs', icon: 'lock-clock', size: 36 ,navigtion :'Profile'},
        { name: 'Schedule   Visit', icon: 'add-location', size: 35,navigtion :'Profile' },
       { name: 'Customer  Agreement', icon: 'file-copy', size: 33,navigtion :'Profile' },
        { name: 'Register Customer', icon: 'person-add', size: 33,navigtion :'Profile' },
        { name: 'Search Customer', icon: 'person-search', size: 33,navigtion :'Profile' },
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
          <TouchableOpacity style={styles.itemView}>
              <MaterialIcons name={item.icon} size={item.size} color='black' />
              <Text style={styles.itemName}>{item.name}</Text>
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