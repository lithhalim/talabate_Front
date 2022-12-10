import {StyleSheet} from "react-native";

export  const Style=StyleSheet.create({
container:{
    display:"flex" ,flexDirection:"row-reverse",padding:10,paddingBottom:5,
    shadowColor: "silver",
    elevation: 3,borderRadius:5,
    margin:5,width:"93%",marginLeft:"auto",marginRight:"auto"
    },
Images:{
    width:80,height:70,marginLeft:10
},
discription:{
    color:"silver",fontSize: 10  
},
price:{
    fontSize:13,color:"orange",marginLeft:"auto"
}
})