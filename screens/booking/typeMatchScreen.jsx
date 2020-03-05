import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView, Text} from 'react-native';
import { PricingCard } from 'react-native-elements';
import Colors from '../../constants/Colors';

const TypeMatchScreen = props =>{
    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage}>
        <ScrollView>
          <View style= {styles.textContainer}>
          <Text style= {styles.text}>Choisis le type du Match</Text>
          </View>

          <PricingCard
            color={Colors.primary}
            title="UN MATCH"
            price="300 دج"
            pricingStyle = {{fontSize : 25 , color : "white" }}
            info={['1h', 'Douche', 'Vestiaire']}
            button={{ title: 'Réserver' , buttonStyle :styles.buttons}}
            onButtonPress={()=>props.navigation.navigate('BookingMatch')}
            containerStyle = {styles.card}
            infoStyle = {{color : "white"}}
          />
          <PricingCard
            color= {Colors.primary}
            title="UN MATCH"
            price="350 دج"
            pricingStyle = {{fontSize : 25 , color : "white" }}
            info={['1h30', 'Douche', 'Vestiaire']}
            button={{ title: 'Réserver'  , buttonStyle :styles.buttons}}
            onButtonPress={()=>props.navigation.navigate('BookingMatch')}
            containerStyle = {styles.card}
            infoStyle = {{color : "white"}}
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
    marginTop : 20,
    borderBottomWidth:1,
    borderBottomColor:'white',
    marginTop : 50
  },
  text : {
    color : "white" ,
    fontSize : 20 ,
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
    backgroundColor :  "rgba(52, 52, 52, 0.6)",
    alignItems :"center"
  },

  buttons : {
    borderRadius : 20 ,  width : 200 , alignSelf : "center"
  }
 
  
});

export default TypeMatchScreen;