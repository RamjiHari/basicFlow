import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONT_FAMILY} from '../../common/utils/FontFamily';

export default function Profile(props) {
  const customerDetails = props.route.params.item;
  console.log('profileDetails', customerDetails);

  const customerDetailsImg = {
    one: customerDetails.photo_shop,
    two: customerDetails.photo_pps,
    three: customerDetails.photo_biz_lic,
  };

  const customerIdImg = Object.values(customerDetailsImg);

  const CustomerData = () => {
    const dialCall = number => {
      let phoneNumber = '';
      if (Platform.OS === 'android') {
        phoneNumber = `tel:${number}`;
      } else {
        phoneNumber = `telprompt:${number}`;
      }
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
              <Text style={styles.contentTextValue}>
                {customerDetails.cust_id}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.data_prvdr_cust_id}
              </Text>
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
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
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
              <Text style={styles.contentTextValue}>
                {customerDetails.first_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.last_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.gender}
              </Text>
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
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.contentTextValue}>
                  {customerDetails.mob_num}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dialCall(customerDetails.mob_num);
                  }}>
                  <Icon
                    name="phone"
                    size={17}
                    color="black"
                    style={{marginLeft: 5}}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.contentTextValue}>
                {customerDetails.whatsapp}
              </Text>
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
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.location}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
              <Text style={styles.contentTextValue}>
                {customerDetails.biz_name}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
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
          imageLoadingColor="#2196F3"
        />
      </View>
      <CustomerData />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    backgroundColor: 'rgba(252, 194, 64, 2)',
    height: '40%',
  },
  paginationBox: {
    bottom: '-10%',
    paddingVertical: 0,
  },
  dotStyle: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  imageComponent: {
    borderRadius: 15,
    marginTop: 15,
    height: 200,
    width: '90%',
  },
  tittle: {
    fontSize: 20,
    marginLeft: 5,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  contentTextKey: {
    marginLeft: '20%',
    fontFamily: FONT_FAMILY,
  },
  contentTextValue: {
    marginLeft: '15%',
    fontFamily: FONT_FAMILY,
  },
  colon: {
    fontWeight: 'bold',
  },
});
