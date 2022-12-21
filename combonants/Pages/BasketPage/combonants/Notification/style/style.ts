import {StyleSheet} from "react-native";
export  const Style=StyleSheet.create({
    container:{
        backgroundColor:"white",marginTop:15,display:"flex",
        flexDirection:"column",alignItems:"flex-end",padding:15
    },
    firstView:{
        display:"flex",flexDirection:"row",alignItems:"center",
        width:120,justifyContent:"space-between"
    },
    firstIcon:{
        fontSize:20,marginTop:7,color:"black"
    },
    firstText:{
        fontSize:13,fontWeight:"normal"
    }
});
