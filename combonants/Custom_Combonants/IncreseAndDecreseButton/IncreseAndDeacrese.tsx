import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Pressable,View} from "react-native";
import { StyleText, Text_Item } from "../Text_Combonants" 
import { useDispatch } from 'react-redux';
import { decreasequantity, increasequantity } from "../../redux/AddToCard/addToCart";


interface Custom{
    datause:any,
    GetNumberItem:any,

}

function IncreseAndDeacrese({datause,GetNumberItem}:Custom) {
    const dispatch=useDispatch();



    const IncreseQuantity=()=>{
        dispatch(increasequantity(datause))        
    }

    const DecreseQuantity=()=>{
        if(GetNumberItem==0){return}
        dispatch(decreasequantity(datause))
    }



  return (
    <View style={{display:"flex",flexDirection:"row",width:100,justifyContent:"space-between",
        alignItems:"center",backgroundColor:"rgba(0,0,0,.03)",borderRadius:15,padding:2}}>
        <Pressable onPress={IncreseQuantity}>
            <MaterialCommunityIcons name="plus" size={24} color="orange" />
        </Pressable>
            <Text_Item Stylesh={StyleText.medium} textUse={GetNumberItem} AddStyle={{fontSize:15,marginBottom:3}}/>
        <Pressable onPress={DecreseQuantity}>
            <AntDesign name="minus" size={24} color="orange" />
        </Pressable>
    </View>

  )
}

export default memo(IncreseAndDeacrese) 