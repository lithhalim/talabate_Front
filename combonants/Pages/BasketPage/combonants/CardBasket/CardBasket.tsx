import React from 'react';
import {View,Image} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import IncreseAndDeacrese from '../../../../Custom_Combonants/IncreseAndDecreseButton/IncreseAndDeacrese';


function CardBasket({data}:any) {
    const {productName,selectItemQuentuty,Price,itemId,images}=data;

    let TotalPrice=Number(selectItemQuentuty)*Number(Price)

  return (
    <View style={{padding:15,display:"flex",elevation:10,shadowOpacity: 0.25,margin:10,marginTop:15,
     shadowColor: "black",backgroundColor:"white",marginBottom: -5}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Image source={{uri:images}} 
               style={{width:65,height:65,borderRadius:10}}/>
            <View>
                <Text_Item Stylesh={StyleText.large} textUse={productName}
                AddStyle={{fontWeight:"normal",paddingBottom:5}}/>
                <Text_Item Stylesh={StyleText.sosmall} textUse="meduime " AddStyle={{fontSize:12}}  />
            </View>
        </View>
        <View style={{display:"flex",flexDirection:"row",maxWidth:"90%",marginLeft:"auto"}}>
            <IncreseAndDeacrese GetNumberItem={selectItemQuentuty} datause={data}/>
            <Text_Item Stylesh={StyleText.small} textUse={`${TotalPrice} JOD`} AddStyle={{width:60,marginLeft:60,fontWeight:"bold"}}/>
        </View>
    </View>
  )
}

export default CardBasket