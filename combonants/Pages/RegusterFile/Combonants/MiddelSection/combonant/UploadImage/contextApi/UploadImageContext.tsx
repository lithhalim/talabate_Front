import React, { useState } from "react";

//use to create the context 
export const UploadImage_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}

export function UploadImage_Provider(props:ContextChildreen) {
    const [ShowUploadImage,setShowUploadImage]=useState(false);
    const [ImageUploded,setImageUploded]=useState("https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=");
      
  return (
    <UploadImage_Context.Provider value={{ShowUploadImage,setShowUploadImage,ImageUploded,setImageUploded}}>
        {props.children}
    </UploadImage_Context.Provider>
  ) 
}
