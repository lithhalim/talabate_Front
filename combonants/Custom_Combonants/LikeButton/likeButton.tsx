import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorate, removeFavorate } from '../../redux/AddToFavorate/AddFavorate';
import {View,Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Style } from './style/style';



function LikesButton({restaurantid}:any) {
  const dispatch=useDispatch();
  const select=useSelector((state:any)=>(state.addFavorate.allFavorate))


  const LikePress=(DataGet:any)=>{
    if(select.includes(DataGet)){
      dispatch(removeFavorate(DataGet))
    }else{
      dispatch(addFavorate(DataGet))
    }
  }

  return (
  <Pressable onPress={()=>{LikePress(restaurantid)}}>
        {select.includes(restaurantid)?
        <AntDesign name="heart" style={Style.secandIocns}/>:
        <AntDesign name="hearto" style={Style.secandIocns} />}
  </Pressable>
)
}

export default LikesButton
