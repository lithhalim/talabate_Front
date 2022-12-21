import React, { useContext, useEffect, useState } from 'react';
import {ScrollView} from "react-native"
import CardResturant from './CardResturant/CardResturant';
import FilterationSection from './FilterationSection/FilterationSection';
import HeaderCatagories from './HeaderRestaurant/HeaderCatagories';
import { useQuery } from '@apollo/client';
import LoadingCombonants from "../../Custom_Combonants/LoadingCombonants/LoadingCombonants";
import {Filtration_Create_Context} from "./ContextApi/FilterContext"

import { QueryUse } from './Graphql/query';
import Pagination from './Pagination/Pagination';
import ModalFilter from './FilterationSection/FilterSection/ModalFilter';



function CatagoriesResturant({WHEREDATA}:any) {

const [PageOffset,setPageOffset]=useState(0);
const DataFilter=useContext(Filtration_Create_Context);


  useEffect(()=>{
    DataFilter.setWhereData(WHEREDATA)
  },[WHEREDATA])

  const {data,error,loading}=useQuery(QueryUse,
    {variables:{limit:6,offset: PageOffset*7,
    TypeSelect:"DependCatagories",
    WHEREDATA:`${WHEREDATA}`,
    filterdata:DataFilter.NewFilter}});



  if(loading){
    return <LoadingCombonants/>
  }

  const ChangePagination=(datause:any)=>{
    setPageOffset(datause)
  }


  return (
    <>
        <HeaderCatagories/>
        <FilterationSection/>

        <ScrollView style={{paddingLeft:15,paddingRight:15}}>
            {data? data.GetResturant.map((dataUse:any,i:any)=>(
                <CardResturant key={i} dataUse={dataUse}/>
            )):<></>}
        </ScrollView>
        <ModalFilter/>

        <Pagination PageOffset={PageOffset} ChangePagination={ChangePagination}/>

    </>
  )
}

export default CatagoriesResturant