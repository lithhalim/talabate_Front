import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../../../../Custom_Combonants/Text_Combonants';

function InformationUpload() {
  return (
    <View>
        <Text_Item Stylesh={StyleText.large} textUse='You need Upload Your' AddStyle={{color:"white",marginTop:10,marginLeft:"auto",marginRight:"auto"}}/>
        <Text_Item Stylesh={StyleText.medium} textUse='Image You Select'  AddStyle={{color:"white",marginBottom:5,marginLeft:"auto",marginRight:"auto" ,fontSize:30}}/>
        <Text_Item Stylesh={StyleText.small} textUse='You can download images from more than one domain, either by passivating them from the computer, '  AddStyle={{color:"silver",maxWidth:400,marginBottom:100,textAlign:"center"}}/>
    </View>
  )
}

export default InformationUpload
