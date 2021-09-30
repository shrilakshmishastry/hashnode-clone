import  React, { useState }  from "react";
import { Image,StyleSheet,PixelRatio,Dimensions } from "react-native";
import ErrorAvatar from "../../presentational/ErrorAvatar";

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');


const LeftContent = ({ url,name }) => {
    const [error,setError] = useState(false);
    return (
        <>

        {
            error ?
            <ErrorAvatar/>
            :
            <Image
            accessible={true}
            accessibilityLabel={`${name} profile`}
            source={{ uri: url }}
            style={styles.img}
            onError={()=>setError(true)}
        />
        }
    </>
    );

}
export default LeftContent;

const styles = StyleSheet.create({
    img:{
        height:PixelRatio.roundToNearestPixel((height *8)/100),
        width:PixelRatio.roundToNearestPixel((width *15)/100),
        borderRadius: PixelRatio.roundToNearestPixel((width*10)/100),
        marginRight: PixelRatio.roundToNearestPixel((width*5)/100),
    },
});