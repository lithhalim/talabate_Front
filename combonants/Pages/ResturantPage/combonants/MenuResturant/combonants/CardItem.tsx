import React, { useContext } from 'react';
import {TouchableOpacity,Image,View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { Style } from './style/style';
import { Modal_Create_Context } from '../../../contextApi/SelectItemInResturant';

function CardItem({datause}:any) {
  const {images,description,Price,productName}=datause;

    const ModelContext=useContext(Modal_Create_Context)
    const SelectItem=()=>{
      ModelContext.setIsVisibleModal(1);
      ModelContext.setDataItem(datause)
    }

    let descriptiondata=description.length>100?description.slice(0,100):description
  
  return (
    <TouchableOpacity  style={Style.container} onPress={SelectItem}>
        <Image source={{uri:images}} 
        style={Style.Images} />
            <View>
                <Text_Item Stylesh={StyleText.medium} textUse={productName}/>
                <Text_Item Stylesh={StyleText.small} textUse={descriptiondata} 
                    AddStyle={Style.discription}/>
                <Text_Item Stylesh={StyleText.medium} textUse={`${Price} $`} 
                    AddStyle={Style.price}/>
            </View>
    </TouchableOpacity>
)
}

export default CardItem
