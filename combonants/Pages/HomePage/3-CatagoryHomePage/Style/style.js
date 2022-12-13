import { StyleSheet } from  "react-native";

export  const SStyless=StyleSheet.create({
  containerAll:{
   padding:10,paddingBottom:20
  }  ,
  textHeader:{
    marginLeft:"auto",padding:10,fontStyle:"italic",fontSize:15
  }

  //----------------------------------Card Section ----------------------------------------------------//
  ,
  containerCard:{
    display:"flex",justifyContent:"center",flexDirection:"row",padding:5,
    marginBottom:5
  },
  CardSection:{
    display:"flex",flexDirection:"row",justifyContent:'space-between',flexWrap:"wrap"
  },
  NameCard:{
    position:"absolute",left:"0%",bottom:10,zIndex:10,width:"100%",
    textAlign:"center",color:"white",marginLeft:5
  }  ,mainImage:{
    width:114,height:100,borderRadius:5
  },

})