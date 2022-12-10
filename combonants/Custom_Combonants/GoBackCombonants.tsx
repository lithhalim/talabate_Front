import React,{memo} from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


interface TextCombonant{
  color:string
  AddStyle?:React.CSSProperties,
}

function Back_Combonants({color,AddStyle}:TextCombonant) {
    let Style={position:"absolute" ,right:20,top:50}

    const UseStyle:any={
      ...Style,...AddStyle
    }
    const Navigation=useNavigation();

    const handleSubmit=()=>{
      Navigation.goBack()
    }
  

  return (

    <TouchableOpacity onPress={handleSubmit} style={UseStyle} >
        <Ionicons name="arrow-back-circle-outline" size={40} color={color} />
    </TouchableOpacity>
  )
}

export default memo(Back_Combonants) 
