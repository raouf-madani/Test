import React from 'react';
import { StyleSheet} from 'react-native';
//import {Button} from 'react-native-paper';
import Colors from '../../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

import ServiceCard from '../../components/ServiceCard';



const UserServiceScreen = props =>{

   
    return(
          
                <ServiceCard 
                    serviceNumber={1}
                    typeMatch='5 vs 5'
                    durationMatch={1}
                    daysMatch='Sam - Ven'
                    timeMatch='9h - 22h'
                    price={3500}
                />
              
         
          
     );    
};


const styles= StyleSheet.create({

});

export default UserServiceScreen;