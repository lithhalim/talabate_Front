import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';

import {Style} from "../style/style";

function FavorateChoppping() {
  return (
    <View style={Style.containerFavorate}>
        <View>
            <Text_Item Stylesh={StyleText.medium} textUse='1' AddStyle={Style.textStyle}/>
            <Text_Item Stylesh={StyleText.medium} textUse='My Favorates' AddStyle={{color:"white"}}/>
        </View>
        <View>
            <Text_Item Stylesh={StyleText.medium} textUse='1' AddStyle={Style.textStyle}/>
            <Text_Item Stylesh={StyleText.medium} textUse='choppingCart' AddStyle={{color:"white"}}/>
        </View>
    </View>
)
}

export default FavorateChoppping
