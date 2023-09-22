import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import {DataTable} from 'react-native-paper'
import Carousel from "./Carousel";
export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
        <Carousel/>
      
      {/* <Image source={require("./images/Group.png")} style={styles.image} /> */}
      <Text style={styles.title}>Electric Bike One</Text>
      <Text style={styles.subtitle}>Select any category to compare</Text>
      <Text style={styles.price}>
        Rs.98,000 <Text style={styles.discountedPrice}>Rs.100,000</Text>
      </Text>
      <Text style={styles.tax}>Inclusive of all taxes</Text>
      <Text style={styles.testRide}>Test ride for this bike Rs.1,000</Text>
      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorContainer}>
        <View style={[styles.colorBox, { backgroundColor: "black" }]} />
        <View style={[styles.colorBox, { backgroundColor: "green" }]} />
      </View>
      <Text style={styles.sectionTitle}>Coupons and Offers</Text>
      <View style={styles.offerContainer}>
        <View style={styles.offer}>
          <Text style={styles.offerText}>
            <Text style={{fontSize:13,fontWeight:900}}>Upto 8% Off</Text> on using ABC Bank credit card
          </Text>
          <Text style={styles.offerTimeLeft}>(15hrs left)</Text>
        </View>
        <View style={styles.offer}>
          <Text style={styles.offerText2}>BAV2021</Text>
          <Text style={styles.offerDescription}>
            Tap to copy and get Rs.999 Off by applying this coupon <Text style={{color:'red'}}>(15:00 hours
            Left)</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>EMI</Text>
      <Text style={styles.emiText}>
        EMI applicable for this bike starting from Rs. 6999. Apply for details
      </Text>
      <Text style={styles.emiText}>
        EMI applicable for this bike starting from Rs. 4999. Apply for details
      </Text>
      <View
        style={{
          width: 350,
          height: 80,
          backgroundColor: "#09BFB9",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:10
        }}
      >
        <Button
          title="BUY NOW"
          color="#09BFB9"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
  
      <View>
      <TouchableOpacity
        style={{
          margin: 10,
          width: 350,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#09BFBR',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: '#09BFB9', fontSize: 18 }}>Test Ride</Text>
      </TouchableOpacity>
    </View>
      <Text style={{fontSize:15,fontWeight:700}}>Description</Text>
      <Text style={{fontWeight:100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum at mauris maecenas ullamcorper varius nibh ut phasellus. Facilisis lorem nec cursus mauris, lectus libero. Massa placerat proin pharetra quis laoreet neque venenatis ...Read more</Text>
      <Text>Specifications</Text>
      <DataTable >
        <DataTable.Row>
          <DataTable.Cell style={styles.greenCell}>Battery</DataTable.Cell>
          <DataTable.Cell style={styles.headerCell}>Etergo</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={styles.greenCell}>Charging time</DataTable.Cell>
          <DataTable.Cell style={styles.headerCell}>45 mins</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={styles.greenCell}>Motor Power</DataTable.Cell>
          <DataTable.Cell style={styles.headerCell}>Extra</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={styles.greenCell}>Top Speed</DataTable.Cell>
          <DataTable.Cell style={styles.headerCell}>90</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={styles.greenCell}>Mobility Connectivity</DataTable.Cell>
          <DataTable.Cell style={styles.headerCell}>Yes</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Text>View More</Text>
      <View style={styles.row}>
  <View style={styles.cell}><Text>FAQ'S</Text></View>
  <View style={styles.cell}><Text>View all</Text></View>
</View>
<View style={styles.row}>
  <View style={styles.cell}><Text>How many days it takes to deliver ?</Text></View>
  <View style={styles.cell}><Text>+</Text></View>
</View>
<View style={styles.row}>
  <View style={styles.cell}><Text>How many days it takes to deliver ?</Text></View>
  <View style={styles.cell}><Text>+</Text></View>
</View>
<View style={styles.row}>
  <View style={styles.cell}><Text>How many days it takes to deliver ?</Text></View>
  <View style={styles.cell}><Text>+</Text></View>
</View>
<Text style={{alignSelf:'flex-start'}}>Reviews</Text>
<View style={[styles.row,{marginTop:15}]}>
  <View style={[styles.cell,{alignItems:'flex-start'}]}><Text>Overall Rating</Text></View>
  <View style={styles.cell}><Text><Image source={require('./images/Star.png')}></Image>4.3<Text style={{color:'#09BFB9'}}>(243 customer reviews)</Text></Text></View>
</View>
<Text numberOfLines={1} style={[styles.container,{fontSize:15,fontWeight:'100',color:'grey'}]}>               
    _____________________________________________________________
</Text>

<View style={styles.row}>
  <View style={[styles.cell,{alignItems:'flex-start',}]}><View style={{flexDirection:'row'}}><Image source={require('./images/Profile.png')} /><Text style={{fontFamily:'bold',fontSize:15,fontWeight:800}}>John Doe</Text></View><Text style={{fontSize:12,fontWeight:300}}>Loved the features of the product</Text></View>
  <View style={[styles.cell]}>
  <Image
    style={{ width: 100,height:30, resizeMode: 'contain' }} // Adjust the width and height as needed
    source={require('./images/startg.png')}
  />
</View>
</View>
<Text numberOfLines={1} style={[styles.container,{fontSize:15,fontWeight:'100',color:'grey'}]}>               
    _____________________________________________________________
</Text>
<Text style={{color:'#09BFB9',fontSize:14,fontWeight:700}}>Show all</Text>
<View style={{ flexDirection: 'row', alignItems: 'center' ,margin:20}}>
      <TextInput
        placeholder="Enter the text"
        
        style={{
          flex: 1, 
          width:300,
          height: 120,
          fontSize: 10, 
          padding: 10, 
          borderWidth: 1,
          borderColor: 'gray', 
          borderRadius:10
        }}
      />
      <TouchableOpacity style={{
      position: 'absolute',
      right: 10, 
    }} >
        <Image source={require('./images/Vector.png')}  />
      </TouchableOpacity>
    </View>
 <View style={{flexDirection:'row',gap:30}}>
 <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      
      >
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>
    </View>
      <View >
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'green',
        }}
       
      >
        <Text style={{ color: 'green' }}>Not now</Text>
      </TouchableOpacity>
    </View>
 </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    width: 400,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center", 
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center", 
    fontSize:10
  },
  price: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",

  },
  discountedPrice: {
    textDecorationLine: "line-through",
    marginLeft: 10,
    color: "red",
  },
  tax: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    fontSize:10
  },
  testRide: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    fontSize:15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    fontSize:16
  },
  colorContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center", 
  },
  colorBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  offerContainer: {
    marginTop: 10,
  },
  offer: {
    width: 250,
    height: 70,
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor:'#DCDDC3'
  },
  offerText: {
    margin: 5,
    fontSize: 10,
    textAlign: "center",
  },
  offerText2: {
    margin: 5,
    fontSize: 10,
    color:'',
    textAlign: "center",
  }
  ,
  offerTimeLeft: {
    fontSize: 12,
   fontWeight:600,
   color:'red',

  },
  offerDescription: {
    fontSize: 12,
  },
  emiText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight:100,
    textAlign: "center",
  },
  headerRow:{
    textAlign: "center",
   alignItems:'center'

  },
 
  headerCell: {
    color: 'white', 
    fontWeight: 'bold',
    flex:1,
    justifyContent:'center'
  },
  greenCell: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    textAlign:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    width: 400,
  },
  cell:{
    flex: 1,
    alignItems: 'center',
    fontWeight:'100'
  },
 
});
