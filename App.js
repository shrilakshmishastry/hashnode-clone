/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider} from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import  store  from "./src/redux/index";
import 'react-native-gesture-handler';
import StackTab from './src/data/Router';
import SplashScreen from 'react-native-splash-screen';
import { useNetInfo  } from "@react-native-community/netinfo";
import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import mainStyle from './src/config/mainStyle';

const App =  () => {
useEffect(()=>{
  SplashScreen.hide();
},[]);

const netInfo = useNetInfo();

if(netInfo.isConnected){
  return(
    <Provider store={store}>
        <NavigationContainer>
        <StackTab/>
        </NavigationContainer>
    </Provider>
  );
}
return (
  <View style={mainStyle.noConnectionOuterView}>
    <Text>
     Please Connect to Internet
    </Text>
    <ActivityIndicator/>
  </View>
);
};

export default App;
