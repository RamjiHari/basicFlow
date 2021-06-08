import React , {useState} from 'react'
import Master from '../utils/Master';
import MultiSelect from 'react-native-multiple-select';
import { colors } from '../utils/Colors';

export default function MultiSelector(props) {


    const items=Master.filter(e=>e.data_key==props.type)
    return (
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={props.handleText}
          selectedItems={props.selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="data_code"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor={colors.secondaryColor}
          submitButtonText="Submit"
        />
    )
}
