import React,{  useContext, useLayoutEffect, useState } from 'react'
import HeaderHome from './1-HeaderHome/HeaderHome';
import {ScrollView,SafeAreaView} from "react-native"
import WelcomeSection from './2-WelcomeSection/WelcomeSection';
import Catagories_Home from './3-CatagoryHomePage/Catagories_Home';
import Fanous_Resturant from './5-FamousResturant/Fanous_Resturant';
import { useNavigation } from '@react-navigation/native';
import Slider from "../../Pages/HomePage/4-SliderImage/SliderSection/Slider"
import { Authntication_Create_Context } from '../../contextApi/Authntication_Context';

function HomePage() {
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
          {/* <SliderImage/> */}
          <Slider/>
          <Fanous_Resturant/>
        </ScrollView>
    </>
  )
}

export default HomePage
