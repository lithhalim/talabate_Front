import React from 'react';
import {View,TouchableOpacity} from "react-native";
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';

import {DataUsing} from "./dataUsingFiltration"

function FilterationSection() {
  return (
    <View style={{marginBottom:50,display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",paddingLeft:30,paddingRight:30}}>
        {DataUsing.map(({name,icons},i)=>(
            <TouchableOpacity key={i} style={{display:"flex",flexDirection:"row",backgroundColor:"rgba(0,0,0,.05)",padding:8,borderRadius:10}}>
               <Text_Item Stylesh={StyleText.medium} textUse={name} AddStyle={{marginLeft:5,marginRight:5}}/>
               {icons}
            </TouchableOpacity>
        ))}
    </View>
  )
}

export default FilterationSection