import React, { useContext } from 'react';
import {TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {StyleText,Text_Item} from '../../../../../../../../Custom_Combonants/Text_Combonants';
import { Foundation } from '@expo/vector-icons'; 
import axios from 'axios';
import { UploadImage_Context } from '../../contextApi/UploadImageContext';



function ImagesUpload() {  
  const UploadImageContext=useContext(UploadImage_Context);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      //Decouded Image To Send To Cloudinery
      let base64Img = `data:image/jpg;base64,${result.base64}`
      
      //Add your cloud name
  
      // "upload_preset": "<your_upload_preset>",
      let data = {
        "file": base64Img,
        "upload_preset": "dhcqosl5z",
      }

      // 'https://api.cloudinary.com/v1_1/<your_cloud_name>/image/upload'
      let apiUrl = 'https://api.cloudinary.com/v1_1/dhcqosl5z/image/upload';

      try{
        await axios.post(apiUrl,data).then((data)=>{
          UploadImageContext.setImageUploded(data.data.secure_url)
        })

        //Send Data To Perant
      }catch(err){
        Alert.alert("Error To Upload Image")
      }

    }
  }
    
    

  return (
    <TouchableOpacity onPress={pickImage} style={{display:"flex",flexDirection:"row-reverse",width:"80%",marginTop:100}}>
      <Foundation name="photo" size={35} color="silver" />
      <Text_Item Stylesh={StyleText.medium} textUse='Select The Documents From Gallery' AddStyle={{marginRight:10,marginTop:5,color:"silver"}}/>
      {/* <ActivityIndicator size="large" color="orange"  /> */}
    </TouchableOpacity>
  );
}

export default ImagesUpload;
