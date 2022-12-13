import React from 'react';
import {View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';


function Notification() {
  return (
    <View style={{backgroundColor:"white",marginTop:15,display:"flex",flexDirection:"column",alignItems:"flex-end",padding:15}}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",width:120,justifyContent:"space-between"}}>
            <MaterialCommunityIcons name="comment-minus-outline"
              size={20} color="black" style={{marginTop:7}} />
            <Text_Item Stylesh={StyleText.medium} 
              textUse="No Notification"/>
      </View>
            <Text_Item Stylesh={StyleText.large} 
              textUse="Any comments, please let us know?" AddStyle={{fontSize:13,fontWeight:"normal"}}/>

    </View>
  )
}

export default Notification