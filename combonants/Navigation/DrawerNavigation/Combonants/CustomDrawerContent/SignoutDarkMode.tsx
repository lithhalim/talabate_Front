import React, { useContext, useState } from 'react';
import {View,TouchableOpacity,Switch} from "react-native";
import {StyleText,Text_Item} from '../../../../Custom_Combonants/Text_Combonants';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Authntication_Create_Context } from '../../../../contextApi/Authntication_Context';
import AsyncStorage  from '@react-native-async-storage/async-storage';


function SignoutDarkMode() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const UserAuthnticate=useContext(Authntication_Create_Context);


    const Signout=()=>{
        let SaveUser= async () => {
            UserAuthnticate.setAllUserData(false)
             await AsyncStorage.removeItem("saveReguster");
          };
          SaveUser();     
    }

  
  return (
    <View style={{marginTop:150}}>
        <View style={{display:"flex",flexDirection:"row-reverse",padding:20,alignItems:"center",paddingBottom:10}}>
            <Text_Item Stylesh={StyleText.medium} textUse="Dark Mode" AddStyle={{marginLeft:10,fontSize:15}}/>
            <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
        {UserAuthnticate.AllUserData!==false?
        <TouchableOpacity  onPress={Signout}
            style={{marginRight:20,display:"flex",flexDirection:"row",
            justifyContent:"flex-end",alignItems:"center"}}>
        <Text_Item Stylesh={StyleText.medium} textUse="Sign Out" AddStyle={{color:"black",fontSize:15,marginRight:5}}/>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
        </TouchableOpacity>:<></>}
    </View>
)
}

export default SignoutDarkMode
