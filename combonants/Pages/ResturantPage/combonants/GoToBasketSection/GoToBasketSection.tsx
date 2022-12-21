import React from 'react'
import {ButtonEnum,Button_Item} from '../../../../Custom_Combonants/Button_Combonants';
import {View} from "react-native"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Style } from './style/style';

function GoToBasketSection() {

  const Navigation=useNavigation<any>();
  const select=useSelector((state:any)=>(state.addToCartSlice.allProduct));

  const TotalPrice=select.reduce((acc:any,data:any)=>{
    if(data.selectitemquentuty){
      return acc+=Number(data.selectitemquentuty)*Number(data.price)
    }
  },0)


  const GoToBasket=()=>{
    if(TotalPrice>0){
      Navigation.navigate("Basket")
    }
  }


  return (
    <View style={{zIndex:0,elevation:0}}> 
        <Button_Item Stylesh={ButtonEnum.orange} 
        textUse={`Go To Basket    $ ${TotalPrice}`}
        handleSubmit={GoToBasket} 
        AddStyle={Style.button} LoadingState={false}/>
    </View>
)
}

export default GoToBasketSection
