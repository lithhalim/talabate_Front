import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet,{BottomSheetView} from '@gorhom/bottom-sheet';
import {View, ScrollView} from "react-native"
import SelectBottm from './combonants/SelectItemBottmSheet/SelectBottm';
import InformationResturant from './combonants/ResturantInformation/ResturantInformation';
import MenuResturant from './combonants/MenuResturant/MenuResturant';
import { Modal_Create_Context } from './contextApi/SelectItemInResturant';
import GoToBasketSection from './combonants/GoToBasketSection/GoToBasketSection';

function ResturantPage({datause}:any) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [Isopen,setOpen]=useState(false);
    const Modal_ShowBottmSheet=useContext(Modal_Create_Context); 


    // Hight The Bottom Sheat Can Apper
    const snapPoints = useMemo(() => ["1", '70%'], []);
  
    // Just When Change Index Rerun
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        Modal_ShowBottmSheet.setIsVisibleModal(index)
        setOpen(true)
    }, [Isopen]);


    useEffect(()=>{
      if(Modal_ShowBottmSheet.IsVisibleModal==1){
        bottomSheetRef.current?.snapToIndex(1)
      }
    },[Modal_ShowBottmSheet.IsVisibleModal])
  
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <InformationResturant datause={datause}/>
        <MenuResturant datause={datause}/>
      </ScrollView> 
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        onClose={()=>{setOpen(false)}}
      >
        <BottomSheetView>
          <SelectBottm/>
        </BottomSheetView>
      </BottomSheet>

      <GoToBasketSection/>

    </View>
  );
}

export default ResturantPage;


