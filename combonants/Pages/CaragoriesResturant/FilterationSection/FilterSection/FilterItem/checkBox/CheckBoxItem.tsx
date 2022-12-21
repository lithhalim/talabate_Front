import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StyleText, Text_Item } from '../../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Filtration_Create_Context } from '../../../../ContextApi/FilterContext';

import { StyleUseBox } from './style/style';
import { dataUse } from './Datause/Datause';



function CheckBoxItem() {
    const DataContext=useContext(Filtration_Create_Context);

    const SelectButton=(Datause:any)=>{
        let checkIndex=DataContext.checkBoxData
            .findIndex((data:any)=>(data==Datause));

        if(checkIndex==-1){
            DataContext.setcheckBoxData([...DataContext.checkBoxData,Datause])
        }else{
            let FilterData=DataContext.checkBoxData
                .filter((data:any)=>(data!==Datause));

            DataContext.setcheckBoxData(FilterData)
        }
    }


  return (
    <>
        <Text_Item Stylesh={StyleText.large} 
        textUse="Select What You Need" 
        AddStyle={StyleUseBox.firstText}/>
        {
            dataUse.map(({name,value},i)=>(
                <TouchableOpacity key={i}  onPress={()=>{SelectButton(value)}} 
                    style={StyleUseBox.touchableOpacity}>
                    <Text_Item Stylesh={StyleText.medium} 
                    textUse={name} AddStyle={{color:"rgba:(0,0,0,.1)"}}/>
                    <TouchableOpacity     
                        style={DataContext.checkBoxData.includes(value)?
                        StyleUseBox.ActiveBox:StyleUseBox.StyleCheckBox}      >
                        <AntDesign name="check" style={StyleUseBox.firstIcons}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))
        }
    
    </>
  )
}



export default CheckBoxItem;


