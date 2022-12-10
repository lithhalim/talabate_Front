import React from 'react';
import {Pressable} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StyleText, Text_Item } from '../../../../../../../../../../../../../Custom_Combonants/Text_Combonants';
import { Styless_Picture } from '../../Style/style';

function DeleteImage({setPhoto,photo}:any) {

    const RemoveImage=()=>{
            setPhoto(undefined)
    }

  return (
    <Pressable onPress={RemoveImage} style={Styless_Picture.StyleButton}>
            <Text_Item Stylesh={StyleText.medium} textUse="Re Pick" />
            <MaterialCommunityIcons name="camera-retake" size={24} color="black"  style={{marginLeft:3}} />
    </Pressable>
  )
}

export default DeleteImage