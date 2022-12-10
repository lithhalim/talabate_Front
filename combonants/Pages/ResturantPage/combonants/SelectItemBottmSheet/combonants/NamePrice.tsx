import React from 'react'
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import {View} from "react-native";
import { Styless } from '../style/style';

function NamePrice() {
  return (
    <View style={Styless.containerName}>
        <Text_Item Stylesh={StyleText.large} textUse='McSpicey Fukll Food' />
        <Text_Item Stylesh={StyleText.large} textUse='210 $' AddStyle={{color:"orange"}}/>
    </View>      
  )
}

export default NamePrice
