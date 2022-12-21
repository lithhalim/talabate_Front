import React, { useState } from 'react';
import {View,TextInput, Text,TouchableOpacity} from "react-native";
import { gql, useQuery } from '@apollo/client';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {MotiView} from "moti";
import {datause} from "./graphql/query";
import { Style } from './style/style';


function SearchResturant() {
    const [InputText,setInputText]=useState("");
    const Navigation=useNavigation<any>();

 const {data} =useQuery(datause,{variables:
    {restaurantname:InputText==""?"NoSearch":InputText}})


const GetData=(datause:any)=>{
    Navigation.navigate("Resturant",{
        restaurantid:datause
    })

}
    
  return (
    <MotiView style={Style.container} 
       animate={{top:0}} from={{top:-150}}>
        <View style={Style.firstView}>
            <TextInput onChangeText={(data)=>(setInputText(data))} 
             placeholder="Search Resturant" style={Style.firstText}/>
            <FontAwesome name="search" size={22} color="black" />
        </View>
        {data&&data.SearchResturant.length>0?
            <View style={Style.secandView}>
                {
                    data?data.SearchResturant.map((data:any,i:number)=>(
                        <TouchableOpacity key={i} style={{marginBottom:5}} 
                        onPress={()=>{GetData(data.restaurantid)}}>
                            <Text style={{fontWeight:"bold",fontSize:13}}>
                                {data?.restaurantname}</Text>
                        </TouchableOpacity>
                    )):<></>
                }
            </View>
        :<></>}

    </MotiView>
  )
}

export default SearchResturant