import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,ScrollView,Image,TouchableOpacity} from "react-native"
import {StyleText,Text_Item} from '../../../Custom_Combonants/Text_Combonants';

import { RestaurantInterface } from '../../../interface/ResturantInterface';





function Fanous_Resturant({datause}:any) {
    const Navigation=useNavigation();


    const Gotopage=(restaurantid:string)=>{
        Navigation.navigate("Resturant",{
            restaurantid:restaurantid
        })
    }
  return (
    <View style={{padding:10,backgroundColor:"white",padding:15,paddingBottom:40}}>
        <Text_Item Stylesh={StyleText.medium} textUse='Famous restaurants near' 
        AddStyle={{marginLeft:"auto",padding:10,fontStyle:"italic",fontSize:15}}/>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            automaticallyAdjustContentInsets={true}
         >
            {datause?.GetResturant.map(({restaurantid,restaurantname,images }:RestaurantInterface,i:number)=>(
                <TouchableOpacity key={i} style={{padding:2}} onPress={()=>{Gotopage(restaurantid)}}>
                    <Image source={{uri:images}} style={{width:115,height:100,borderRadius:5}}/>
                    <Text_Item Stylesh={StyleText.medium} textUse={restaurantname} 
                    AddStyle={{marginTop:2,textAlign:"center",fontSize:12}}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
        
    </View>
  )
}

export default Fanous_Resturant;


