import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { typeOfArticles } from '../../config/apis';
import mainStyle from '../../config/mainStyle';
import {  GET_RELEVANT_POST_ACTION } from '../../redux/action-type';
import { flushData, getFeaturedPostAction } from '../../redux/action/getFeaturedPostAction';
import ItemRender from '../Land/itemRender';

const Relevant= ({navigation}) =>{


    const [relaventPageCount,setRelaventPageCount]= useState(1);
    const relaventPosts = useSelector(state=>state.featuredPost.relaventPosts);
    // const load = useSelector((state)=>state.featuredPost.loading);
    const [refreshing,setResfreshing] = useState(false);
    const flatList = useRef();
    const dispatch = useDispatch();

    useEffect(()=>{
        getFeaturedPostAction(GET_RELEVANT_POST_ACTION,typeOfArticles.relavent)(dispatch,0);
      },[]);

    function handleReachEnd() {
        getFeaturedPostAction(GET_RELEVANT_POST_ACTION,typeOfArticles.relavent)(dispatch,relaventPageCount+1);
        setRelaventPageCount(relaventPageCount+1)
      }

      const onRefresh = useCallback(async()=>{
        setResfreshing(true);
        flushData(GET_RELEVANT_POST_ACTION)(dispatch);
        setRelaventPageCount(0);
        const load = await getFeaturedPostAction(GET_RELEVANT_POST_ACTION,typeOfArticles.relavent)(dispatch, 0);
        if(load){
            setResfreshing(false);
        }

    },[]);

    if(relaventPosts.length === 0 ){
        return(

            <ActivityIndicator
                color={mainStyle.primaryBg.backgroundColor}
                size={'large'}
                style={[
                    mainStyle.activityIndicatorStyle
                ]}
            />
        );
    }

    return(
    <ItemRender
    posts={relaventPosts}
    flatList={flatList}
    navigation={navigation}
    handleEndReach={()=>handleReachEnd()}
    refershHandler={onRefresh}
    refreshing={refreshing}
    />
    );
}

export default Relevant;