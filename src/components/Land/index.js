import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, Text, View,StyleSheet, Dimensions, PixelRatio } from "react-native";
import { FAB } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { typeOfArticles } from "../../config/apis";
import CardToShowContent from "../../presentational/CardToShowContent";
import { GET_FEATURED_POST_ACTION, GET_RECENT_POST_ACTION, GET_RELEVANT_POST_ACTION } from "../../redux/action-type";
import { getFeaturedPostAction } from "../../redux/action/getFeaturedPostAction";

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const Land = ({navigation})=>{
   const dispatch = useDispatch();
    const [pageCount,setPageCount]= useState(1);
    const [endRached,setEndReached] = useState(false);
   const posts = useSelector(state=>state.featuredPost.featuredPosts);

   function handleReachEnd() {
     setEndReached(true);
    getFeaturedPostAction(GET_FEATURED_POST_ACTION,typeOfArticles.featured)(dispatch,pageCount+1);
    setPageCount(pageCount+1);
   }

   const flatList = useRef();
  useEffect(()=>{
    getFeaturedPostAction(GET_FEATURED_POST_ACTION,typeOfArticles.featured)(dispatch,0);
  },[]);

    return(
       <SafeAreaView style={styles.container}>
           <FlatList
           ref={flatList}
           extraData={posts}
           contentContainerStyle={styles.flatListStyle}
           data={posts}
           renderItem={({item})=>{
             return(
            <CardToShowContent
            navigation={navigation}
             val={item}/>
           )}}
            keyExtractor={item=>item.cuid}
            onEndReached={handleReachEnd}
            onEndReachedThreshold={10}
           />
           {
             endRached ?
             <FAB
           small
           icon={"plus"}
           onPress={()=>flatList.current.scrollToIndex({
             index:0,
             animated:true
           })}
           style={styles.fab}
           />:
           <></>
           }

       </SafeAreaView>
    );
}
export default Land;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'

  },
  flatListStyle:{
    paddingHorizontal:PixelRatio.roundToNearestPixel((width *4)/100),
    paddingVertical: PixelRatio.roundToNearestPixel((height *4)/100),
  },
  fab:{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});