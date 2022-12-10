import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../../Pages/RegusterFile/Signin_File/Signin';
import SignupSection from '../../Pages/RegusterFile/Signup_File/Signup';
import MyDrawer from '../DrawerNavigation/DrawerNavigation';
import CamiraPage from '../../Pages/RegusterFile/Combonants/MiddelSection/combonant/UploadImage/UploadImagePage/ItemInModal/TackPhoto/combonants/TackPhotoPage/TackPhotoButton/TakePhotoPage';

const Stack = createNativeStackNavigator();


function StackNavigator() {
  return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="drawer" component={MyDrawer}  />
                <Stack.Screen name="CamiraPage" component={CamiraPage}  options={{headerShown:false}} />
                    <Stack.Screen name="signin" component={Signin}  options={{headerShown:false}} />
                <Stack.Screen name="signup" component={SignupSection}  options={{headerShown:false}}/>
        </Stack.Navigator>
  );
}

export default StackNavigator;
