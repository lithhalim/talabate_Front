import React from 'react';
import {View} from "react-native";
import CardItem from './combonants/CardItem';


let dataUse=[1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,4,5,6,8,9]
function MenuResturant() {


  return (
    <View style={{backgroundColor:"white"}}>
        {dataUse.map((data,i)=>(
          <CardItem datause={data}/>
        ))}
    </View>
  )
}

export default MenuResturant
