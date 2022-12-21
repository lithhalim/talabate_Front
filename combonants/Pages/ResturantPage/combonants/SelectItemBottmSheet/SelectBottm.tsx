import React, { useContext } from 'react';
import {View,Image} from "react-native";
import {StyleText,Text_Item} from '../../../../Custom_Combonants/Text_Combonants';
import IconsSection from './combonants/IconsSection';
import NamePrice from "./combonants/NamePrice";
import BottonSectio from "./combonants/BottonSectio";
import { Modal_Create_Context } from '../../contextApi/SelectItemInResturant';
import { Styless } from './style/style';



function SelectBottm() {
  const ModelContext=useContext(Modal_Create_Context);


  return (
    <>
        {ModelContext.DataItem!==false?
            <View style={Styless.container}>
              <Image source={{uri:ModelContext.DataItem.images}} 
                  style={Styless.firstImage}/>
              <NamePrice datause={ModelContext.DataItem}/>
              <IconsSection/>

              <View style={{padding:15}}>
                  <Text_Item Stylesh={StyleText.medium} 
                     textUse='Description' AddStyle={{marginLeft:"auto"}}/>
                  <Text_Item Stylesh={StyleText.sosmall} 
                     textUse={ModelContext.DataItem.description} 
                     AddStyle={{marginLeft:"auto",maxWidth:"95%"}}/>
              </View>

              <BottonSectio datause={ModelContext.DataItem}/>      
          </View>
        :<></>}
    </>
  )
}

export default SelectBottm


