import React from 'react';
import {View} from "react-native";
import { useSelector } from 'react-redux';
import { Text_Item ,StyleText} from '../../../../../Custom_Combonants/Text_Combonants';
import { Styless } from '../style/style';
import IncreseAndDeacrese from '../../../../../Custom_Combonants/IncreseAndDecreseButton/IncreseAndDeacrese';

function BottonSectio({datause}:any) {
  const {itemId} =datause;

  const select=useSelector((state:any)=>(state.addToCartSlice.allProduct));
  
  let IndexItem=select.findIndex(((obj:any) => obj.itemId == itemId));
  
  let Datause=0;
  if(IndexItem==-1){
    Datause=0
  }else{
    Datause=Number(select[IndexItem].selectItemQuentuty)
  }
  




  return (
    <View style={Styless.containerButton}>
      <Text_Item Stylesh={StyleText.medium} textUse={`Add On Basket ${datause!==0?Number(datause.Price)*Number(Datause):0} $`}
          AddStyle={{color:"white",backgroundColor:"orange",width:220,borderRadius:10
          ,textAlign:"center",paddingTop:10,paddingBottom:10}}/>
         <IncreseAndDeacrese datause={datause} GetNumberItem={Datause}/>
    </View>  
    )
}

export default BottonSectio
