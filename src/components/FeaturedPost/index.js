import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { typeOfArticles } from '../../config/apis';
import mainStyle from '../../config/mainStyle';
import { GET_FEATURED_POST_ACTION } from '../../redux/action-type';
import { flushData, getFeaturedPostAction } from '../../redux/action/getFeaturedPostAction';
import ItemRender from '../Land/itemRender';

const Featured = ({ navigation }) => {


    const [featuredPageCount, setFeaturedPageCount] = useState(1);
    const featuredPosts = useSelector(state => state.featuredPost.featuredPosts);
    const [refreshing,setResfreshing] = useState(false);

    const flatList = useRef();
    const dispatch = useDispatch();
    // const load = useSelector((state)=>state.featuredPost.loading);


    useEffect(() => {
        getFeaturedPostAction(GET_FEATURED_POST_ACTION, typeOfArticles.featured)(dispatch, 0);
    }, []);

    const onRefresh = useCallback(async()=>{
        setResfreshing(true);
        setFeaturedPageCount(0);
        flushData(GET_FEATURED_POST_ACTION)(dispatch);
        const load = await getFeaturedPostAction(GET_FEATURED_POST_ACTION, typeOfArticles.featured)(dispatch, 0);

        if(load){
            setResfreshing(false);
        }

    },[]);

    function handleReachEnd() {
        getFeaturedPostAction(GET_FEATURED_POST_ACTION, typeOfArticles.featured)(dispatch, featuredPageCount + 1);
        setFeaturedPageCount(featuredPageCount + 1)
    }



    if (featuredPosts.length === 0) {
        return (

            <ActivityIndicator
                color={mainStyle.primaryBg.backgroundColor}
                size={'large'}
                style={[
                    mainStyle.activityIndicatorStyle
                ]}
            />


        );
    }

    return (
        <ItemRender
            posts={featuredPosts}
            flatList={flatList}
            navigation={navigation}
            handleEndReach={() => handleReachEnd()}
            refershHandler={onRefresh}
            refreshing={refreshing}
        />
    );
}

export default Featured;