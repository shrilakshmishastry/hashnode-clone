import { StyleSheet,Dimensions,PixelRatio } from "react-native";

const dimension = Dimensions.get('window');
const height = dimension.height;
const width  = dimension.width ;

const styles = StyleSheet.create({
    cardTitle:{
        display: "flex",
        flexDirection: 'row',
    },
    img:{
        height:PixelRatio.roundToNearestPixel((height *25)/100),
        width:PixelRatio.roundToNearestPixel((width *80)/100),
        borderRadius: PixelRatio.roundToNearestPixel((width*10)/100),
        marginTop:PixelRatio.roundToNearestPixel((height *2)/100),
    },
    cardOuter:{
        borderTopStartRadius: PixelRatio.roundToNearestPixel((height *2)/100),
        borderBottomEndRadius: PixelRatio.roundToNearestPixel((height *2)/100),
        borderBottomStartRadius:PixelRatio.roundToNearestPixel((height *2)/100),
        borderTopEndRadius: PixelRatio.roundToNearestPixel((height *2)/100),
        marginBottom:PixelRatio.roundToNearestPixel((height *3)/100),
        padding: PixelRatio.roundToNearestPixel((height *2)/100),
    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderTopWidth: PixelRatio.roundToNearestPixel((width *0.5)/100),
        borderTopColor: '#e9e9e9',
        marginTop: PixelRatio.roundToNearestPixel((height *2)/100)
    },
    iconsBinder:{
        flexDirection: 'row'
    },
    textWithIcon:{
        marginTop: PixelRatio.roundToNearestPixel((height *2)/100)
    },
    viewNameBinder:{
        marginTop:PixelRatio.roundToNearestPixel((height *1)/100)
    }
});
export default styles;