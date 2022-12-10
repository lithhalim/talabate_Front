import React, { useContext } from 'react';
import UploadImageModal from './UploadImagePage/UploadImageModal';
import {TouchableOpacity,Text,View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { UploadImage_Context } from './contextApi/UploadImageContext';




function UploadImageButton({TypeData}:any) {

    const UploadImageContext=useContext(UploadImage_Context)

    const uploadImage=()=>{
        UploadImageContext.setShowUploadImage(true)
    }
  return (
        <>{
            TypeData!=="signin"?
                <View>
                    <UploadImageModal/>
                    <TouchableOpacity onPress={uploadImage}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:10,backgroundColor:"silver",justifyContent:"center",marginTop:15,width:"100%",marginLeft:"auto",marginRight:"auto",borderRadius:5}}>
                            <Text style={{fontWeight:"bold", color: "white",marginRight:5}}>
                                Upload Image Here
                            </Text>
                            <MaterialIcons name="add-a-photo" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            :<></>
        }</>
)
}

export default UploadImageButton
