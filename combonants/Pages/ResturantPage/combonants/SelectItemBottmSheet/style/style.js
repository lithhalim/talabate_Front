import {StyleSheet} from "react-native";

export const Styless =StyleSheet.create({
    containerName:{
        display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",padding:15,
    },

    //----------------------------------------icons Section -----------------------------------//
    containerIocns:{
        display:"flex",flexDirection:"row-reverse",justifyContent:"space-between"
        ,paddingLeft:15,paddingRight:15
    },
    SecandContaner:{
        display:"flex",flexDirection:"row-reverse",alignItems:"center"
    },
    TextStyle:{
        paddingLeft:2,fontSize:11
    },

    //------------------------------------Buttons Section ----------------------------------------//
    containerButton :{
        display:"flex",flexDirection:"row",justifyContent:"space-between",padding:15,
        marginTop:20
    },
    InnnerContainer:{
        display:"flex",flexDirection:"row",width:110,
        justifyContent:"space-between",alignItems:"center",backgroundColor:"rgba(153, 153, 102,.1)",
        borderRadius:15,height:40,paddingLeft:5,paddingRight:5
    },
    textStyle:{
        color:"white",backgroundColor:"orange",width:220,borderRadius:10
          ,textAlign:"center",paddingTop:10,paddingBottom:10
    },

    //----------------------------------SelectButton -----------------------------------------------//
    container:{
        zIndex:10,elevation:10
    },
    firstImage:{
        height:220,width:"100%"
    }
})