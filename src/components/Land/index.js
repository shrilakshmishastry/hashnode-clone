import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import { ActivityIndicator, IconButton } from "react-native-paper";

import Featured from "../FeaturedPost";
import Recent from "../Recent";
import Relevant from "../Relevant";


const LazyPlaceHolder = () => {
  return (
    <ActivityIndicator size={'large'} />
  );
}


// const renderScene = SceneMap({
//   featured: Featured,
//   recent: Recent,
//   relavent: Relevant,

// });



const Land = ({ navigation }) => {

  // //  different post fetching

  //  const recentPosts = useSelector(state=>state.featuredPost.recentPosts);
  //  const relaventPosts = useSelector(state=>state.featuredPost.relaventPosts);

  // const [index, setIndex] = useState(0);
  // const [routes] = useState([
  //   { key: 'featured', title: 'Featured', navigation: navigation },
  //   { key: 'recent', title: 'Recent', navigation: navigation },
  //   { key: 'relavent', title: 'Relavent', navigation: navigation }
  // ]);

  const { width } = useWindowDimensions();
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator

      screenOptions={{
        tabBarItemStyle:{
          flexDirection:'row'
        },
        tabBarLabelStyle:{
          textTransform:'none',
           marginTop: 30,
           marginLeft: 15,
           fontSize: 15,
        },
        lazy: true,
        lazyPlaceholder:LazyPlaceHolder
      }}
      >
        <Tab.Screen
        name="featured"
        component={Featured}
        options={{
          tabBarShowIcon:true,
          tabBarIcon:()=>{
            return <IconButton icon="star-face"/>
          },
        }}
         />
        <Tab.Screen
         options={{
          tabBarShowIcon:true,
          tabBarIcon:()=>{
            return <IconButton icon="feather"/>
          },
        }}
        title={'Relevant'}
         name="Relevant" component={Relevant} />
        <Tab.Screen
         options={{
          tabBarShowIcon:true,
          tabBarIcon:()=>{
            return <IconButton icon="clock-outline"/>
          },
        }}
        name="Recent" component={Recent} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
export default Land;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },

});
