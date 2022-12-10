import React, { useContext } from 'react';
import {View,Image} from "react-native";
import { Authntication_Create_Context } from '../../../../../contextApi/Authntication_Context';
import  { StyleText,Text_Item } from '../../../../../Custom_Combonants/Text_Combonants';
import {Style} from "../style/style";

function HeaderCombonant({datause}:any) {
  const {image,fullName}=datause
  


  return (
    <>
        <View style={Style.containerHeader}>
            <Image source={{uri:image}}
            style={Style.ImageHeader}/>
            <View style={{marginRight:10}}>
            <Text_Item Stylesh={StyleText.large} textUse={fullName} AddStyle={{color:"white"}}/>
            <Text_Item Stylesh={StyleText.medium} textUse='Welcome New User' AddStyle={{color:"white"}}/>
            </View>
        </View>
    </>
    )
}

export default HeaderCombonant
