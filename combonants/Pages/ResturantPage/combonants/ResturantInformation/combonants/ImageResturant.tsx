import React from 'react';
import {Image,View} from "react-native";
import Back_Combonants from "../../../../../Custom_Combonants/GoBackCombonants"



function ImageResturant() {

  return (
    <View style={{position:"relative"}}>
        <Image source={{uri:"https://static.toiimg.com/photo/msid-87930581/87930581.jpg"}} 
              style={{height:250,width:"100%"}}/>
        <Back_Combonants color='white' />
    </View>
)
}

export default ImageResturant
