import React from 'react';
import {View} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';


function PaymentInformation({selectData}:any) {

  let TotalPrice=selectData.reduce((acc:any,data:any)=>(acc+(Number(data.Price)*Number(data.selectItemQuentuty))),0)
  let datause=[{name:"Total",value:`${TotalPrice} Jod`},{name:"Delivery fee",value:"2.5 jod"},{name:"service cost",value:"1 jod"},{name:"order value",value:`${TotalPrice+2.5+1} Jod`}]

  return (
    <View style={{width:"100%",padding:15}}>
        <Text_Item Stylesh={StyleText.large} textUse="Payment summary"  AddStyle={{marginLeft:"auto",paddingBottom:15}}/>
        <View>
            {datause.map(({name,value},i)=>(
                <View key={i} style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",paddingBottom:8}}>
                    <Text_Item Stylesh={StyleText.medium} textUse={name} AddStyle={{fontWeight:"normal"}} />
                    <Text_Item Stylesh={StyleText.medium} textUse={value} />
                </View>
            ))}
        </View>
    </View>
  )
}

export default PaymentInformation