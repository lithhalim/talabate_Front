import React from 'react';
import {View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';
import { Style } from './style/style';


function Notification() {
  return (
    <View style={Style.container}>
      <View style={Style.firstView}>
            <MaterialCommunityIcons name="comment-minus-outline"
              style={Style.firstIcon} />
            <Text_Item Stylesh={StyleText.medium} 
              textUse="No Notification"/>
      </View>
            <Text_Item Stylesh={StyleText.large} 
              textUse="Any comments, please let us know?" 
              AddStyle={Style.firstText}/>

    </View>
  )
}

export default Notification