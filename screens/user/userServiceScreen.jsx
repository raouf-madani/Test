import React from 'react';
import { StyleSheet,ImageBackground, ScrollView,View} from 'react-native';
//import {Button} from 'react-native-paper';
import Colors from '../../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

import ServiceCard from '../../components/ServiceCard';



const UserServiceScreen = props =>{

   
    return(
           
           <ImageBackground source={require('../../assets/images/stadium.jpg')} style={styles.stadiumImageBackground} blurRadius={0}>
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


const styles= StyleSheet.create({
stadiumImageBackground:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    paddingTop:100
}
});

export default UserServiceScreen;