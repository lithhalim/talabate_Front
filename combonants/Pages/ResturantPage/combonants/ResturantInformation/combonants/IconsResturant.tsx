import React from 'react';
import {View,Text} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons';
import {Styles}from "../style/style"


function IconsResturant() {
  return (
    <View>
        <View style={Styles.StarContaier}>
            <AntDesign name="star" size={20} color="orange" />
            <Text_Item Stylesh={StyleText.medium} textUse='4.2 (455 Reviews)' 
            AddStyle={{marginRight:2,fontSize:12}}/>
        </View>


        <View style={Styles.deleveryIcon}>
            {DataUsing.map(({icons,name,value},i)=>(
                <View key={i} style={Styles.containerIconss}>
                    {icons}
                    <Text_Item Stylesh={StyleText.small} textUse={value} 
                    AddStyle={Styles.textIcons} />
                </View>
            ))}
        </View>

      
    </View>
  )
}

export default IconsResturant;


import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 


const DataUsing=[
    {name:"delevery",value:"Free Delivery",icons:<MaterialIcons name="delivery-dining" size={18} color="black" />},
    {name:"delevery",value:"30 Min",icons:<Entypo name="back-in-time" size={18} color="black" />},
    {name:"delevery",value:"Free Delivery",icons:<EvilIcons name="location" size={18} color="black" />},

]
