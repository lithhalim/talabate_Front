import React from 'react'
import {ButtonEnum,Button_Item} from '../../../../Custom_Combonants/Button_Combonants';
import {View} from "react-native"

function GoToBasketSection() {
    const GoToBasket=()=>{

    }


  return (
    <View style={{zIndex:0,elevation:0}}> 
        <Button_Item Stylesh={ButtonEnum.orange} textUse='Go To Basket      $25'
        handleSubmit={GoToBasket} AddStyle={{width:"95%"
        ,marginLeft:"auto",marginRight:"auto"}} LoadingState={false}/>
    </View>
)
}

export default GoToBasketSection
