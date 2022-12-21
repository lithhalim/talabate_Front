import React from 'react';
import {View} from "react-native";
import { Button_Item ,ButtonEnum} from '../../../../Custom_Combonants/Button_Combonants';
import {Style}  from "./style/style"
function ButtonBasket() {
    const TackOrder=()=>{

    }
    const AddMore=()=>{

    }
  return (
    <View style={Style.containerBasket}>
        <Button_Item LoadingState={false} 
          Stylesh={ButtonEnum.orange} handleSubmit={TackOrder} 
          textUse="Submit Order" AddStyle={Style.firstButton}/>


        <Button_Item LoadingState={false} Stylesh={ButtonEnum.white} 
          handleSubmit={AddMore} textUse="Add More" 
          AddStyle={Style.firstButton}/>


    </View>
  )
}

export default ButtonBasket