import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';

import {Style} from "../style/style";
import { useSelector } from 'react-redux';

function FavorateChoppping() {
  const select=useSelector((state:any)=>state)

  return (
    <View style={Style.containerFavorate}>
        <View>
            <Text_Item Stylesh={StyleText.medium} textUse={select.addFavorate.value}
              AddStyle={Style.textStyle}/>
            <Text_Item Stylesh={StyleText.medium} textUse='My Favorates'
               AddStyle={{color:"white"}}/>
        </View>
        <View>
            <Text_Item Stylesh={StyleText.medium} textUse={select.addToCartSlice.value}
              AddStyle={Style.textStyle}/>
            <Text_Item Stylesh={StyleText.medium} textUse='Shoping Cart' 
              AddStyle={{color:"white"}}/>
        </View>
    </View>
)
}

export default FavorateChoppping
