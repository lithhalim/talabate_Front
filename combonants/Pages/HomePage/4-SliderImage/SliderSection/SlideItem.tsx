import {StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const SlideItem = ({item}:any) => {

  return (
    <TouchableOpacity style={styles.container} >
      <Image
        source={{uri:"https://i.pinimg.com/564x/9a/f8/e8/9af8e87b94324d0a7c6af07133e155c7.jpg"}}
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
