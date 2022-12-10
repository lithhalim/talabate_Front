import React from 'react';
import {View,Text,TouchableOpacity} from "react-native" ;
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';
import {DataUsing} from "../6-FooterHomepage/DataUsing/DataUsing";

import { Stylee } from './style/style';

function FooterHomepage() {
  return (
    <View style={Stylee.containerStyle}>
        {DataUsing.map((data,i)=>(
            <TouchableOpacity key={i} style={Stylee.Icon}>
                <Text>
                    {data.Icons}
                </Text>
                <Text_Item Stylesh={StyleText.sosmall} textUse={data.name} AddStyle={{fontWeight:"bold"}} />
            </TouchableOpacity>
        ))}

    </View>
  )
}

export default FooterHomepage