import React from 'react';
import {View} from "react-native";
import {ButtonEnum,Button_Item} from '../../../../../../Custom_Combonants/Button_Combonants';
import  { StyleText,Text_Item } from '../../../../../../Custom_Combonants/Text_Combonants';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

function ButtonNotification({StateEmail,handleSubmit,TypeData,LodingButton}:any) {
  return (
    <View>
        <ForgetPassword TypeData={TypeData}/>
        <Button_Item Stylesh={ButtonEnum.orange} textUse= {TypeData}   
            handleSubmit={handleSubmit} AddStyle={{marginTop:25,width:150,fontSize:18}}
            LoadingState={LodingButton} />
        <Text_Item Stylesh={StyleText.medium} textUse={StateEmail} 
        AddStyle={{color:"red",marginLeft:"auto",marginRight:"auto",marginTop:10}}/>
    </View>
  )
}

export default ButtonNotification
