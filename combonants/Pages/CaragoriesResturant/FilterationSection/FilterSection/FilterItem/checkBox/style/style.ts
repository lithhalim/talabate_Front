import { StyleSheet } from "react-native";


export const StyleUseBox=StyleSheet.create({
    firstText:{
        marginLeft:"auto",padding:10,fontSize:15,paddingTop:50
    },
    touchableOpacity:{
        display:"flex",flexDirection:"row-reverse",
        justifyContent:"space-between",
        padding:15,alignItems:"center",elevation:2
    },
    firstIcons:{
        fontSize:14,color:"white",fontWeight:"bold",marginTop:2,marginRight:2
    },
    StyleCheckBox:{
        width:20,height:20,borderWidth:1,borderColor:"black",borderRadius:5,
    },
    ActiveBox:{
        width:20,height:20,borderWidth:1,borderColor:"black",borderRadius:5,backgroundColor:"orange"

    },


})