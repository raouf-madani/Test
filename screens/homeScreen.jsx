import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { PricingCard } from 'react-native-elements';

const HomeScreen = props =>{
  return (
    <View style={styles.container}>
      <PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
    </View>
  );  
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});

export default HomeScreen;