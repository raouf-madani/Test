import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar ,Badge } from 'react-native-elements';
import Colors from "../../../constants/Colors";
import BookingCard from '../../../components/BookingCard';

const PlayerBookingsScreen = props =>{
    return(
      <View style = {styles.container}>
     
              <ScrollView style = {styles.componentContainer}>
              
                    <BookingCard 
                        status = "primary"
                        value = "Confirmée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "8"
                        month = "Mars"
                        year = "2020"
                    />
                    
                    <BookingCard 
                        status = "primary"
                        value = "Confirmée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "8"
                        month = "Mars"
                        year = "2020"

                    />
                    
                    <BookingCard 
                        status = "primary"
                        value = "Confirmée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "8"
                        month = "Mars"
                        year = "2020"

                    />
                    
                    <BookingCard 
                        status = "primary"
                        value = "Confirmée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "8"
                        month = "Mars"
                        year = "2020"

                    />
                    

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