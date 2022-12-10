import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Styles } from '../style/style';


function NameDiscription() {
  return (
    <View style={Styles.containerName}>
        <View >
            <Text_Item Stylesh={StyleText.large} textUse='McDonals live lind' 
             AddStyle={{marginLeft:"auto"}}/>
            <Text_Item Stylesh={StyleText.medium} textUse='burgers . chiken . nagests'
             AddStyle={Styles.discription}/>
        </View>
        <AntDesign name="sharealt" size={24} color="black" />
    </View>
)
}

export default NameDiscription
