import React from 'react';
import {View} from "react-native"
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { Styless } from '../style/style';
import {Datause} from "./datause/datause";

function IconsSection() {
  return (
        <View style={Styless.containerIocns}>
            {Datause.map(({name,value,icons},i)=>(
                    <View style={Styless.SecandContaner} key={i}>
                        {icons}
                        <Text_Item Stylesh={StyleText.medium} 
                          textUse={value} AddStyle={Styless.TextStyle}/>
                    </View>
            ))}
        </View>      
  )
}

export default IconsSection;

