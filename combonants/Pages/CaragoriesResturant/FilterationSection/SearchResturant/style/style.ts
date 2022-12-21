import {StyleSheet} from "react-native";

export const Style=StyleSheet.create({
    container:{
        position:"relative",zIndex: 1500
    },
    firstView:{
        width:"85%",display:"flex",alignItems:"center",
        marginLeft:"auto",marginRight:"auto",
        flexDirection: "row",height:40,marginBottom:15,marginTop:-15,
        elevation:2,backgroundColor:"rgba(0,0,0,.05)",borderRadius:2
    },
    firstText:{
        width:"87%",marginRight:15
    },
    secandView:{
        position:"absolute",backgroundColor:"white",
        right:30,top:30,width:"85%",borderRadius:5,padding:10
    }
})