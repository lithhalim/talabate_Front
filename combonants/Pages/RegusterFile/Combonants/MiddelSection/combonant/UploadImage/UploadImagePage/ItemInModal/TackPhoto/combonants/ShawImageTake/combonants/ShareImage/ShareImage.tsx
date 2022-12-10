import React from 'react';
import {Pressable,View} from "react-native";
import { Text_Item ,StyleText} from '../../../../../../../../../../../../../Custom_Combonants/Text_Combonants';
import { Entypo } from '@expo/vector-icons';
import { shareAsync } from 'expo-sharing';
import { Styless_Picture } from '../../Style/style';



function ShareImage({setPhoto,photo}:any) {
    let sharePic = () => {
        shareAsync(photo.uri).then(() => {
          setPhoto(undefined);
        });
      };

  return (
    <Pressable onPress={sharePic} style={Styless_Picture.StyleButton}>
            <Text_Item Stylesh={StyleText.medium} textUse="share" />
            <Entypo name="share" size={24} color="black"  style={{marginLeft:5}} />
    </Pressable>
  )
}

export default ShareImage