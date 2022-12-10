import React ,{memo,useState} from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {StyleText,Text_Item} from './Text_Combonants';



function IncreaseDecrease() {
    const [NumberItem,setNumberItem]=useState<any>(1);

    const IncreseNumber=()=>{
        let value=NumberItem
        setNumberItem(value=value+=1)
    }

    const DecreaseNumber=()=>{
        let value=NumberItem
        setNumberItem(value=value-=1)

    }


  return (
    <View style={{width:110,display:"flex",flexDirection:"row",justifyContent:"space-between",
    padding:5,borderRadius:10,borderColor:"rgb(255, 165, 0)",borderWidth:2}}>
        <TouchableOpacity onPress={IncreseNumber}>
            <AntDesign name="plus"  color="rgb(255, 165, 0)" style={{fontWeight:"bold",fontSize:24}} />
        </TouchableOpacity>
        <Text_Item Stylesh={StyleText.medium} textUse={NumberItem}/>
        <TouchableOpacity onPress={DecreaseNumber}>
            <AntDesign name="minus" color="rgb(255, 165, 0)" style={{fontWeight:"bold",fontSize:24}}/>
        </TouchableOpacity>
    </View>
  )
}

export default memo(IncreaseDecrease)