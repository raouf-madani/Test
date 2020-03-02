import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView} from 'react-native';
import { PricingCard } from 'react-native-elements';

const HomeScreen = props =>{
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/backgroundFoot.jpg')} style={styles.bigBackgroundImage}>
        <ScrollView>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );  
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    height:'100%',
    width:'100%'
  }
  
});

export default HomeScreen;