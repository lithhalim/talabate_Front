import React, { useEffect, useState } from "react";
import AsyncStorage  from '@react-native-async-storage/async-storage';


//use to create the context 
export const Authntication_Create_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}


export function AuthnticationProvider(props:ContextChildreen) {

    const [AllUserData,setAllUserData]=useState<any>(false);
    
    
    useEffect(()=>{
      let SaveUser= async () => {
        let data=   await AsyncStorage.getItem("saveReguster");
        if(data){
          setAllUserData(JSON.parse(data))
        }
      };
      SaveUser(); 
    },[])

  
  return (
    <Authntication_Create_Context.Provider value={{AllUserData,setAllUserData}}>
        {props.children}
    </Authntication_Create_Context.Provider>
  ) 
}
