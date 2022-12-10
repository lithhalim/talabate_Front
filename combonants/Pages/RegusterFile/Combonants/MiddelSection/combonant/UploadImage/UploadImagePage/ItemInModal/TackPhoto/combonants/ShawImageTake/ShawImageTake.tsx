import React from 'react';
import {SafeAreaView,Image,View} from "react-native";
import DeleteImage from './combonants/DeleteImage/DeleteImage';
import SaveUseImage from './combonants/SaveImage/SaveUseImage';
import ShareImage from './combonants/ShareImage/ShareImage';


function ShawImageTake(
  {photo,hasMediaLibraryPermission,setPhoto}:any) {


  return (
    <SafeAreaView >
        <Image  style={{width:"100%",height:"100%"}} 
        source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style={{display:"flex",flexDirection:"row",position:"absolute",left:0,bottom:25,width:"100%",justifyContent:"space-around"}}>
          <ShareImage  photo={photo} setPhoto={setPhoto} />
              {hasMediaLibraryPermission ?
                <SaveUseImage  photo={photo} setPhoto={setPhoto} /> : undefined}
          <DeleteImage photo={photo} setPhoto={setPhoto}/>
        </View>
    </SafeAreaView>
)
}

export default ShawImageTake
