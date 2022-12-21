import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  Pressable, View } from 'react-native';
import {StyleText,Text_Item} from '../../../../../../Custom_Combonants/Text_Combonants';


function SignupAndSignin({TypeData}:any) {
    const Navigation=useNavigation<any>();

    const onPress=()=>{
      Navigation.navigate(TypeData=="signin"?"signup":"signin")
        
    }


  return (
    <View style={{display:"flex",alignItems:"center"}}>
        <Text_Item Stylesh={StyleText.medium} AddStyle={{fontWeight:"normal"}}  textUse={TypeData=="signin"?"You Dont Have Account ?":"You Have Account "}/>
        <Pressable onPress={onPress} style={{marginBottom:15}}> 
          <Text_Item Stylesh={StyleText.medium} textUse={TypeData=="signin"?"Sign up Now":"Sign in Now"}/>
        </Pressable>
    </View>
  )
}

export default SignupAndSignin
