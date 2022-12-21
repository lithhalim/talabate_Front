import {StyleSheet} from "react-native";

export   const StyleUse=StyleSheet.create({
    StylePagination:{
        width:35,height:30,marginRight:5,display:"flex",flexDirection:"row",
        justifyContent:"center",alignItems:"center",borderRadius:35,backgroundColor:"silver"
    },
    ActiveItem:{
        width:35,height:30,marginRight:5,display:"flex",flexDirection:"row",
        justifyContent:"center",alignItems:"center",borderRadius:35,backgroundColor:"orange"
    },
    container:{
        display:"flex",flexDirection:"row-reverse",padding:10,justifyContent:"center"
    },
    firstText:{
        fontWeight:"bold",fontSize:15,color:"white"
    }
})

