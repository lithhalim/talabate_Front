import React from 'react';
import {View} from "react-native";
import { Button_Item ,ButtonEnum} from '../../../../Custom_Combonants/Button_Combonants';

function ButtonBasket() {
    const TackOrder=()=>{

    }
    const AddMore=()=>{

    }
  return (
    <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-around",padding:15,backgroundColor:"white",elevation:30,shadowColor:"black",shadowOpacity:2}}>
        <Button_Item LoadingState={false} Stylesh={ButtonEnum.orange} handleSubmit={TackOrder} textUse="Submit Order" AddStyle={{width:160,padding:10}}/>
        <Button_Item LoadingState={false} Stylesh={ButtonEnum.white} handleSubmit={AddMore} textUse="Add More"  AddStyle={{width:160,padding:10}}/>
    </View>
  )
}

export default ButtonBasket