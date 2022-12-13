import React from 'react';
import Lottie from 'lottie-react-native';


function EmptyBasket() {
  return (
    <Lottie source={require('./112087-empty.json')} autoPlay loop  style={{zIndex:1}}/>
  )
}

export default EmptyBasket