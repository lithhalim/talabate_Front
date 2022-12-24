import React from 'react';
import {View} from "react-native";
import {StyleText,Text_Item} from '../../../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { Styles } from '../style/style';
import LikesButton from '../../../../../Custom_Combonants/LikeButton/likeButton';


function NameDiscription({datause}:any) {
  const {restaurantname,categories,freedelivery,restaurantid}=datause;
  return (
    <View style={Styles.containerName}>
        <View >
            <Text_Item Stylesh={StyleText.large} textUse={restaurantname} 
             AddStyle={{marginLeft:"auto"}}/>
            <Text_Item Stylesh={StyleText.medium} textUse={categories}
             AddStyle={Styles.discription}/>
        </View>

        <View style={{display:"flex",flexDirection:"row", }}>
          <AntDesign name="sharealt" size={24} color="black" style={{marginRight:15,marginLeft:5}} />
          <LikesButton restaurantid={restaurantid}/>
        </View>
    </View>
)
}

export default NameDiscription
