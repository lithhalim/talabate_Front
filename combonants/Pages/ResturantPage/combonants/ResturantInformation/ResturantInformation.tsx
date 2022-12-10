import React, { useState } from 'react';
import {View,TextInput} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import ImageResturant from './combonants/ImageResturant';
import NameDiscription from './combonants/Name&Discription';
import IconsResturant from './combonants/IconsResturant';
import {Styles} from "./style/style";


function InformationResturant() {
    const [text,onChangeText]=useState("");


  return (
    <View style={{backgroundColor:"white"}}>

        <ImageResturant/>
        <NameDiscription/>
        <IconsResturant/>

        <View style={Styles.containerSearch}>
            <AntDesign name="search1" size={20} color="black"
             style={{padding:5}} />
            <TextInput placeholder='Serch In Menu'       
             onChangeText={onChangeText} value={text}/>
        </View>
      
    </View>
  )
}

export default InformationResturant

