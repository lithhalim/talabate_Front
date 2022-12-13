import React from 'react';
import {View} from "react-native";
import Back_Combonants from "../../../../combonants/Custom_Combonants/GoBackCombonants"
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';

function HeaderCatagories() {
  return (
    <View style={{paddingTop:50,paddingBottom:30,borderBottomColor:"silver"}}>
        <Back_Combonants color='black' AddStyle={{top:50}}/>
        <Text_Item Stylesh={StyleText.medium} textUse="Welcome in Deleverto"/>
        <Text_Item Stylesh={StyleText.medium} textUse="Delever To Jordan" 
           AddStyle={{textAlign:"center",color:"orange",maxWidth:"100%",marginTop:3,marginRight:25}}/>
    </View>
  )
}

export default HeaderCatagories