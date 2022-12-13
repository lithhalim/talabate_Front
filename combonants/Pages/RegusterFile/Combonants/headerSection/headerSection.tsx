import React from 'react';
import {View} from "react-native";
import ImageFromAAssest from '../../../../Custom_Combonants/ImageFromAAssest';
import LogoImage from "../../Assest/LogoSection.png";
import {Style} from "./style/style";
import  { StyleText,Text_Item } from '../../../../Custom_Combonants/Text_Combonants';


function HeaderAuthntication({Type}:any) {
  return (
    <View>
        <ImageFromAAssest
        AddStyle={Style.containerImage} 
        data={LogoImage}/>
        <Text_Item Stylesh={StyleText.large} textUse={`${Type=="signin"?"Welcome Back":"Create New Account"}`}
            AddStyle={{color:"white",fontSize:20,maxWidth:"100%",textAlign:"center"}}/>
        <Text_Item Stylesh={StyleText.medium} textUse={`${Type=="signin"?"Sign in to get access to many of the current additional benefits Acceptet Now":"Be the new member of our extended family. Thank you for joining us in this episode"}`} 
            AddStyle={{color:"white",fontSize:15,maxWidth:"100%",textAlign:"center",marginBottom:15,padding:20}}/>
    </View>
  )
}

export default HeaderAuthntication