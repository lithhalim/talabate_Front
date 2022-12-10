import React from 'react';
import {View,Image,TouchableOpacity} from "react-native";
import { StyleText,Text_Item } from '../../../../Custom_Combonants/Text_Combonants';
import {Facebook,Github,Google} from "./DataUsing";
import {Style} from "./style/style";

const DataUse=[Facebook,Github,Google];




function AuthinticationOther() {
    


  return (
    <View >
        <Text_Item Stylesh={StyleText.small} textUse='Or Login With' 
         AddStyle={Style.TextStyle}/>
        <View style={Style.container}>
            {
                DataUse.map((data,i)=>(
                    <TouchableOpacity  key={i}  >
                        <Image source={{uri:Image.resolveAssetSource(data).uri}}
                         style={Style.ImageStyle} />
                    </TouchableOpacity>
                ))
            }
        </View>
    </View>
  )
}

export default AuthinticationOther;


