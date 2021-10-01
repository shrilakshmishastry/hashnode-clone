const { StyleSheet, PixelRatio, Dimensions } = require("react-native");

const dimension = Dimensions.get('window');
const height = dimension.height;
const width = dimension.width;

const mainStyle = StyleSheet.create({
    primaryBg: {
        backgroundColor: '#2962FF'
    },
    secondaryColor: {
        color: '#616161'
    },
    textLg: {
        fontSize: PixelRatio.roundToNearestPixel((height * 2.9) / 100)
    },
    textMd: {
        fontSize: PixelRatio.roundToNearestPixel((height * 2.5) / 100)
    },
    textsm: {
        fontSize: PixelRatio.roundToNearestPixel((height * 1.9) / 100)
    },
    textXs: {
        fontSize: PixelRatio.roundToNearestPixel((height * 2) / 100)
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    noConnectionOuterView:{
        flex:1,
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
});

export default mainStyle;