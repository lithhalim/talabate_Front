import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './combonants/Navigation/StackNavigation/stackNavigator';
import { AuthnticationProvider } from './combonants/contextApi/Authntication_Context';


function App() {
  return (
    <AuthnticationProvider>
        <NavigationContainer>
              <StackNavigator/>
        </NavigationContainer>
    </AuthnticationProvider>
  );
}

export default App;
