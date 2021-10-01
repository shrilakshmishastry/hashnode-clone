import React,{ useRef, useState} from 'react';
import {
    View,
    Text,
    FlatList,
     StyleSheet ,
     Dimensions,
     PixelRatio,
     VirtualizedList,
     RefreshControl,
    } from 'react-native';
import {FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';
import mainStyle from '../../config/mainStyle';
import CardToShowContent from '../../presentational/CardToShowContent';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const ItemRender = ({
    posts,
    flatList,
    navigation,
    handleEndReach,
    refershHandler,
   refreshing
}) => {

    const [endRached,setEndReached] = useState(false);

    const loading = useSelector(state=>state.featuredPost.loading);



    function handleReachEnd() {
        // console.log(ref);
        // console.log(flatList.current);
        setEndReached(true);
        handleEndReach();
      }

    const Data = [];
    const  getItem = (data,index) =>{
        return {
        id: posts[index].cuid,
        data: posts[index]
      }}
const ref = useRef();
    return (
        <>
        <VirtualizedList
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={refershHandler}
            />
        }
         contentContainerStyle={styles.flatListStyle}
            ref={flatList}
            extraData={posts}
            data={Data}
            initialNumToRender={2}
            onEndReached={handleReachEnd}
            onEndReachedThreshold={3}
            renderItem={(item)=>{
            return (
               <CardToShowContent
               navigation={navigation}
               val={item.item.data}
               />
            );
            }}
            // getScrollRef = {ref}
            keyExtractor={item =>{ return item.id;}}
            getItemCount={()=>posts.length}
            getItem={getItem}
        />

            {
                endRached  ?
                    <FAB
                        small
                        label={"Scroll To Top"}
                        uppercase={false}
                        icon={"arrow-up"}
                        onPress={() =>{

                            // setEndReached(false);
                            flatList.current.scrollToIndex({
                            index: 0,
                            animated: true
                        })
                    }}
                        style={[styles.fab,mainStyle.primaryBg]}
                    /> :
                    <></>
            }
        </>
    );
}
export default ItemRender;

const styles = StyleSheet.create({
    flatListStyle: {
        paddingHorizontal: PixelRatio.roundToNearestPixel((width * 4) / 100),
        paddingVertical: PixelRatio.roundToNearestPixel((height * 4) / 100),
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,

    }
});


 {/* <FlatList
                ref={flatList}
                extraData={posts}
                initialNumToRender={10}

                contentContainerStyle={styles.flatListStyle}
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <CardToShowContent
                            navigation={navigation}
                            val={item} />
                    )
                }}
                flashScrollIndicator={()=><ActivityIndicator/>}
                keyExtractor={item => item.cuid}
                onEndReached={handleReachEnd}
                onEndReachedThreshold={3}
                maxToRenderPerBatch={5}
            /> */}