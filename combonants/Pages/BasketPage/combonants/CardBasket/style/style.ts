import {StyleSheet} from "react-native";

export const Style =StyleSheet.create({
    containerCartBasket:{
        padding:15,display:"flex",elevation:10,
        shadowOpacity: 0.25,margin:10,marginTop:15,
        shadowColor: "black",backgroundColor:"white",marginBottom: -5
    },
    firstView:{
        display:"flex",flexDirection:"row",
        justifyContent:"space-between",alignItems:"center"
    },
    firstImage:{
        width:65,height:65,borderRadius:10
    },




    secandView:{
        display:"flex",flexDirection:"row",maxWidth:"90%",marginLeft:"auto"
    },
    firstText:{
        width:60,marginLeft:60,fontWeight:"bold"
    }

})