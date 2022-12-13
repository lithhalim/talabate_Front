import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,ScrollView,Text,Image,TouchableOpacity} from "react-native"
import {StyleText,Text_Item} from '../../../Custom_Combonants/Text_Combonants';

import { gql,useQuery } from '@apollo/client';
import { RestaurantInterface } from '../../../interface/ResturantInterface';





function Fanous_Resturant({datause}:any) {
    const Navigation=useNavigation();


    const Gotopage=(restaurantId:string)=>{
        Navigation.navigate("Resturant",{
            restaurantId:restaurantId
        })
    }
  return (
    <View style={{padding:10,backgroundColor:"white",padding:15,paddingBottom:40}}>
        <Text_Item Stylesh={StyleText.medium} textUse='Famous restaurants near' 
        AddStyle={{marginLeft:"auto",padding:10,fontStyle:"italic",fontSize:15}}/>
        <ScrollView horizontal>
            {datause?.getRestaurant.map(({restaurantId,restaurantName,images }:RestaurantInterface,i:number)=>(
                <TouchableOpacity key={i} style={{padding:2}} onPress={()=>{Gotopage(restaurantId)}}>
                    <Image source={{uri:images}} style={{width:115,height:100,borderRadius:5}}/>
                    <Text_Item Stylesh={StyleText.medium} textUse={restaurantName} 
                    AddStyle={{marginTop:2,textAlign:"center",fontSize:12}}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
        
    </View>
  )
}

export default Fanous_Resturant;


