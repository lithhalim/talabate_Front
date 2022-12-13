import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Styles } from '../style/style';


function NameDiscription({resturantName,catagories}:any) {
  return (
    <View style={Styles.containerName}>
        <View >
            <Text_Item Stylesh={StyleText.large} textUse={resturantName} 
             AddStyle={{marginLeft:"auto"}}/>
            <Text_Item Stylesh={StyleText.medium} textUse={catagories}
             AddStyle={Styles.discription}/>
        </View>
        <AntDesign name="sharealt" size={24} color="black" />
    </View>
)
}

export default NameDiscription
