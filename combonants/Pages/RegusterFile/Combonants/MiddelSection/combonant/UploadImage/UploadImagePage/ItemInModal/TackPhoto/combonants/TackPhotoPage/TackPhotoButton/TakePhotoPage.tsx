import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, SafeAreaView } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import ShawImageTake from '../../ShawImageTake/ShawImageTake';
import { Text_Item,StyleText } from '../../../../../../../../../../../../Custom_Combonants/Text_Combonants';
import { Entypo } from '@expo/vector-icons'; 



function CamiraPage() {
  let cameraRef = useRef<any>();
  const [hasCameraPermission, setHasCameraPermission] = useState<any>();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<any>();
  const [photo, setPhoto] = useState<any>();


//-------------------------------Camera And Media Permission -----------------------------//
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);


  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  //----------------------------------Tack Picture -------------------------------------//
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };


  

  return (
    <>
      {photo?<ShawImageTake 
          photo={photo} setPhoto={setPhoto}
          hasMediaLibraryPermission={hasMediaLibraryPermission}/>:

          <Camera  ref={cameraRef} style={{flex:1,alignItems:"center",justifyContent:"center"}}>
              <Pressable  onPress={takePic} style={{position:"absolute",left:"50%",bottom:50,backgroundColor:"white",borderRadius:15,padding:10,transform:[{translateX:50}]}}>
                <View style={{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                    <Text_Item Stylesh={StyleText.medium} textUse="Tack Picture" AddStyle={{marginRight:5,marginBottom:5}}/>
                    <Entypo name="picasa" size={22} color="black" />
                </View>
              </Pressable>
              <StatusBar style="auto" />
          </Camera>}
    </>
  )
}

export default CamiraPage

