import React, { useContext, useEffect, useState } from 'react';
import {View,TouchableOpacity, Text} from "react-native";
import { StyleUse } from './style/style';
import { Filtration_Create_Context } from '../ContextApi/FilterContext';
import { FetchCount } from '../FetchApi/CountFetch';


function Pagination({ChangePagination,PageOffset}:any) {
    const [ResultNumber,setResultNumber]=useState<any>(0)
    const Filtration=useContext(Filtration_Create_Context);




    useEffect(()=>{
        //Use To Get The Count items
        FetchCount(Filtration,setResultNumber)
    },[Filtration.checkBoxData,Filtration.WhereData])
  
   let PaginationLength=  Array(Math.ceil(ResultNumber/6)).fill(1)



    // Send The Number Of Pagination To Parent
    const PressPagination=(datause:any)=>{
        ChangePagination(datause)
    }


    

  return (
    <View style={StyleUse.container}>
        {PaginationLength.map((data,i)=>(
            <TouchableOpacity key={i} style={PageOffset!==i?
                StyleUse.StylePagination:StyleUse.ActiveItem} 
                onPress={()=>{PressPagination(i)}} >
                <Text style={StyleUse.firstText}>
                    {i}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

export default Pagination;


