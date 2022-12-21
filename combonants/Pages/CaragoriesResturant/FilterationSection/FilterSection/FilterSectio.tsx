import React, { useContext, useEffect, useState } from 'react';
import { View,ScrollView} from "react-native";
import { Button_Item,ButtonEnum } from '../../../../Custom_Combonants/Button_Combonants';
import CheckBoxItem from './FilterItem/checkBox/CheckBoxItem';
import HeaderFilter from './FilterItem/header/HeaderFilter';
import RadioSection from './FilterItem/Radio/RadioSection';
import { Filtration_Create_Context } from '../../ContextApi/FilterContext';
import axios from 'axios';
import { FetchCount } from '../../FetchApi/CountFetch';


function FilterSectio() {
  const [ResultNumber,setResultNumber]=useState<any>(0)

  const Filtration=useContext(Filtration_Create_Context);




  useEffect(()=>{
    //Use To Get The Count items
    FetchCount(Filtration,setResultNumber)
  },[Filtration.checkBoxData])




  const GetChange=()=>{
    Filtration.setNewFilter(`${Filtration.checkBoxData.join("")} 
    ${Filtration.radioData}`)
    Filtration.setModalFilter(false)
  }





  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <ScrollView>
            <HeaderFilter/>
                <CheckBoxItem />
            <RadioSection />
        </ScrollView>

        <Button_Item LoadingState={false} 
         Stylesh={ButtonEnum.orange}
         handleSubmit={GetChange} 
         textUse={`Show Results Press (${ResultNumber})`}
         AddStyle={{position:"absolute",bottom:0,width:"100%"}}/>
    </View>
  )
}

export default FilterSectio