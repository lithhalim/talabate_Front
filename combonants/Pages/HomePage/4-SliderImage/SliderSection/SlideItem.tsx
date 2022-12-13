import {StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const SlideItem = ({item}:any) => {
  const {images}=item;

  return (
    <TouchableOpacity style={styles.container} >
      <Image
        source={{uri:images}}
        resizeMode="cover"
        style={{width:"100%",height:180}}
      />
    </TouchableOpacity>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height:200,
    alignItems: 'center',
    backgroundColor:"white",
  }
});
