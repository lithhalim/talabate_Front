import React from 'react';
import {View,Image,Text,TouchableOpacity} from "react-native";
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';
import { useNavigation } from '@react-navigation/native';


import {DataUsing1} from "./DataUsing/DataUsing"
import { SStyless } from './Style/style';


function Catagories_Home() {

  const Navigation=useNavigation();

  const GoToCatagories=(Datause:any)=>{
    Navigation.navigate("search",{WHEREDATA:`categories IN ('${Datause}')`})
  }



  return (
    <View style={SStyless.containerAll}>
        <Text_Item Stylesh={StyleText.medium} textUse='categories' 
        AddStyle={SStyless.textHeader}/>
          <View style={SStyless.CardSection}>
            {DataUsing1.map((data:any,i:number)=>(
                <TouchableOpacity key={i} style={SStyless.containerCard} onPress={()=>{GoToCatagories(data.type)}}>
                  <Image source={{uri:Image.resolveAssetSource(data.images).uri}} 
                  style={SStyless.mainImage}/>
                </TouchableOpacity>
            ))}
          </View>
    </View>
  )
}

export default Catagories_Home