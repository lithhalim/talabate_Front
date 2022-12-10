import React from 'react';
import {View,Image,Text,TouchableOpacity} from "react-native";
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';


import {DataUsing1} from "./DataUsing/DataUsing"
import { SStyless } from './Style/style';
function Catagories_Home() {
  return (
    <View style={SStyless.containerAll}>
      <Text_Item Stylesh={StyleText.medium} textUse='Good evening' 
      AddStyle={SStyless.textHeader}/>
      <View style={SStyless.CardSection}>
        {DataUsing1.map((data:any,i:number)=>(
          <TouchableOpacity key={i} style={SStyless.containerCard}>
            <Text_Item Stylesh={StyleText.medium} textUse={data.name} 
            AddStyle={SStyless.NameCard}/>
            <Image source={{uri:Image.resolveAssetSource(data.images).uri}} 
            style={SStyless.mainImage}/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Catagories_Home