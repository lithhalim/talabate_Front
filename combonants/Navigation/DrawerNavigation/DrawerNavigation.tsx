import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import{View} from "react-native";
import { DaraUsing } from './dataUsing/dataUsing';
import  { StyleText,Text_Item } from '../../Custom_Combonants/Text_Combonants';
import CustomDrawerContent from './Combonants/CustomDrawerContent/CustomDrawerContent';
import { Style } from './style/style';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
        <Drawer.Navigator
            screenOptions={{
              drawerActiveBackgroundColor:"rgba(250,250,250,.6)",
              drawerType:'back',
              headerShown: false
            }}
            drawerContent={(props) => 
            <CustomDrawerContent {...props} />}>
                {DaraUsing.map(({path,componant,icon,name},i)=>(
                  <Drawer.Screen key={i} name={path} component={componant} options={{
                    drawerIcon: () => (
                        <View style={Style.Container}>
                                {icon}
                                <Text_Item Stylesh={StyleText.medium} 
                                  textUse={name} AddStyle={Style.textStyle}/>
                        </View>
                    ),
                }}/>
              ))}
        </Drawer.Navigator>
  );
}




export default MyDrawer