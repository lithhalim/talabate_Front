import React from 'react';
import {View,Image} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';
import IncreseAndDeacrese from '../../../../Custom_Combonants/IncreseAndDecreseButton/IncreseAndDeacrese';

import { Style } from './style/style';

function CardBasket({data}:any) {
    const {productname,selectitemquentuty,price,itemid,images}=data;

    let TotalPrice=Number(selectitemquentuty)*Number(price)

  return (
    <View style={Style.containerCartBasket}>
        <View style={Style.firstView}>
            <Image source={{uri:images}} 
               style={Style.firstImage}/>
            <View>
                <Text_Item Stylesh={StyleText.large} textUse={productname}
                AddStyle={{fontWeight:"normal",paddingBottom:5}}/>
                <Text_Item Stylesh={StyleText.sosmall} textUse="meduime "
                 AddStyle={{fontSize:12}}  />
            </View>
        </View>
        <View style={Style.secandView}>
            <IncreseAndDeacrese GetNumberItem={selectitemquentuty} datause={data}/>
            <Text_Item Stylesh={StyleText.small} textUse={`${TotalPrice} JOD`} 
            AddStyle={Style.firstText}/>
        </View>
    </View>
  )
}

export default CardBasket