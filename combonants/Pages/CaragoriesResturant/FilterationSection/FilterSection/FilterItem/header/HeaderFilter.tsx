import React, { useContext } from 'react';
import {View,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Text_Item ,StyleText} from '../../../../../../Custom_Combonants/Text_Combonants';
import { Filtration_Create_Context } from '../../../../ContextApi/FilterContext';
import { Style } from './style/style';


function HeaderFilter() {
    const ContextModel=useContext(Filtration_Create_Context);

    const CloseModel=()=>{
        ContextModel.setModalFilter(false)
    }
  return (
    <View style={Style.container}>
        <TouchableOpacity onPress={CloseModel}>
            <AntDesign name="closecircleo" 
              size={28} color="black" />
        </TouchableOpacity>
            <Text_Item Stylesh={StyleText.large} 
              textUse="Specific Search" />
        <TouchableOpacity>
            <Text_Item Stylesh={StyleText.medium} 
            textUse="Clear All" 
            AddStyle={Style.firstText} />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderFilter