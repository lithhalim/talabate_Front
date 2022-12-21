import React, {useContext} from 'react';
import {StyleSheet,TouchableOpacity,View} from "react-native";
import { StyleText, Text_Item } from '../../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Filtration_Create_Context } from '../../../../ContextApi/FilterContext';

import { dataUse } from './datause/datause';
import {Style} from "./style/style"



function RadioSection() {

    const DataContext=useContext(Filtration_Create_Context)

    const SelectButton=(Data:any)=>{
        DataContext.setRadioData(Data)
    }

  return (
    <View>
        <Text_Item Stylesh={StyleText.large} 
            textUse="Sort By Selected" 
            AddStyle={Style.headerStyle}/>
        {
            dataUse.map(({name,value},i)=>(
                <TouchableOpacity key={i}  onPress={()=>{SelectButton(value)}} 
                    style={Style.touchable}>
                    <Text_Item Stylesh={StyleText.medium} 
                      textUse={name} AddStyle={{color:"rgba:(0,0,0,.1)"}}/>
                    <TouchableOpacity  
                        style={DataContext.radioData==value?
                        StyleUseBox.ActiveBox:StyleUseBox.StyleCheckBox}>
                        <AntDesign name="check"  style={Style.ItemsIcons}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default RadioSection

const StyleUseBox=StyleSheet.create({
    StyleCheckBox:{
        width:20,height:20,borderWidth:1,borderColor:"black",borderRadius:20
    },
    ActiveBox:{
        width:20,height:20,borderWidth:1,borderColor:"black",borderRadius:20,backgroundColor:"orange"

    }

})