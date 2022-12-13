import React from 'react'
import {ButtonEnum,Button_Item} from '../../../../Custom_Combonants/Button_Combonants';
import {View} from "react-native"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


function GoToBasketSection() {

  const Navigation=useNavigation();
  const select=useSelector((state:any)=>(state.addToCartSlice.allProduct));

  const TotalPrice=select.reduce((acc:any,data:any)=>{
    if(data.selectItemQuentuty){
      return acc+=Number(data.selectItemQuentuty)*Number(data.Price)
    }
  },0)


  const GoToBasket=()=>{
    if(TotalPrice>0){
      Navigation.navigate("Basket")
    }
  }


  return (
    <View style={{zIndex:0,elevation:0}}> 
        <Button_Item Stylesh={ButtonEnum.orange} textUse={`Go To Basket    $ ${TotalPrice}`}
        handleSubmit={GoToBasket} AddStyle={{width:"95%"
        ,marginLeft:"auto",marginRight:"auto"}} LoadingState={false}/>
    </View>
)
}

export default GoToBasketSection
