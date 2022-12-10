import {StyleSheet} from "react-native";

export const Styles=StyleSheet.create({
containerName:{
    display:"flex",flexDirection:"row-reverse",
    justifyContent: "space-between",padding:15,alignItems:"center",
    paddingBottom:5,borderTopLeftRadius:50
},
discription:{
    color:"silver",fontSize:10,marginLeft:"auto"
},
//------------------------------------------- icons section-------------------------------------------//
StarContaier:{
    width:160,display:"flex",flexDirection:"row-reverse",marginLeft:"auto",paddingLeft:15
},
deleveryIcon:{
    display:"flex",flexDirection:"row-reverse",padding:15,paddingTop:10
},
containerIconss:{
    display:"flex",flexDirection:"row-reverse",alignItems:"center",marginRight:10
},
textIcons:{
    fontSize:10,fontWeight:"bold",marginRight:2
},
//------------------------------------------search Section ---------------------------------------------//
containerSearch:{
    display:"flex",flexDirection:"row-reverse",margin: 15,backgroundColor:"orange",padding:3,borderRadius:10,
}
})