import React from 'react';
import { StyleSheet,View,ImageBackground, ScrollView,Platform} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import Colors from '../../../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

import ServiceCard from '../../../components/ServiceCard';
import HeaderButton from "../../../components/HeaderButton";


const OwnerServiceScreen = props =>{

   
    return(
        <View style={styles.container}> 
            <ImageBackground source={require('../../../assets/images/android.jpg')} style={styles.stadiumImageBackground}>
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
        </View>    
         
          
     );    
};

OwnerServiceScreen.navigationOptions = navData => {
    
    return  {
    
          headerRight : ()=>  (
                <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                  <Item title = "Edit" 
                    iconName = {Platform.OS === 'android' ? 'md-create' : 'ios-create'}  
                    onPress = {()=> navData.navigation.navigate("EditService")}
                    color='white'
                  />
                </HeaderButtons>),
                headerTitle:'Mes Services',
                headerTitleStyle:{
                  fontFamily:'poppins',
                  color:'white'
                },
                headerStyle:{
                    backgroundColor:Colors.background
                },
                headerTintColor:'white'
        };
  };
  

const styles= StyleSheet.create({
    container:{
      flex:1
    },
    stadiumImageBackground:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center'
    }
});

export default OwnerServiceScreen;