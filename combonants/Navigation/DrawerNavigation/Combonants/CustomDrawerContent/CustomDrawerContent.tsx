import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HeaderDrawer from "../headerDrawer/HeaderDrawer";
import {Style} from "../../style/style";
import SignoutDarkMode from "./SignoutDarkMode";



function CustomDrawerContent(props:any) {

    return (
      <DrawerContentScrollView {...props} style={Style.containerCustom}>
        <HeaderDrawer/>
        <DrawerItemList {...props} />

        <SignoutDarkMode/>

      </DrawerContentScrollView>
    );
  }
  

export default CustomDrawerContent