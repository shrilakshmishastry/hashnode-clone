import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { typeOfArticles } from '../../config/apis';
import mainStyle from '../../config/mainStyle';
import { GET_RECENT_POST_ACTION } from '../../redux/action-type';
import { flushData, getFeaturedPostAction } from '../../redux/action/getFeaturedPostAction';
import ItemRender from '../Land/itemRender';

const Recent= ({navigation  }) =>{
    const [recentPageCount,setRecentPageCount]= useState(1);
    const recentPosts = useSelector(state=>state.featuredPost.recentPosts);
    const load = useSelector((state)=>state.featuredPost.loading);
    const [refreshing,setResfreshing] = useState(false);
    const flatList = useRef();
    const dispatch = useDispatch();

    useEffect(()=>{
        getFeaturedPostAction(GET_RECENT_POST_ACTION,typeOfArticles.recent)(dispatch,0);
      },[]);

    function handleReachEnd() {
        getFeaturedPostAction(GET_RECENT_POST_ACTION,typeOfArticles.recent)(dispatch,recentPageCount+1);
        setRecentPageCount(recentPageCount+1)
      }

      const onRefresh = useCallback(()=>{
        setResfreshing(true);
        flushData(GET_RECENT_POST_ACTION)(dispatch);
        getFeaturedPostAction(GET_RECENT_POST_ACTION, typeOfArticles.recent)(dispatch, 0);
        if(!load){
            setResfreshing(false);
        }

    },[]);

    if(recentPosts.length === 0 ){
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
    posts={recentPosts}
    flatList={flatList}
    navigation={navigation}
    handleEndReach={()=>handleReachEnd()}
    refreshing={refreshing}
    refershHandler={onRefresh}
    />
    );
}

export default Recent;