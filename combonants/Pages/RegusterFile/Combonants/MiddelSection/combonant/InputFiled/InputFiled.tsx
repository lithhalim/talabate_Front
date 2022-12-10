import React from 'react';
import {View,TextInput} from "react-native";
import {StyleText,Text_Item} from '../../../../../../Custom_Combonants/Text_Combonants';


function InputFiled({handleChange, handleBlur,dataUse,values,errors,touched}:any) {
    const {name,icon,placeholder,secure}=dataUse;
  return (
    <View >
        <View style={{display:"flex",flexDirection:"row-reverse",marginTop:15, 
         borderBottomColor: 'silver',borderBottomWidth: 2,padding:3
        }}>
            {icon }
            <TextInput
            onChangeText={handleChange(`${name}`)}
            onBlur={handleBlur(`${name}`)}
            value={values[name]}
            placeholder={placeholder}
            secureTextEntry={secure}
            autoCapitalize="none"
            />  
        </View>
        {errors[name] && touched[name] ? 
        <Text_Item Stylesh={StyleText.medium} textUse={errors[name]} AddStyle={{color:"red",marginLeft:"auto"}}/>
        : null}                  
    </View>
)
}

export default InputFiled