import React from 'react';
import {View} from "react-native";
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';
import { Style } from './style/style';


function PaymentInformation({selectData}:any) {

  let TotalPrice=selectData.reduce((acc:any,data:any)=>
  (acc+(Number(data.price)*Number(data.selectitemquentuty))),0);

  let datause=[{name:"Total",value:`${TotalPrice} Jod`},
  {name:"Delivery fee",value:"2.5 jod"},{name:"service cost",value:"1 jod"},
  {name:"order value",value:`${TotalPrice+2.5+1} Jod`}];

  return (
    <View style={Style.firstView}>
        <Text_Item Stylesh={StyleText.large} textUse="Payment summary"  
          AddStyle={Style.firstText}/>
        <View>
            {datause.map(({name,value},i)=>(
                <View key={i} style={Style.secandView}>
                    <Text_Item Stylesh={StyleText.medium} textUse={name} 
                    AddStyle={{fontWeight:"normal"}} />
                    <Text_Item Stylesh={StyleText.medium} textUse={value} />
                </View>
            ))}
        </View>
    </View>
  )
}

export default PaymentInformation