import React,{memo} from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';
import { Ionicons } from '@expo/vector-icons'; 
import { Stylee } from './style/style';
import { MotiView, MotiText } from "moti"



function HeaderHome({Scrolling}:any) {
  let data=Scrolling?"white":"#ffebe6"

  return (
    <MotiView style={Stylee.containerHeader}
     animate={{backgroundColor:data}} from={{backgroundColor:data}}>
        <TouchableOpacity style={Stylee.ContainerIcon}>
            <Ionicons name="basket" size={30} color="black" />
            <Text style={Stylee.NumberDown}>1</Text>
        </TouchableOpacity>
        <View>
            <Text_Item Stylesh={StyleText.sosmall} textUse='Delivery only here'/>
            <Text_Item Stylesh={StyleText.small}   textUse="Abdel Halim Street, real estate"/>
        </View>
    </MotiView>
  )
}

export default memo(HeaderHome) 
