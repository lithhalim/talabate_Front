import { StyleSheet } from "react-native";
import {orange,pink,silver} from "../../../../MainColor/MainColor";


export const Stylee=StyleSheet.create({
    containerHeader:{
        display:"flex",flexDirection:"row",justifyContent:"space-between",padding:9,backgroundColor:pink,
        paddingTop:50
    },
    ContainerIcon:{
        width:40,height:40,backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:30
    },
    NumberDown:{
        position:"absolute",right:-2,bottom:-2,width:18,height:18,backgroundColor:orange,textAlign:"center",borderRadius:10,fontWeight:"bold",color:"white",fontSize:13
    }

})