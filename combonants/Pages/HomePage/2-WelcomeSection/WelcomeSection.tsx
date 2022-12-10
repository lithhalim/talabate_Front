import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Image} from "react-native";
import images from "../../../../assets/header/headerImage.png";
import {ButtonEnum,Button_Item} from '../../../Custom_Combonants/Button_Combonants';
import  { StyleText,Text_Item } from '../../../Custom_Combonants/Text_Combonants';


import {Stylee} from "./style/style"
const LocalImageUri = Image.resolveAssetSource(images).uri;


function WelcomeSection() {
  const Navigaition=useNavigation();
  const goSignIn=()=>{
    Navigaition.navigate("signin")
  }
  return (
    <View style={Stylee.containerWelcom}>
        <View style={Stylee.containerText}>
          <Text_Item Stylesh={StyleText.large} textUse='Welcome to Deleverto !'/>
          <Text_Item Stylesh={StyleText.small} textUse='Log in or create a new account to experience shopping' 
          AddStyle={{textAlign:"center",fontSize:11,fontWeight:"bold",maxWidth:200,marginTop:5}}/>
          <Button_Item Stylesh={ButtonEnum.orange} textUse='Sign in' 
          handleSubmit={goSignIn} AddStyle={Stylee.button} LoadingState={false}/>
        </View>
        <Image source={{uri:LocalImageUri}}  style={Stylee.images}/>
    </View>
  )
}

export default WelcomeSection