import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDown from '../../common/components/DropDown';
import InputText from '../../common/components/InputText';
// import SearchList from './SearchData';
const data = [
  {
    first_name: 'Flow',
    last_name: 'Glopal',
    biz_name: 'Flow Glop',
    cust_id: '123456',
    data_prvdr_cust_id: '678901',
    location: '234567',
    gender: 'Other',
    photo_selfie: '',
    photo_pps:
      'https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg',
    photo_biz_lic:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg',
    photo_shop:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg',
    photo_national_id: '785634',
    mob_num: '2345609876',
    whatsapp: '0987612345',
  },
  {
    first_name: 'Flow',
    last_name: 'Glopal',
    biz_name: 'Flow Glop',
    cust_id: '123456',
    data_prvdr_cust_id: '678901',
    location: '234567',
    gender: 'Other',
    photo_selfie: '',
    photo_pps:
      'https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg',
    photo_biz_lic:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg',
    photo_shop:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg',
    photo_national_id: '785634',
    mob_num: '2345609876',
    whatsapp: '0987612345',
  },
  {
    first_name: 'Flow',
    last_name: 'Glopal',
    biz_name: 'Flow Glop',
    cust_id: '123456',
    data_prvdr_cust_id: '678901',
    location: '234567',
    gender: 'Other',
    photo_selfie: '',
    photo_pps:
      'https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg',
    photo_biz_lic:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg',
    photo_shop:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg',
    photo_national_id: '785634',
    mob_num: '2345609876',
    whatsapp: '0987612345',
  },
  {
    first_name: 'Flow',
    last_name: 'Glopal',
    biz_name: 'Flow Glop',
    cust_id: '123456',
    data_prvdr_cust_id: '678901',
    location: '234567',
    gender: 'Other',
    photo_selfie: '',
    photo_pps:
      'https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg',
    photo_biz_lic:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg',
    photo_shop:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg',
    photo_national_id: '785634',
    mob_num: '2345609876',
    whatsapp: '0987612345',
  },
  {
    first_name: 'Flow',
    last_name: 'Glopal',
    biz_name: 'Flow Glop',
    cust_id: '123456',
    data_prvdr_cust_id: '678901',
    location: '234567',
    gender: 'Other',
    photo_selfie: '',
    photo_pps:
      'https://www.flowglobal.net/content/media/Flow_Customer_Story_Joel_1.jpeg',
    photo_biz_lic:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/cash_flow.jpg',
    photo_shop:
      'https://www.veltech.edu.in/admission_enquiry_2019/img/id_proof.jpeg',
    photo_national_id: '785634',
    mob_num: '2345609876',
    whatsapp: '0987612345',
  },
];
export default function CustomerScreen({navigation}) {
  const SearchList = () => {
    const renderItem = ({item, index}) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.searchResult}>
            <View>
              <Image
                style={styles.custPic}
                source={require('../../common/assets/images/user1.jpeg')}
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
              <Text style={styles.listText}>{item.first_name}</Text>
              <Text style={styles.listText}>{item.biz_name}</Text>
              <TouchableOpacity style={styles.icons}>
                <Icon
                  size={15}
                  color="black"
                  name="user-alt"
                  onPress={() => navigation.navigate('Profile', {item})}
                  style={{marginTop: 2}}
                />
                <MaterialIcons
                  name="add-location-alt"
                  size={18}
                  color="black"
                  onPress={() => alert('click')}
                />
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
              <Text style={styles.listText}>{item.cust_id}</Text>
              <Text style={styles.listText}>{item.data_prvdr_cust_id}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        data={data}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchHeading}>
          <Text style={styles.searchHeadingText}>
            Search and Select Customer
          </Text>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={styles.searchField}>
            <View style={styles.input}>
              <DropDown type="visit_purpose" />
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
              <DropDown type="visit_purpose" />
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
            <InputText placeholder="Name or Mobile or Partner" />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => alert('click')}
            underlayColor="#fff">
            <Text style={styles.submitText}>Search</Text>
          </TouchableHighlight>
        </View>
      </View>
      <SearchList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchHeading: {
    padding: 15,
  },
  searchHeadingText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchFieldContainer: {
    flexDirection: 'row',
  },
  searchField: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'rgba(159, 159, 159, 1)',
    width: '70%',
    marginLeft: 30,
  },
  searchField3: {
    justifyContent: 'center',
    marginTop: 15,
  },
  input3: {
    borderBottomWidth: 1,
    borderColor: 'rgba(159, 159, 159, 1)',
    width: '85%',
    marginLeft: 30,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  submit: {
    width: '30%',
    padding: 6,
    backgroundColor: 'rgba(252, 183, 27, 1)',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  searchResult: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    padding: 5,
  },
  custPic: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  listText: {
    fontSize: 15,
    padding: 1,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
// })
