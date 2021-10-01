import React from 'react';
import { createStackNavigator  } from "@react-navigation/stack";
import Land from '../../components/Land';
import WebViewHandler from '../../components/WebViewHandler';
import Featured from '../../components/FeaturedPost';

const Stack = createStackNavigator();
const StackTab = () =>{
    return(
       <Stack.Navigator>
           <Stack.Screen
            options={{
                headerShown: false
            }}
            name="land"
            component={Land} />
           <Stack.Screen
           name="webView"
           options={{
               title:""
           }}
            component={WebViewHandler}/>
           
       </Stack.Navigator>
    );
}
export default StackTab;