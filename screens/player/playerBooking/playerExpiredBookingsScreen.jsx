import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar ,Badge } from 'react-native-elements';
import Colors from "../../../constants/Colors";
import BookingCard from '../../../components/BookingCard';


const PlayerExpiredBookingsScreen = props =>{
  return(
    <View style = {styles.container}>
      {/* <View style={styles.titleContainer}>

      <Text style = {{fontFamily : "poppins-bold" , fontSize : 18 , color : "white"}}>
      Historique 
      </Text>

      </View> */}


   
            <ScrollView style = {styles.componentContainer}>
             
            <BookingCard 
                        status = "error"
                        value = "expirée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "7"
                        month = "Mars"
                        year = "2020"

                    />

                 <BookingCard 
                        status = "warning"
                        value = "annulée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "7"
                        month = "Mars"
                        year = "2020"

                    />

                  <BookingCard 
                        status = "error"
                        value = "expirée"
                        stade = "FootFive"
                        time = "1h"
                        stadium = "5x5"
                        hours = "11:00 - 12:00"
                        day = "7"
                        month = "Mars"
                        year = "2020"

                    />

            </ScrollView>
    </View>

   );    
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


export default PlayerExpiredBookingsScreen;