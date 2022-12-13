import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonBasket from './combonants/ButtonBasket/ButtonBasket';
import CardBasket from './combonants/CardBasket/CardBasket';
import HeaderBasket from './combonants/HeaderBasket/HeaderBasket';
import Notification from "./combonants/Notification/Notification";
import PaymentInformation from './combonants/PaymentSummary/PaymentInformation';
import EmptyBasket from './EmptyBasket/EmptyCombonatans';


function BasketPage() {
  const selectData=useSelector((state:any)=>(state.addToCartSlice.allProduct));


  return (
    <>
      <HeaderBasket/>
          {selectData.length>0?
              <>
                <ScrollView style={{backgroundColor:"white"}}>
                    {selectData.length>0? selectData.map((data:any,i:number)=>(
                      <CardBasket key={i} data={data}/>
                    )):<></>}
                    <Notification/>
                    <PaymentInformation selectData={selectData}/>
                </ScrollView>
                <ButtonBasket />
              </>
          :<EmptyBasket/>}
    </>
  )
}

export default BasketPage