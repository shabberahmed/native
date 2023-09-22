import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import Swiper from 'react-native-swiper';

const CarouselMain = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        onIndexChanged={(index) => setCurrentIndex(index)} 
      >
        <View style={styles.slide}>
          <View>
            <Image source={require('./images/Rectangle.png')} style={styles.image} />
            <Text>hi</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image source={require('./images/Group.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <View>
            <Image source={require('./images/Rectangle.png')} style={styles.image} />
            <Text>hello</Text>
            <Button title="Go to Page" onPress={() => navigation.navigate('Page')} />

          </View>
        </View>
      </Swiper>

      {/* Render the "Next" button with conditional visibility */}
      {currentIndex < 2 && (
        <Button
          title="Next"
          onPress={handleNextButtonPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
  wrapper: {
    width: 400,
    height: 400,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
  },
});

export default CarouselMain;
