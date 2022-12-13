import React, { useContext } from 'react';
import {View,Image} from "react-native"
import { Style } from './style/style';
import HeaderCombonant from "./combonants/headerCombonant"
import FavorateChoppping from './combonants/FavorateChoppping';
import { Authntication_Create_Context } from '../../../../contextApi/Authntication_Context';


import logo from "../../../../Pages/RegusterFile/Assest/LogoSection.png"
import { Text_Item,StyleText } from '../../../../Custom_Combonants/Text_Combonants';

function HeaderDrawer() {
  const UserAuthnticate=useContext(Authntication_Create_Context);

  return (
    <>
          {UserAuthnticate.AllUserData !==false?
              <View style={Style.containerAll} >
                  <HeaderCombonant datause={UserAuthnticate.AllUserData} />
                  <FavorateChoppping/>
              </View>:
              <View style={{backgroundColor:"orange",height:280,marginTop:-50,marginBottom:10}}>
                <Image source={{uri:Image.resolveAssetSource(logo).uri}} style={{width:150,height:150,marginLeft:"auto",marginRight:"auto",marginTop:50}}/>
                <Text_Item Stylesh={StyleText.medium} textUse="You Need To Reguster To Get Extra Feature Welcome" AddStyle={{textAlign:"center",maxWidth:"100%",padding:10}}/>
              </View>}
    </>
)
}

export default HeaderDrawer