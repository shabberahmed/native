
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        // showsButtons={true}
        autoplay={true}
        autoplayTimeout={2}
        style={styles.wrapper}
      >
        <View style={styles.slide}>
          <Image source={require('./images/Rectangle.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./images/Group.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./images/Rectangle.png')} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    width:400,
    height:800,
  },
  wrapper: {
    width:400,
    height:800,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:300,
    height:300,
    resizeMode: 'cover',
  },
});

export default Carousel;
