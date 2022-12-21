import React, { useState } from "react";


//use to create the context 
export const Filtration_Create_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}


export function FiltrationProvider(props:ContextChildreen) {

    const [ModalFilter,setModalFilter]=useState<any>(false);
    const [radioData,setRadioData]=useState("");
    const [checkBoxData,setcheckBoxData]=useState([]);
    const [WhereData,setWhereData]=useState<any>("");
    const [NewFilter,setNewFilter]=useState("")
    
      
  return (
    <Filtration_Create_Context.Provider 
        value={{ModalFilter,setModalFilter,
        radioData,setRadioData,
        checkBoxData,setcheckBoxData,
        WhereData,setWhereData,
        NewFilter,setNewFilter}}>
        {props.children}
    </Filtration_Create_Context.Provider>
  ) 
}
