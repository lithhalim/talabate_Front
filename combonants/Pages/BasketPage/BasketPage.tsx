import React from 'react';
import { View } from 'react-native';
import CardBasket from './combonants/CardBasket/CardBasket';
import HeaderBasket from './combonants/HeaderBasket/HeaderBasket';


function BasketPage() {
  return (
    <View style={{backgroundColor:"white"}}>
        <HeaderBasket/>
        <CardBasket/>
    </View>
  )
}

export default BasketPage