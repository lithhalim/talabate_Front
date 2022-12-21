import React from 'react';
import { ItemSelectProvider } from './contextApi/SelectItemInResturant';
import ResturantPage from './ResturantPage';
import { useQuery } from '@apollo/client';
import LoadingCombonants from '../../Custom_Combonants/LoadingCombonants/LoadingCombonants';
import { QueryData } from './graphql/query';



function MainContainerResturantPage({route}:any) {
  const {restaurantid}=route.params;
  const {data,loading} =useQuery(QueryData(restaurantid));


  if(loading){
    return <LoadingCombonants/>
  }


  return (
      <ItemSelectProvider>
        {data?<ResturantPage
         datause={data.GetResturant[0]}/>:<></>}
      </ItemSelectProvider>
  )
}

export default MainContainerResturantPage
