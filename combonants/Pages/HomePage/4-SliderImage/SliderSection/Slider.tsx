import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = ({datause}:any) => {


  const scrollX = useRef(new Animated.Value(0)).current;



  const handleOnScroll = (event:any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={{paddingLeft:15,paddingRight:15,backgroundColor:"white"}}>
      <FlatList
        data={datause.GetResturant.slice(0,6)}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(value,key)=>(key.toString())}
      />
      <Pagination data={datause.GetResturant.slice(0,6)} scrollX={scrollX} />
    </View>
  );
};

export default Slider;


