import React from 'react';
import {View} from "react-native";
import Back_Combonants from "../../../../combonants/Custom_Combonants/GoBackCombonants"
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';

import { Style } from './style/style';
function HeaderCatagories() {
  return (
    <View style={Style.container}>
        <Back_Combonants color='black' AddStyle={{top:50}}/>
        <Text_Item Stylesh={StyleText.medium} textUse="Welcome in Deleverto"/>
        <Text_Item Stylesh={StyleText.medium} textUse="Delever To Jordan" 
           AddStyle={Style.firstText}/>
    </View>
  )
}

export default HeaderCatagories