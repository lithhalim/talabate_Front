import React,{memo} from 'react';
import { TouchableOpacity,Text,View, ActivityIndicator } from 'react-native';
import {orange} from "../MainColor/MainColor";


enum ButtonEnum{
  orange,
  white
}

interface ButtonInterface{
  Stylesh:ButtonEnum,
  textUse:string,
  AddStyle?:React.CSSProperties,
  handleSubmit:any,
  LoadingState:boolean
}

function Button_Combonants({
  Stylesh,textUse,
  AddStyle,handleSubmit,
  LoadingState}:ButtonInterface) {


let Style={}

switch (Stylesh) {
        case ButtonEnum.orange:Style={
          backgroundColor: orange,color: "white",borderRadius: 10,
          width: 150,textAlign: "center",fontWeight: "bold",padding:10,
          marginLeft: "auto",marginRight: "auto"
        }
        break;
        case ButtonEnum.white:Style={
          backgroundColor: "white",color: orange,borderRadius: 10,
          width: 150,textAlign: "center",fontWeight: "bold",padding:10,
          marginLeft: "auto",marginRight: "auto",borderWidth: 2,borderColor: orange
        }
        break;
}


const UseStyle:any={...Style,...AddStyle}

return (
    <>
    {LoadingState==false?
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={UseStyle}>
          {textUse}
        </Text>
      </TouchableOpacity>
    :<View style={UseStyle}>
        <ActivityIndicator size="large" color={UseStyle.color} />
     </View>}
    </>
  )
}


const Button_Item=memo(Button_Combonants) 
export {
  Button_Item,
  ButtonEnum
}