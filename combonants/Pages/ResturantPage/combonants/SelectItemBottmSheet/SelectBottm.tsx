import React from 'react';
import {View,Image} from "react-native";
import {StyleText,Text_Item} from '../../../../Custom_Combonants/Text_Combonants';
import IconsSection from './combonants/IconsSection';
import NamePrice from "./combonants/NamePrice";
import BottonSectio from "./combonants/BottonSectio";






function SelectBottm() {

  return (
    <View style={{zIndex:10,elevation:10}}>
        <Image source={{uri:"https://static.toiimg.com/photo/msid-87930581/87930581.jpg"}} 
            style={{height:220,width:"100%"}}/>
        <NamePrice/>
        <IconsSection/>

        <View style={{padding:15}}>
            <Text_Item Stylesh={StyleText.medium} textUse='Description' AddStyle={{marginLeft:"auto"}}/>
            <Text_Item Stylesh={StyleText.sosmall} textUse='The best items you can imagine are now available
             with us. Order what you like The best items you can imagine are now 
             available with us. Order what you like' AddStyle={{marginLeft:"auto",maxWidth:"95%"}}/>
        </View>

        <BottonSectio/>      
    </View>
  )
}

export default SelectBottm


