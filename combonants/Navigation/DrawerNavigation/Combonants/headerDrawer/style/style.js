import {StyleSheet} from "react-native";
import {orange,orange2,pink,silver} from "../../../../../MainColor/MainColor"

export const Style=StyleSheet.create({
    containerAll:{
        marginTop:-45,padding:10,paddingTop:60,backgroundColor:orange
    },
    containerHeader:{
        display:"flex",flexDirection:"row-reverse",alignItems:"center"
    },
    ImageHeader:{
        width:80,height:80,borderRadius:80/2,borderWidth:2,borderColor:"white"
    },

    //----------------------------------Favorate Section ----------------------------//
    containerFavorate:{
        display:"flex",flexDirection:"row-reverse",paddingTop:20,
        paddingBottom:10,justifyContent:"space-between"
    },
    textStyle:{
        color:"white",textAlign:"center"
    }
})