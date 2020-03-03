import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView , Text ,Image} from 'react-native';
import { PricingCard } from 'react-native-elements';
import Colors from "../constants/Colors";

const HomeScreen = props =>{

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/images/night.jpg')} style={styles.bigBackgroundImage}>

        <ScrollView > 

        <View style = {styles.iconContainer} >

        <Image style ={{height : "100%" , width : "100%"}} source = {require('../assets/images/55.png')}/>

        </View>
        <View style= {styles.textContainer}>

        <Text style= {styles.text}>اختر خانة من فضلك
        </Text>

        </View>
        
          <PricingCard
            color={Colors.primary}
            title="مباراة واحدة"
            price="3000 دج- 3500 دج"
            pricingStyle = {{fontSize : 25 }}
            info={['10 لاعبين','3000 دج / ساعة', '3500 دج / ساعة و نصف']}
            button={{ title: 'إختر الآن' , buttonStyle :styles.buttons}}
            containerStyle = {styles.card}
            onButtonPress={() => props.navigation.navigate('TypeMatch')}
          />
         

          <PricingCard
            color= {Colors.orange}
            title="إشتراك شهري"
            price="12000 دج- 14000 دج"
            pricingStyle = {{fontSize : 25 }}
            info={[ '10 لاعبين','4 مباريات / شهر', '12000 دج / ساعة', '14000 دج / ساعة و نصف']}
            button={{ title: 'إشترك الآن' , buttonStyle : styles.buttons}}
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
    justifyContent: 'center'
  },
  iconContainer : {  
    overflow : "hidden" ,
    width : 50 , 
    height : 50 , 
    marginTop : 45 , 
    alignSelf : "center" }
    ,
  textContainer : {
    alignSelf : "center",
    marginTop : 20,
    borderBottomColor : "white",
    borderBottomWidth : 1
  },
  
  textContainer : {
    alignSelf : "center",
    marginTop : 20,
    borderBottomColor : "white",
    borderBottomWidth : 1
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
    backgroundColor :  Colors.grey,
    alignItems :"center"
    
   
  } ,
  buttons : {
    borderRadius : 20 ,  width : 200 , alignSelf : "center"
  }
 
  
});

export default HomeScreen;