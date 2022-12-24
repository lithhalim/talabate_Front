import React from 'react';
import {View,Pressable,Image,TouchableOpacity} from "react-native";
import { Text_Item,StyleText } from '../../../Custom_Combonants/Text_Combonants';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Style } from './style/style';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorate, removeFavorate } from '../../../redux/AddToFavorate/AddFavorate';
import LikesButton from "../../../Custom_Combonants/LikeButton/likeButton"



function CardResturant({dataUse}:any) {
  const {categories,images,restaurantname,restaurantid,rate}=dataUse;
  const Navigation=useNavigation<any>();
  const dispatch=useDispatch();
  const select=useSelector((state:any)=>(state.addFavorate.allFavorate))


  const LikePress=(DataGet:any)=>{
    if(select.includes(DataGet)){
      dispatch(removeFavorate(DataGet))
    }else{
      dispatch(addFavorate(DataGet))
    }
  }


  const Gotopage=(restaurantid:string)=>{
    Navigation.navigate("Resturant",{
        restaurantid:restaurantid
    })
}


  
  return (
    <TouchableOpacity onPress={()=>{Gotopage(restaurantid)}}  
      style={Style.container}>
        <Pressable style={Style.presapple}>
            <Image source={{uri:images}} style={Style.firstImage}/>
            <View>
                <Text_Item Stylesh={StyleText.medium} 
                  textUse={restaurantname} AddStyle={{fontSize:17}}/>
                <Text_Item Stylesh={StyleText.sosmall} textUse={categories} />
                <View style={Style.firstView}>
                    <AntDesign style={Style.firstIcons}/>
                    <Text_Item Stylesh={StyleText.small} textUse={rate} />
                </View>
            </View>
        </Pressable>
        <View style={{marginTop:5,marginLeft:20}}>
          <LikesButton restaurantid={restaurantid}/>
        </View>
    </TouchableOpacity>
  )
}

export default CardResturant