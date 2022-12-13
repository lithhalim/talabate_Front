import React,{ useEffect, useLayoutEffect, useState } from 'react'
import HeaderHome from './1-HeaderHome/HeaderHome';
import {ScrollView,Text} from "react-native"
import WelcomeSection from './2-WelcomeSection/WelcomeSection';
import Catagories_Home from './3-CatagoryHomePage/Catagories_Home';
import Fanous_Resturant from './5-FamousResturant/Fanous_Resturant';
import { useNavigation } from '@react-navigation/native';
import Slider from "../../Pages/HomePage/4-SliderImage/SliderSection/Slider";

import { gql,useQuery } from '@apollo/client';
import LoadingCombonants from '../../Custom_Combonants/LoadingCombonants/LoadingCombonants';



function HomePage() {
  const {data,error,loading}=useQuery(DataType);
  const [Scrolling,setScrolling]=useState(false);




//to clear show from the header 
const Navigation=useNavigation();
    useLayoutEffect(()=>{
        Navigation.setOptions({
                headerShown:false
        })
})
  
const getdata=(event:any)=>{
  setScrolling(event.nativeEvent.contentOffset.y>5)
}
  
  return (
    <>
      <HeaderHome Scrolling={Scrolling}/>
        <ScrollView onScroll={getdata}>
          <WelcomeSection/>
          <Catagories_Home/>
          {data?<Slider  datause={data}/>:<></>}
          {data?<Fanous_Resturant datause={data}/>:<></>}
        </ScrollView>
    </>
  )
}

export default HomePage


const DataType=gql`
  {
    getRestaurant{
      restaurantId,
      restaurantName,
      images,
      categories 
    }
  }
`
