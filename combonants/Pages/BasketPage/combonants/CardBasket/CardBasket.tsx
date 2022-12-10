import React from 'react';
import {View,Image} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 


function CardBasket() {
  return (
    <View style={{padding:15,display:"flex"}}>
        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center"}}>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"}} style={{width:70,height:70,borderRadius:10}}/>
            <View>
                <Text_Item Stylesh={StyleText.large} textUse="Spagitti " AddStyle={{textAlign:"center",fontWeight:"normal",padding:5,fontSize:18}}/>
                <Text_Item Stylesh={StyleText.sosmall} textUse="meduime " AddStyle={{textAlign:"center"}}/>
            </View>
        </View>
        <View style={{display:"flex",flexDirection:"row-reverse",maxWidth:"70%",justifyContent: "space-between",alignItems:"center"}}>
            <View style={{display:"flex",flexDirection:"row",width:80,justifyContent:"space-between",alignItems:"center"}}>
                <AntDesign name="minus" size={20} color="orange" />
                <Text_Item Stylesh={StyleText.small} textUse="8"/>
                <AntDesign name="plus" size={20} color="orange" />
            </View>
            <Text_Item Stylesh={StyleText.small} textUse="4.51 JOD "/>
        </View>
    </View>
  )
}

export default CardBasket