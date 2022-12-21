import React from 'react';
import {View} from "react-native";
import { useSelector } from 'react-redux';
import { Text_Item ,StyleText} from '../../../../../Custom_Combonants/Text_Combonants';
import { Styless } from '../style/style';
import IncreseAndDeacrese from '../../../../../Custom_Combonants/IncreseAndDecreseButton/IncreseAndDeacrese';

function BottonSectio({datause}:any) {
  const {itemid} =datause;

  const select=useSelector((state:any)=>(state.addToCartSlice.allProduct));
  
  let IndexItem=select.findIndex(((obj:any) => obj.itemid == itemid));
  
  let Datause=0;
  if(IndexItem==-1){
    Datause=0
  }else{
    Datause=Number(select[IndexItem].selectitemquentuty)
  }
  



  return (
    <View style={Styless.containerButton}>
      <Text_Item Stylesh={StyleText.medium} 
        textUse={`Add On Basket ${datause!==0?Number
          (datause.price)*Number(Datause):0} $`}
            AddStyle={Styless.TextStyle}/>
         <IncreseAndDeacrese datause={datause} 
            GetNumberItem={Datause}/>
    </View>  
    )
}

export default BottonSectio
