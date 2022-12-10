import React, { useContext } from 'react';
import {Pressable,View} from "react-native";
import { StyleText, Text_Item } from '../../../../../../../../../../../../../Custom_Combonants/Text_Combonants';
import { MaterialIcons } from '@expo/vector-icons'; 
import * as MediaLibrary from 'expo-media-library';
import { Styless_Picture } from '../../Style/style';
import { UploadImage_Context } from '../../../../../../../contextApi/UploadImageContext';

function SaveUseImage({setPhoto,photo}:any) {
  const ImageContext=useContext(UploadImage_Context);



    let savePhoto = () => {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
          ImageContext.setImageUploded(photo.uri)
          setPhoto(undefined);
        });
    };

  return (
    <Pressable onPress={savePhoto} style={Styless_Picture.StyleButton}>
            <Text_Item Stylesh={StyleText.medium} textUse="Save & Use Image"/>
            <MaterialIcons name="save-alt" size={24} color="black" style={{marginLeft:3}}/>
    </Pressable>
  )
}

export default SaveUseImage
