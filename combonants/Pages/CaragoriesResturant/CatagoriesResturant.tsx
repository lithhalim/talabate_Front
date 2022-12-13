import React from 'react';
import {View,ScrollView} from "react-native"
import CardResturant from './CardResturant/CardResturant';
import FilterationSection from './FilterationSection/FilterationSection';
import HeaderCatagories from './HeaderRestaurant/HeaderCatagories';
import { gql,useQuery } from '@apollo/client';
import LoadingCombonants from "../../Custom_Combonants/LoadingCombonants/LoadingCombonants"


function CatagoriesResturant(props:any) {
const Categories=props.route.params?.categories!==undefined?props.route.params.categories:"Pizza"


  const TypeSelect=gql`
    {
      CategoriesRestaurant(categories:"${Categories}"){
        restaurantId,
        restaurantName,
        images,
        categories
      }      
    }  
  `
  const {data,error,loading}=useQuery(TypeSelect);

  if(loading){
    return <LoadingCombonants/>
  }




  return (
    <>
        <HeaderCatagories/>
        <FilterationSection/>

        <ScrollView style={{paddingLeft:15,paddingRight:15}}>
            {data? data.CategoriesRestaurant.map((dataUse:any,i:any)=>(
                <CardResturant key={i} dataUse={dataUse}/>
            )):<></>}
        </ScrollView>

    </>
  )
}

export default CatagoriesResturant