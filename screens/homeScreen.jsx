import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, ImageBackground, View, ScrollView , Text ,Image} from 'react-native';
import { PricingCard ,Overlay } from 'react-native-elements';
import Colors from "../constants/Colors";

import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import InfoOverlay from '../components/InfoOverlay';

const HomeScreen = props =>{
const [infoState , setInfoState] = useState(true);

const infoHandler = useCallback(()=>{

  setInfoState(currentIsOpen => !currentIsOpen);


},[infoState]);

useEffect(()=>{
  props.navigation.setParams({showInfo : infoHandler});

} , [infoHandler]);

  return (
    <View style={styles.container}>

      {   infoState && <InfoOverlay infoHandler = {infoHandler} isVisible = {infoState}/>

      }

      <ImageBackground source={require('../assets/images/player.jpg')} style={styles.bigBackgroundImage} blurRadius={0}>

        <ScrollView > 

        <View style = {styles.iconContainer} >

        <Image style ={{height : "100%" , width : "100%"}} source = {require('../assets/images/5.png')}/>

        </View>
        
        
          <PricingCard
            color={Colors.primary}
            title="مباراة واحدة"
            price="3000 دج- 3500 دج"
            pricingStyle = {{fontSize : 25 , color : "white" }}
            info={['10 لاعبين','3000 دج / ساعة', '3500 دج / ساعة و نصف']}
            button={{ title: 'إختر الآن' , buttonStyle :styles.buttons}}
            containerStyle = {styles.card}
            onButtonPress={() => props.navigation.navigate('TypeMatch')}
            infoStyle = {{color : "white"}}
          />
         

          <PricingCard
            color= {Colors.orange}
            title="إشتراك شهري"
            price="12000 دج- 14000 دج"
            pricingStyle = {{fontSize : 25 , color : "white" }}
            info={[ '10 لاعبين','4 مباريات / شهر', '12000 دج / ساعة', '14000 دج / ساعة و نصف']}
            button={{ title: 'إشترك الآن' , buttonStyle : styles.buttons}}
            containerStyle = {styles.card}
            onButtonPress={() => props.navigation.navigate('TypeMembership')}
            
            infoStyle = {{color : "white"}}
          />
          

        </ScrollView>

      </ImageBackground>
    </View>
  );  
};

HomeScreen.navigationOptions = (navData) => {
  const showInfo = navData.navigation.getParam("showInfo");
  return  {
  
        headerLeft : ()=> ( <HeaderButtons HeaderButtonComponent = {HeaderButton} > 
              <Item title = "Menu" 
              iconName = "ios-menu"  
              onPress = {()=> {navData.navigation.toggleDrawer();}}
              />

              </HeaderButtons>
      ) ,


      headerRight : ()=>  <HeaderButtons HeaderButtonComponent =   {HeaderButton} > 
              <Item title = "Menu" 
              iconName = "md-information-circle"  
              onPress = {showInfo}
              />

              </HeaderButtons>
        
        
      };
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
    width : 150 , 
    height : 150 , 
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
    backgroundColor :  "rgba(52, 52, 52, 0.6)",
    alignItems :"center"
    
   
  } ,
  buttons : {
    borderRadius : 20 ,  width : 200 , alignSelf : "center"
  }
 
  
});

export default HomeScreen;