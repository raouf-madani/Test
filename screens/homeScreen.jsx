import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView , Text} from 'react-native';
import { PricingCard } from 'react-native-elements';
import Colors from "../constants/Colors";

const HomeScreen = props =>{

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/night.jpg')} style={styles.bigBackgroundImage}>
        <ScrollView>
        <View style= {styles.textContainer}>
        <Text style= {styles.text}>اختر خانة من فضلك
        </Text>
        </View>

          <PricingCard
            color={Colors.primary}
            title="مباراة واحدة"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'إختر الآن'}}
            containerStyle = {styles.card}
            onButtonPress={() => props.navigation.navigate('TypeMatch')}
          />
          <PricingCard
            color= {Colors.primary}
            title="إشتراك شهري"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'إشترك الآن'}}
            containerStyle = {styles.card}
            onButtonPress={() => props.navigation.navigate('TypeMembership')}
            
            
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
  textContainer : {
    alignSelf : "center",
    marginTop : 20
  },
  text : {
    color : "white" ,
    fontSize : 25 ,
    fontFamily : "poppins-bold"
  },
  bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    height:'100%',
    width:'100%'
  },
  card : {
    borderRadius : 15,
    elevation : 25,
    backgroundColor : Colors.grey,
    alignItems :"center"
  }
 
  
});

export default HomeScreen;