import React, { useState } from 'react';
import {TouchableOpacity,Modal,Text} from "react-native"
import {StyleText,Text_Item} from '../../../../../../../../Custom_Combonants/Text_Combonants';
import { MaterialIcons } from '@expo/vector-icons'; 
import CamiraPage from './TackPhoto/combonants/TackPhotoPage/TackPhotoButton/TakePhotoPage';


function CamiraPhoto() {
  const [modalVisible, setModalVisible] = useState(false);

  const GoToCamera=()=>{
    setModalVisible(true)
  }
  return (
        <>
            <TouchableOpacity 
              onPress={GoToCamera}
                  style={{backgroundColor:"rgb(255, 200, 65)",display:"flex",
                  justifyContent:"center",flexDirection:"row",padding:15,width:"60%",
                  borderRadius:30,alignItems:"center",position:"absolute",top:-35,right:80}}>
                    <Text_Item Stylesh={StyleText.large} textUse='Use Camera' 
                              AddStyle={{color:"white",marginRight:8}} />
                    <MaterialIcons name="photo-camera" size={38} color="white" />
            </TouchableOpacity>

            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <CamiraPage/>
            </Modal>
        </>
  )
}

export default CamiraPhoto
