import React, { useState } from "react";

//use to create the context 
export const Modal_Create_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}


export function ItemSelectProvider(props:ContextChildreen) {

    const [IsVisibleModal,setIsVisibleModal]=useState(0);
    const [DataItem,setDataItem]=useState(false);

    const [SearchInput,setSearchInput]=useState("")
  
  return (
    <Modal_Create_Context.Provider value={{IsVisibleModal,setIsVisibleModal,DataItem,setDataItem,SearchInput,setSearchInput}}>
        {props.children}
    </Modal_Create_Context.Provider>
  ) 
}
