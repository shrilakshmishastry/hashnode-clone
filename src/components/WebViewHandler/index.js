import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import WebView from 'react-native-webview';

const WebViewHandler = ({route,navigation}) =>{
    console.log(route.params.url);
    const [load,setLoad] = useState(true);
    return(
        <>
         {
            load ?
            <View style={{
                backgroundColor: '#ffffff'
            }}>
                <ActivityIndicator
                size={"large"}

            />
            </View>

            :
            <></>
        }
        <WebView
        source={{
            uri: route.params.url
        }}
        onLoadEnd={()=>{
           setLoad(false);
        }}
        />

        </>
    );
}

export default WebViewHandler;