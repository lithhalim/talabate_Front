import {StyleSheet} from "react-native";

export  const Style=StyleSheet.create({
container:{
    display:"flex",flexDirection:"row-reverse",
    justifyContent:"space-between",marginBottom:15,zIndex:1
},
presapple:{
    display:"flex",flexDirection:"row-reverse",
    elevation:15,shadowColor:"black",shadowOpacity:2
},
firstImage:{
    width:75,height:75,borderRadius:15,marginLeft:10
},
firstView:{
    display:"flex",flexDirection:"row-reverse",alignItems:"center",marginTop:5
},
firstIcons:{
    fontSize:18,color:"orange",marginLeft:5
},
secandIocns:{
    fontSize:20,color:"orange",marginTop:10,marginLeft:25
}
})