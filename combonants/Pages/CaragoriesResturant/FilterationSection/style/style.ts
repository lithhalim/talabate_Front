import {StyleSheet} from "react-native";

export const Style=StyleSheet.create({
    container:{
        marginBottom:30,display:"flex",flexDirection:"row-reverse",
        justifyContent:"space-between",paddingLeft:30,paddingRight:30
    },
    touchableOpacity:{
        display:"flex",flexDirection:"row",
        backgroundColor:"rgba(0,0,0,.05)",padding:8,borderRadius:10
    },
    text:{
        marginLeft:5,marginRight:5
    }
})