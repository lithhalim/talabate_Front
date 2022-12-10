import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {ScrollView} from "react-native"
import InputContainer from '../Combonants/MiddelSection/MiddelSection';
import {AllDataUse} from "./DataSignin";
import AuthinticationOther from '../Combonants/AuthnticationFaceGoogle/Authntication';
import HeaderAuthntication from '../Combonants/headerSection/headerSection';
import {MotiView} from "moti"
import SignupAndSignin from '../Combonants/MiddelSection/combonant/Signup&Signin/SignupAndSignin';
import Back_Combonants from "../../../Custom_Combonants/GoBackCombonants"
  
function Signin({route}:any) {
const {name}=route;

//to clear show from the header 
const Navigation=useNavigation();
useLayoutEffect(()=>{
        Navigation.setOptions({
                headerShown:false
        })
})



  return (
    <ScrollView style={{backgroundColor:"rgb(255, 165, 0)"}}>
      <Back_Combonants color='white' />
      <HeaderAuthntication Type={name}/>
      <MotiView  animate={{top:0}}  from ={{top:1000}}  transition={{type: 'timing', duration: 600}}
          style={{backgroundColor:"white",height:500,borderTopLeftRadius:30,
          borderTopRightRadius:30,paddingTop:30}}>
            <InputContainer TypeData={name} AllDataUse={AllDataUse}/>
            <SignupAndSignin TypeData="signin"/>
          <AuthinticationOther/>
      </MotiView>
    </ScrollView>
  )
}

export default Signin