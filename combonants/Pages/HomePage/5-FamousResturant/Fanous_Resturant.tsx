import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,ScrollView,Text,Image,TouchableOpacity} from "react-native"
import {StyleText,Text_Item} from '../../../Custom_Combonants/Text_Combonants';






let dataUsing=[
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
    {name:"Ashabe Sadeh" ,image:"https://images.deliveryhero.io/image/talabat/restaurants/logo_(36)_(1)_637442829119120558.jpg?width=180",type:"fast food"},
]
function Fanous_Resturant() {
    const Navigation=useNavigation()

    const Gotopage=()=>{
        Navigation.navigate("search")
    }
  return (
    <View style={{padding:10,backgroundColor:"white",padding:15,paddingBottom:40}}>
        <Text_Item Stylesh={StyleText.medium} textUse='Famous restaurants near' 
        AddStyle={{marginLeft:"auto",padding:10,fontStyle:"italic",fontSize:15}}/>
        <ScrollView horizontal>
            {dataUsing.map((data,i)=>(
                <TouchableOpacity key={i} style={{padding:2}} onPress={Gotopage}>
                    <Image source={{uri:data.image}} style={{width:115,height:100,borderRadius:5}}/>
                    <Text_Item Stylesh={StyleText.medium} textUse={data.name} 
                    AddStyle={{marginTop:2,textAlign:"center",fontSize:12}}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
        
    </View>
  )
}

export default Fanous_Resturant