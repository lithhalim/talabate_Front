import React from 'react';
import {View} from "react-native";
import {ButtonEnum,Button_Item} from '../../../../../Custom_Combonants/Button_Combonants';
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Styless } from '../style/style';

function BottonSectio() {
    const getData=()=>{

    }

  return (
    <View style={Styless.containerButton}>
        <Button_Item Stylesh={ButtonEnum.orange}  textUse='Add On Basket'
         AddStyle={{width:220}} handleSubmit={getData} LoadingState={false}/>
        <View style={Styless.InnnerContainer}>
            <MaterialCommunityIcons name="plus" size={20} color="silver" />
            <Text_Item Stylesh={StyleText.medium} textUse='0'/>
            <AntDesign name="minus" size={20} color="silver" />
        </View>
    </View>  )
}

export default BottonSectio
