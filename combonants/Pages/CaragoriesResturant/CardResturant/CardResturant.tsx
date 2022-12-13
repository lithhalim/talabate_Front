import React from 'react';
import {View,Pressable,Image} from "react-native";
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 



function CardResturant({dataUse}:any) {
  const {categories,images,restaurantName,restaurantId}=dataUse
  return (
    <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",marginBottom:15}}>
        <Pressable style={{display:"flex",flexDirection:"row-reverse",elevation:15,shadowColor:"black",shadowOpacity:2}}>
            <Image source={{uri:images}} style={{width:75,height:75,borderRadius:15,marginLeft:10}}/>
            <View>
                <Text_Item Stylesh={StyleText.medium} textUse={restaurantName} AddStyle={{fontSize:17}}/>
                <Text_Item Stylesh={StyleText.sosmall} textUse={categories} />
                <View style={{display:"flex",flexDirection:"row-reverse",alignItems:"center",marginTop:5}}>
                    <AntDesign name="star" size={18} color="orange" style={{marginLeft:5}}/>
                    <Text_Item Stylesh={StyleText.small} textUse="4.8" />
                </View>
            </View>
        </Pressable>
        <AntDesign name="hearto" size={18} color="black" />
    </View>
  )
}

export default CardResturant