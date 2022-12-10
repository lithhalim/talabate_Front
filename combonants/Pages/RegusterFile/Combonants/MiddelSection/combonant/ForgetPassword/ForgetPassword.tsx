import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import { StyleText,Text_Item } from '../../../../../../Custom_Combonants/Text_Combonants';

function ForgetPassword({TypeData}:any) {
  return (
    <>
    {TypeData=="signin"?
        <TouchableOpacity>
            <Text_Item Stylesh={StyleText.medium} textUse='Forget Password !'
            AddStyle={{marginBottom:10,marginLeft:"auto",marginTop:15}}/>
        </TouchableOpacity>
    :<></>}</>
  )
}

export default ForgetPassword