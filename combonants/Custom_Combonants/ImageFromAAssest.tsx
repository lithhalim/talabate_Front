import React from 'react';
import {Image,View} from "react-native";

interface ImageInterface{

    AddStyle:any,
    data:any
}

function ImageFromAAssest({AddStyle,data}:ImageInterface) {

  return (
        <Image source={{uri:Image.resolveAssetSource(data).uri}} style={AddStyle}/>
    )
}

export default ImageFromAAssest