import React from 'react';
import { ItemSelectProvider } from './contextApi/SelectItemInResturant';
import ResturantPage from './ResturantPage';
import { gql,useQuery } from '@apollo/client';
import LoadingCombonants from '../../Custom_Combonants/LoadingCombonants/LoadingCombonants';



function MainContainerResturantPage({route}:any) {
  const {restaurantId}=route.params;

  let ResturantType=gql`
  {
    getRestaurant(restaurantId:"${restaurantId}"){
      restaurantId,
      restaurantName,
      images,
      categories,
      AllItems{
        itemId, 
        Price,
        description,
        productName,
        quantity,
        images,
        selectItemQuentuty,
        ResturantSelect
      }
      
    }
  }
  `


  const {data,loading} =useQuery(ResturantType);

  if(loading){
    return <LoadingCombonants/>
  }


  return (
      <ItemSelectProvider>
        {data?<ResturantPage
         datause={data.getRestaurant[0]}/>:<></>}
      </ItemSelectProvider>
  )
}

export default MainContainerResturantPage
