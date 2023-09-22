import React from 'react';
import { SafeAreaView, StyleSheet ,Image,View} from 'react-native';
import CarouselMain from './CarouselMain';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <View>
      <Image style={{marginLeft:'auto',marginRight:'auto'}} source={require('./images/Frame.png')}/>
     <CarouselMain/>
    </View>
    // {/* </SafeAreaView> */}
  );
}


