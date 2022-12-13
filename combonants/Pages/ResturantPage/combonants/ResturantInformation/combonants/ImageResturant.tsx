import React from 'react';
import {Image,View} from "react-native";
import Back_Combonants from "../../../../../Custom_Combonants/GoBackCombonants"



function ImageResturant({images}:any) {

  return (
    <View style={{position:"relative"}}>
        <Image source={{uri:images}} 
              style={{height:250,width:"100%"}}/>
        <Back_Combonants color='white' />
    </View>
)
}

export default ImageResturant
