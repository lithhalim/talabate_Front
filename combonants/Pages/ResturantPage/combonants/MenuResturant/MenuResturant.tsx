import React from 'react';
import {View} from "react-native";
import CardItem from './combonants/CardItem';

function MenuResturant({datause}:any) {

  return (
    <>
      <View style={{backgroundColor:"white"}}>
          {datause.allitems?datause.allitems.map((data:any,i:any)=>(
            <CardItem datause={data} key={i}/>
          )):<></>}
      </View>
    </>
  )
}

export default MenuResturant
