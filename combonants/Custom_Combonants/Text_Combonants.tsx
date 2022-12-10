import React,{memo} from 'react';
import { Text } from 'react-native';



enum StyleText {
  large,
  medium,
  small,
  sosmall
}


interface TextCombonant{
  Stylesh:StyleText,
  textUse:string,
  AddStyle?:React.CSSProperties
}

function Text_Combonants({Stylesh,textUse,AddStyle}:TextCombonant) {
    let Style={}

    switch (Stylesh) {
        case StyleText.large:Style={
          fontWeight:"bold",fontSize:20,textTransform:"capitalize",
          maxWidth:250,paddingTop:3
        }
        break;
        case StyleText.medium:Style={
          fontWeight:"bold",fontSize:14,textTransform:"capitalize",
          maxWidth:250,paddingTop:3
        }
        break;
        case StyleText.small:Style={
          fontSize:14,textTransform:"capitalize",
          maxWidth:250,paddingTop:3
        }
        break;
        case StyleText.sosmall:Style={
          fontSize:11,textTransform:"capitalize",color:" #adad85",
          maxWidth:250,paddingTop:3
        }
        break;
    }
    const UseStyle:any={
      ...Style,...AddStyle
    }

  return (
    <Text style={UseStyle}>
      {textUse}
    </Text>
  )
}


const Text_Item=memo(Text_Combonants) 


export {
  Text_Item,
  StyleText
}