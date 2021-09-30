/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider} from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import  store  from "./src/redux/index";
import 'react-native-gesture-handler';
import StackTab from './src/data/Router';

const App =  () => {

  return(
    <Provider store={store}>
        <NavigationContainer>
        <StackTab/>
        </NavigationContainer>
    </Provider>
  );
};

export default App;