import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './combonants/Navigation/StackNavigation/stackNavigator';
import { AuthnticationProvider } from './combonants/contextApi/Authntication_Context';


import { Store } from "./combonants/redux/store/store"
import { Provider } from 'react-redux';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri:"http://192.168.8.101:5000/graphql",
  cache: new InMemoryCache(),
})




function App() {
  return (
    <ApolloProvider client={client}>
        <Provider store={Store}>
            <AuthnticationProvider>
                  <NavigationContainer>
                          <StackNavigator/>
                  </NavigationContainer>
            </AuthnticationProvider>
        </Provider >
    </ApolloProvider>

  );
}

export default App;
