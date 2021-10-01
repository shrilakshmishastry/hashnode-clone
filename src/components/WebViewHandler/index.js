import React, { useState } from 'react';
import { Dimensions,PixelRatio } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import WebView from 'react-native-webview';
import mainStyle from '../../config/mainStyle';

const dimension = Dimensions.get('window');
const height = dimension.height;

const WebViewHandler = ({route,navigation}) =>{
    const [load,setLoad] = useState(true);
    return(
        <>
         {
            load ?

            <ActivityIndicator
                color={mainStyle.primaryBg.backgroundColor}
                size={'large'}
                style={[
                    mainStyle.activityIndicatorStyle
                ]}
            />


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