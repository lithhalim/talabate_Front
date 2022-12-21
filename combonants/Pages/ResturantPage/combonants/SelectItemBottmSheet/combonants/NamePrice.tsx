import React from 'react'
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import {View} from "react-native";
import { Styless } from '../style/style';

function NamePrice({datause}:any) {
  const {productname,price} =datause;
  return (
    <View style={Styless.containerName}>
        <Text_Item Stylesh={StyleText.large} 
          textUse={productname} />
        <Text_Item Stylesh={StyleText.large} 
          textUse={`${price} $`} 
          AddStyle={{color:"orange"}}/>
    </View>      
  )
}

export default NamePrice
