import React ,{useContext}from 'react';
import {Modal} from "react-native";
import {View,Image} from "react-native";
import ImagesUpload from './ItemInModal/1-UploadPhoto';
import InformationUpload from './ItemInModal/2-InformationUpload';
import CamiraPhoto from './ItemInModal/3-CamiraPhoto';
import { UploadImage_Context } from '../contextApi/UploadImageContext';


function UploadImageModal() {
    const UploadImageContext=useContext(UploadImage_Context);


    const CloseModel=()=>{
        UploadImageContext.setShowUploadImage(false)
    }

  return (
    <Modal
    transparent={true}
    animationType="slide"
    visible={UploadImageContext.ShowUploadImage}
    onRequestClose={CloseModel}
    >
        <View style={{backgroundColor:"rgb(48, 116, 183)",paddingTop:100,height:"100%"}}>
            
            <View style={{height:250,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                 <Image source={{ uri: UploadImageContext.ImageUploded }} style={{ width: 250, height: 250,borderColor:"orange",borderWidth:1,borderRadius:200,marginBottom:80 }} />
            </View>
            <InformationUpload/>
            <View style={{backgroundColor:"white",height:"40%",position: "relative"}}>
                <CamiraPhoto/>
                <ImagesUpload />
            </View>
        </View>
    </Modal>
)
}

export default UploadImageModal
