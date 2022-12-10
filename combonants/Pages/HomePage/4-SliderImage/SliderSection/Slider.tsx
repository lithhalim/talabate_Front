import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
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
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(value,key)=>(key.toString())}
      />
      <Pagination data={Slides} scrollX={scrollX} />
    </View>
  );
};

export default Slider;


const Slides = [
  {
    id: 1,
    img:"https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'Apple Watch Series 7',
    description: 'The future of health is on your wrist',
    price: '$399',
  },
  {
    id: 2,
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    img:"https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },
  {
    id: 1,
    img:"https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'Apple Watch Series 7',
    description: 'The future of health is on your wrist',
    price: '$399',
  },
  {
    id: 2,
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    img:"https://media.cnn.com/api/v1/images/stellar/prod/221206200742-portugal-ramos-goal.jpg?c=16x9&q=h_270,w_480,c_fill",
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },

];