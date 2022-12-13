import React,{memo} from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';
import { Ionicons } from '@expo/vector-icons'; 
import { Stylee } from './style/style';
import { MotiView, MotiText } from "moti"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';



function HeaderHome({Scrolling}:any) {
  let data=Scrolling?"white":"#ffebe6";
  const SelectData=useSelector((state:any)=>(state.addToCartSlice.value));
  const Navigation=useNavigation()

  const GoToBasket=()=>{
    Navigation.navigate("Basket")
  }

  return (
    <MotiView style={Stylee.containerHeader}
     animate={{backgroundColor:data}} from={{backgroundColor:data}}>
      {SelectData!==0?
        <TouchableOpacity style={Stylee.ContainerIcon} onPress={GoToBasket}>
            <Ionicons name="basket" size={30} color="black" />
            <Text style={Stylee.NumberDown}>{SelectData}</Text>
        </TouchableOpacity>
        :<View></View>}
        <View>
            <Text_Item Stylesh={StyleText.sosmall} textUse='Delivery only here'/>
            <Text_Item Stylesh={StyleText.small}   textUse="Abdel Halim Street, real estate"/>
        </View>
    </MotiView>
  )
}

export default memo(HeaderHome) 
