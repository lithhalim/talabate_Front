import React, { useContext } from 'react';
import {TouchableOpacity,Image,View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { Style } from './style/style';
import { Modal_Create_Context } from '../../../contextApi/SelectItemInResturant';

function CardItem({datause}:any) {

    const ModelContext=useContext(Modal_Create_Context)
    const SelectItem=()=>{
      ModelContext.setIsVisibleModal(1)
    }
  
  return (
    <TouchableOpacity  style={Style.container} onPress={SelectItem}>
        <Image source={{uri:"https://static.toiimg.com/photo/msid-87930581/87930581.jpg"}} 
        style={Style.Images} />
            <View>
                <Text_Item Stylesh={StyleText.medium} textUse='Mc Macdonals'/>
                <Text_Item Stylesh={StyleText.small} textUse='We have all kinds of foods to be classified here. 
                You want to order what you wish' AddStyle={Style.discription}/>
                <Text_Item Stylesh={StyleText.medium} textUse='$ 48' AddStyle={Style.price}/>
            </View>
    </TouchableOpacity>
)
}

export default CardItem
