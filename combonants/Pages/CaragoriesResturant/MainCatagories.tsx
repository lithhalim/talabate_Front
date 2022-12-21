import React from 'react'
import CatagoriesResturant from './CatagoriesResturant'
import { FiltrationProvider } from './ContextApi/FilterContext'

function MainCatagories(props:any) {
    const WHEREDATA=props.route.params?.WHEREDATA!==undefined?
      props.route.params.WHEREDATA:
      "categories IN ('Hamburger','Pizza','Healthy','Pasta')";

  return (
    <FiltrationProvider>
        <CatagoriesResturant WHEREDATA={WHEREDATA}/>
    </FiltrationProvider>
  )
}

export default MainCatagories