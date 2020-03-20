import React from 'react';
import { StyleSheet,ImageBackground, ScrollView,Platform} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import Colors from '../../../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

import ServiceCard from '../../../components/ServiceCard';
import HeaderButton from "../../../components/HeaderButton";


const OwnerServiceScreen = props =>{

   
    return(
           
        <ImageBackground source={require('../../../assets/images/stadium2.jpg')} style={styles.stadiumImageBackground} blurRadius={1}>
            <ScrollView>
                <ServiceCard 
                    serviceNumber={1}
                    typeMatch='5 vs 5'
                    durationMatch={1}
                    daysMatch='Sam - Ven'
                    timeMatch='9h - 22h'
                    price={3500}
                />
                <ServiceCard 
                    serviceNumber={2}
                    typeMatch='11 vs 11'
                    durationMatch={1}
                    daysMatch='Sam - Ven'
                    timeMatch='9h - 22h'
                    price={3500}
                />
                <ServiceCard 
                    serviceNumber={3}
                    typeMatch='5 vs 5'
                    durationMatch={2}
                    daysMatch='Sam - Mar'
                    timeMatch='18h - 22h'
                    price={3500}
                />
                <ServiceCard 
                    serviceNumber={4}
                    typeMatch='10 vs 10'
                    durationMatch={2}
                    daysMatch='Sam - Ven'
                    timeMatch='9h - 18h'
                    price={3500}
                />
            </ScrollView>
        </ImageBackground>
         
         
          
     );    
};

OwnerServiceScreen.navigationOptions = navData => {
    
    return  {
    
          headerRight : ()=>  (
                <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                  <Item title = "Edit" 
                    iconName = {Platform.OS === 'android' ? 'md-create' : 'ios-create'}  
                    onPress = {()=> navData.navigation.navigate("EditService")}
                  />
                </HeaderButtons>),
                headerTitle:'Mes Services',
                headerTitleStyle:{
                  fontFamily:'poppins'
                }
        };
  };
  

const styles= StyleSheet.create({
stadiumImageBackground:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    paddingTop:100
}
});

export default OwnerServiceScreen;