import React from 'react';
import {View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';


function Notification() {
  return (
    <View>
        <View>
            <MaterialCommunityIcons name="comment-minus-outline" size={24} color="black" />
            <Text_Item Stylesh={StyleText.medium} textUse="No Notification"/>
        </View>
    </View>
  )
}

export default Notification