import  React  from "react";
import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const ErrorAvatar = () =>{
    return(
        <Avatar.Icon
            size={styles.avatrSize.fontSize}
            icon={'account'}
        />
    );
}
export default ErrorAvatar;

const styles = StyleSheet.create({
    avatrSize:{
        fontSize: PixelRatio.roundToNearestPixel((height *7)/100)
    }
});