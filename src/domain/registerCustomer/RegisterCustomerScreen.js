import React,{useState} from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import Icon from 'react-native-vector-icons/FontAwesome'
import {launchCamera} from 'react-native-image-picker';
import { RadioButton, Checkbox} from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDown from '../../common/components/DropDown';
import InputText from '../../common/components/InputText';

export default function RegisterCustomer() {

  const [response,setResponse] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors,setErrors] = useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const [state,setState] = useState({
    id_type:'' , id_photo:null , national_id:'' , data_prvdr_code:'' , partner_custid:'' , biz_name:'', biz_addr_prop_type:'' , ownership:'' , photo_biz_lic:null , photo_shop:null , business_distance:'' , first_name:'' , last_name:'' , gender:'' , dob:'Select Date' , photo_selfie:null , photo_pps:null , mob_num:'' , whatsapp:'' , region:'' , district:'' , country:'' , location:'' , sub_country:'' , parish:'' ,village:'' , landmark:'' , gps:''
  })

  const onChangeText = (key, val) => {
    let updated,lnameUpdated;
    if(key == 'isSelected' || (key == 'fname' && state.isSelected)){
      if((key == 'fname' && state.isSelected)){
        lnameUpdated = val;
      }else{
        lnameUpdated = state.fname;
      }
      updated = {
        ...state,
        lname:lnameUpdated,
        [key]:val
      }

    }else{
      updated = {
        ...state,
        [key]:val
      }
    }

    setstate(updated)

  }

  const onChange = (key,val) => {
    setState({
      ...state,
      [key] : val
    })
  }

  const handleChoosePhoto =  (type) => {
    let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    launchCamera(options,response => {

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const uri = response.assets[0].uri
          onChange(type , uri)
          setResponse(response)
        }
      });
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const stringDate = date.toDateString();
    const newDate = stringDate.split(" ");
    const dob = newDate[2] + "/" + newDate[1] + "/" + newDate[3];
    onChange('dob' , dob)
    hideDatePicker();
  };

  const progressStepsStyle = {

    disabledStepIconColor:'#a9a9a9',
    progressBarColor:'#a9a9a9',
    labelColor:'#000',
    activeLabelColor: '#000',
    completedLabelColor:'#000',
    activeStepNumColor: '#fff',
    activeStepIconBorderColor: '#2570e9',
    activeStepIconColor: '#2570e9',
    completedStepIconColor: '#d6352e',
    completedProgressBarColor: '#d6352e',
    completedCheckColor: '#fff',
  };

  const onPresscheck = () => {

  }

  const onSubmitSteps = () => {  }

  const identityValidation = () => {}


return (
  <View style={styles.container}>
    <ProgressSteps {...progressStepsStyle} >
      <ProgressStep
        label="IDs"
        scrollViewProps={styles.contentContainer}
        nextBtnStyle={styles.nxtbtnstyle}
        nextBtnTextStyle={styles.buttonTextStyle}
        errors ={ errors}
        onNext = {identityValidation}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Identity Info</Text>
          <View style={styles.full}>
            <DropDown type = 'visit_purpose'/>
          </View>
          <View style={styles.rowAlign}>
            <Text style={styles.text}>ID Proof Photo</Text>
            <Icon style={{marginLeft:'38%'}} name="camera" size={25} onPress={() => handleChoosePhoto('id_photo')}></Icon>
            <Image style={styles.previewImage} source={{ uri : state.id_photo }}/>
          </View>
          <View style={styles.full}>
            <InputText placeholder="Enter Id Number" />
          </View>
          <View style={styles.full}>
            <DropDown type = 'visit_purpose'/>
          </View>
          <View style={styles.full}>
            <InputText placeholder="Enter Id Number" />
          </View>
        </View>
      </ProgressStep>


      <ProgressStep
        label="Biz Info"
        previousBtnText="Back"
        scrollViewProps={styles.contentContainer}
        nextBtnStyle={styles.nxtbtnstyle}
        previousBtnStyle={styles.prevbtnstyle}
        nextBtnTextStyle={styles.buttonTextStyle}
        previousBtnTextStyle={styles.buttonTextStyle}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Biz Info</Text>
          <View style={styles.full}>
            <InputText placeholder="Enter Business Name" />
          </View>
          <View style={styles.full}>
            <DropDown type = 'visit_purpose'/>
          </View>
          <RadioButton.Group   onValueChange={val => onChange('ownership',val)} value={state.ownership}>
            <Text style={styles.text}>Establishment Ownership</Text>
            <View style={styles.rowAlign}>
              <Text>Rented</Text>
              <RadioButton value="rented" />
              <Text>Owned</Text>
              <RadioButton value="owned" />
            </View>
          </RadioButton.Group>
          <View style={styles.rowAlign}>
            <Text style={{fontSize:16,marginRight:60}}>Business Licence Photo</Text>
            <Icon   name="camera" size={25} onPress={() => handleChoosePhoto('photo_biz_lic')}></Icon>
            <Image style={styles.previewImage} source={{ uri : state.photo_biz_lic }}/>
          </View>
          <View style={styles.rowAlign}>
            <Text style={{fontSize:16,marginRight:15}}>Business Establishment Photo</Text>
            <Icon  name="camera" size={25} onPress={() => handleChoosePhoto('photo_shop')}></Icon>
            <Image style={styles.previewImage} source={{ uri : state.photo_shop }}/>
          </View>
          <View style={styles.full}>
            <DropDown type = 'visit_purpose'/>
          </View>
        </View>
      </ProgressStep>

      <ProgressStep
        label="Personal"
        previousBtnText="Back"
        scrollViewProps={styles.contentContainer}
        nextBtnStyle={styles.nxtbtnstyle}
        previousBtnStyle={styles.prevbtnstyle}
        nextBtnTextStyle={styles.buttonTextStyle}
        previousBtnTextStyle={styles.buttonTextStyle}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Identity Info</Text>
          <View style={styles.full}>
            <InputText placeholder="Enter First Name" />
          </View>
          <View style={styles.full}>
            <InputText placeholder="Enter Last Name" />
          </View>
          <RadioButton.Group   onValueChange={val => onChange('gender',val)} value={state.gender}>
            <View style={styles.rowAlign}>
              <Text style={styles.spacetext}>Gender</Text>
              <Text>Male</Text>
              <RadioButton value="male" />
              <Text>Female</Text>
              <RadioButton value="female" />
            </View>
          </RadioButton.Group>
          <View style={styles.rowAlign}>
            <Text style={styles.spacetext}>DOB</Text>
            <View style={styles.datepick}>
              <Text style={{marginRight:20}}>{state.dob}</Text>
              <Icon name="calendar-o" size={25} onPress={showDatePicker}></Icon>
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              />
            </View>
          </View>
          <View style={styles.rowAlign}>
            <Text style={{fontSize:16,marginRight:'40%'}}>Selfie Photo</Text>
            <Icon name="camera" size={25} onPress={() => handleChoosePhoto('photo_selfie')}></Icon>
            <Image style={styles.previewImage} source={{ uri : state.photo_selfie }}/>
          </View>
          <View style={styles.rowAlign}>
            <Text style={{fontSize:16,marginRight:'33%'}}>Passport Photo</Text>
            <Icon  name="camera" size={25} onPress={() => handleChoosePhoto('photo_pps')}></Icon>
            <Image style={styles.previewImage} source={{ uri : state.photo_pps }}/>
          </View>
        </View>
      </ProgressStep>

      <ProgressStep
        label="Contact"
        previousBtnText="Back"
        scrollViewProps={styles.contentContainer}
        nextBtnStyle={styles.nxtbtnstyle}
        previousBtnStyle={styles.prevbtnstyle}
        nextBtnTextStyle={styles.buttonTextStyle}
        previousBtnTextStyle={styles.buttonTextStyle}
      >
        <View  style={styles.content}>
          <Text style={styles.title}>Contact Info</Text>
          <View style={styles.full}>
            <InputText placeholder="Enter Mobile Number" />
          </View>
          <View style={styles.full}>
            <InputText placeholder="Enter Messenger Number" />
          </View>
          <View style={styles.rowAlign}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              />
            <Text style={styles.text}>Same as Mobile Number</Text>
          </View>
        </View>
      </ProgressStep>

      <ProgressStep
        label="Address"
        previousBtnText="Back"
        onSubmit={onSubmitSteps}
        scrollViewProps={styles.contentContainer}
        nextBtnStyle={styles.nxtbtnstyle}
        previousBtnStyle={styles.prevbtnstyle}
        nextBtnTextStyle={styles.buttonTextStyle}
        previousBtnTextStyle={styles.buttonTextStyle}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Address Info</Text>
          <View style={styles.rowAlign}>
            <View style={styles.half}>
              <DropDown type = 'visit_purpose'/>
            </View>
            <View style={styles.half}>
              <DropDown type = 'visit_purpose'/>
            </View>
          </View>
          <View style={styles.rowAlign}>
            <View style={styles.half}>
              <DropDown type = 'visit_purpose'/>
            </View>
            <View style={styles.half}>
              <DropDown type = 'visit_purpose'/>
            </View>
          </View>
          <View style={styles.rowAlign}>
            <View style={styles.half}>
              <InputText placeholder="SubCountry" />
            </View>
            <View style={styles.half}>
              <InputText placeholder="Parish" />
            </View>
          </View>
          <View style={styles.rowAlign}>
            <View style={styles.half}>
              <InputText placeholder="Village" />
            </View>
            <View style={styles.half}>
              <InputText placeholder="Landmark" />
            </View>
          </View>
          <View style={styles.rowAlign}>
            <Text style={styles.spacetext}>GPS Location</Text>
            <Icon  name="map-marker" size={30} onPress={() => alert('map')}></Icon>
          </View>
        </View>
      </ProgressStep>
    </ProgressSteps>
  </View>

);
}

const styles = StyleSheet.create({
  full: {
    width:'90%',
    borderBottomWidth: 1,
    borderBottomColor: "rgba(155,155,155,1)",
    marginBottom:20
  },
  half: {
    width:'40%',
    borderBottomWidth: 1,
    borderBottomColor: "rgba(155,155,155,1)",
    marginLeft:10
  },
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  contentContainer: {
    backgroundColor:'#e6e6e6'
  },
  content: {
    alignItems:'center'
  },
  title: {
    marginTop:20,
    fontSize:25
  },
  text:{
    fontSize:16,
  },
  previewImage: {
    width:30,
    height:25,
    marginLeft:10
  },
  prevbtnstyle: {
    backgroundColor:'#2296f3',
    paddingHorizontal:30,
    left:-60,
  },
  nxtbtnstyle: {
    backgroundColor:'#2296f3',
    paddingHorizontal:30,
    right:-60
  },
  buttonTextStyle: {
    color: '#fff',
  },
  rowAlign: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
    justifyContent:'center'
  },
  datepick: {
    borderWidth:1,
    borderRadius:5,
    flexDirection:'row',
    padding:6
  },
  spacetext: {
    marginRight:20,
    fontSize:16
  }
})
