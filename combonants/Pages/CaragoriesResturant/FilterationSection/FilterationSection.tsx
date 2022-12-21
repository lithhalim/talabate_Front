import React, { useContext, useState } from 'react';
import {View,TouchableOpacity} from "react-native";
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';
import { Filtration_Create_Context } from '../ContextApi/FilterContext';
import {DataUsing} from "./dataUsingFiltration";
import SearchResturant from './SearchResturant/SearchResturant';

import { Style } from './style/style';

function FilterationSection() {
  const [OpenType,setOpenType]=useState<string|boolean>(false);
  const ModelFilter=useContext(Filtration_Create_Context);


  const getdata=(name:string)=>{
    if(name=="Filtration"){
      ModelFilter.setModalFilter(true)
    }else{
      if(name==OpenType){
        setOpenType(false)
  
      }else{
        setOpenType(name)
      }  
    }
  }



  return (
    <>
      <View style={Style.container}>
          {DataUsing.map(({name,icons},i)=>(
              <TouchableOpacity key={i} onPress={()=>{getdata(name)}} 
                style={Style.touchableOpacity}>
                <Text_Item Stylesh={StyleText.medium} textUse={name} 
                    AddStyle={Style.text}/>
                {icons}
              </TouchableOpacity>
          ))}
      </View>
      {OpenType=="Search"?<SearchResturant/>:<></>}
    </>
  )
}

export default FilterationSection