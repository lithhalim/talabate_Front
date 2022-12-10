import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {ScrollView,View} from "react-native"
import InputContainer from '../Combonants/MiddelSection/MiddelSection';
import {AllDataUse} from "./DataSignup";
import HeaderAuthntication from "../Combonants/headerSection/headerSection";
import {MotiView} from "moti"
import SignupAndSignin from '../Combonants/MiddelSection/combonant/Signup&Signin/SignupAndSignin';
import { UploadImage_Provider } from '../Combonants/MiddelSection/combonant/UploadImage/contextApi/UploadImageContext';
import Back_Combonants from "../../../Custom_Combonants/GoBackCombonants"

function SignupSection({route}:any) {
  const {name}=route;

  //to clear show from the header 
  const Navigation=useNavigation();
  useLayoutEffect(()=>{
        Navigation.setOptions({
                headerShown:false
        })
  })

  return (
    <UploadImage_Provider>
        <ScrollView style={{backgroundColor:"rgb(255, 165, 0)"}}>
        <Back_Combonants color='white' />
            <HeaderAuthntication Type={name}/>
            <MotiView  animate={{top:0}}  from ={{top:1000}}  transition={{type: 'timing', duration: 600}}
            style={{backgroundColor:"white",height:550,borderTopLeftRadius:30,borderTopRightRadius:30,paddingTop:30}}>
              <InputContainer TypeData={name} AllDataUse={AllDataUse}/>
              <SignupAndSignin TypeData="signup"/>
            </MotiView>
        </ScrollView>
    </UploadImage_Provider>
  )
}

export default SignupSection