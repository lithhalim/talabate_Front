import React from 'react';
import {View,} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';

function HeaderBasket() {
  return (
    <View style={{marginTop:40}}>
        <Text_Item Stylesh={StyleText.large} textUse="Shopping cart"/>
        <Text_Item Stylesh={StyleText.medium} textUse="Happy Story In Jordan Section " 
        AddStyle={{maxWidth:"100%",textAlign:"center",marginBottom:15}}/>
    </View>
  )
}

export default HeaderBasket