import React from 'react';
import {View} from "react-native"
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Styless } from '../style/style';

function IconsSection() {
  return (
        <View style={Styless.containerIocns}>
            {Datause.map(({name,value,icons},i)=>(
                    <View style={Styless.SecandContaner} key={i}>
                        {icons}
                        <Text_Item Stylesh={StyleText.medium} textUse={value} AddStyle={Styless.TextStyle}/>
                    </View>
            ))}
        </View>      
  )
}

export default IconsSection;

let Datause=[
    {name:"star",value:"(255) 4.5",icons:<AntDesign name="star" size={20} color="orange" />},
    {name:"star",value:"20 min wait",icons:<Entypo name="back-in-time" size={20} color="blue" />},
    {name:"star",value:"free Delevery",icons:<MaterialIcons name="wallet-giftcard" size={20} color="orange" />},
]
