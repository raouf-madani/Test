import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar ,Badge } from 'react-native-elements';
import Colors from "../../../constants/Colors";
import BookingCard from '../../../components/BookingCard';
import { useSelector } from 'react-redux';

const months = ['Nothing','Janvier', 'Février', 'Mars','Avril','Mai','Juin', 'Juillet', 'Août','Septembre','Octobre','Novembre', 'Décembre' ];

const PlayerBookingsScreen = props =>{


const confirmedBookings = useSelector(state =>state.bookings.playerBookings.filter(e=>e.status === "confirmée")) ;
    return(
      <View style = {styles.container}>
     
              <ScrollView style = {styles.componentContainer}>
             {confirmedBookings.map((e,index)=>{
               let month = "0";
               if(e.bookingDate.slice(5, 6)==="0"){
                month=e.bookingDate.slice(6, 7)
               } else{
                 month =e.bookingDate.slice(5, 7)
               }
               return ( <BookingCard 
                        key={index}
                        status = "primary"
                        value = "Confirmée"
                        stade = {e.ownerId}
                        time = {e.timeMatch}
                        stadium = {e.typeMatch}
                        hours = {e.start + "-" + e.end}
                        day = {e.bookingDate.slice(8,10)}
                        month = {months[month]}
                        year = {e.bookingDate.slice(0,4)}
                        date = {e.date}
                        playerId = {e.playerId}
                    />)}
                         )}
                

              </ScrollView>
      </View>

     );    
};


PlayerBookingsScreen.navigationOptions = ()=> {
  return {
    title : "Mes Réservations",
 
  };

};

const styles= StyleSheet.create({
  container : {
    backgroundColor : "#323232",
    flex : 1 
  },
  titleContainer : {
    marginTop : "20%",
    alignSelf : "center",
    borderBottomColor : "white",
    borderBottomWidth : 0.5,
    marginBottom : 15
  },
  componentContainer : {
   
}
});

export default PlayerBookingsScreen;