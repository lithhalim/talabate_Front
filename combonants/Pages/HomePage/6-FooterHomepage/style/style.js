import {StyleSheet} from "react-native";

export const Stylee=StyleSheet.create({
    containerStyle:{
        display:"flex",flexDirection:"row-reverse",padding:5,backgroundColor:"white",justifyContent:"space-between",paddingLeft:50,paddingRight:50,paddingTop:10,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 24
    },
    Icon:{
        display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"
    }

})