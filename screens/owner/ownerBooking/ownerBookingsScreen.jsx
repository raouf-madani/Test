import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableHighlight,Dimensions,Alert,ScrollView} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import { DataTable } from 'react-native-paper';
import {Calendar,LocaleConfig} from 'react-native-calendars';
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    today: 'Aujourd\'hui'
  };
LocaleConfig.defaultLocale = 'fr';



const OwnerBookingsScreen = props =>{
   const [theDay, setTheDay]= useState();
   const data=[{id:'1',nom:'Madani',prenom:'Raouf',creneauD:'13h',creneauF:'14h',statut:'Confirmée',date:'2020-03-16',num:'06598532145'},
               {id:'2',nom:'Snoussi',prenom:'el Hareth',creneauD:'14h',creneauF:'15h',statut:'Confirmée',date:'2020-03-16',num:'07597532145'},
               {id:'3',nom:'Mahdi',prenom:'Djalel',creneauD:'15h',creneauF:'16h',statut:'Confirmée',date:'2020-03-17',num:'06338532145'},
               {id:'4',nom:'Benzema',prenom:'Karim',creneauD:'16h',creneauF:'17h',statut:'Confirmée',date:'2020-03-18',num:'06408532145'},
               {id:'5',nom:'Ronaldo',prenom:'Cristiano',creneauD:'17h',creneauF:'18h',statut:'Anulée',date:'2020-03-16',num:'06556832145'},
               {id:'6',nom:'Neymar',prenom:'Junior',creneauD:'18h',creneauF:'19h',statut:'Confirmée',date:'2020-03-16',num:'06778532145'},
               {id:'7',nom:'Fekir',prenom:'Nabil',creneauD:'20h',creneauF:'21h',statut:'Confirmée',date:'2020-03-19',num:'0558532145'},
               {id:'8',nom:'Ronaldo',prenom:'Nazario',creneauD:'17h',creneauF:'18h',statut:'Anulée',date:'2020-03-16',num:'06998578286'},
               {id:'9',nom:'Coins',prenom:'Da Silva',creneauD:'18h',creneauF:'19h',statut:'Confirmée',date:'2020-03-19',num:'0799632145'},
               {id:'10',nom:'Carlos',prenom:'Balboa',creneauD:'20h',creneauF:'21h',statut:'Anulée',date:'2020-03-16',num:'05519892145'}
               ];

      
    return(
    <View style={styles.container}>
       <ScrollView>
          <Calendar
          theme={{calendarBackground:'transparent',
                  todayTextColor: Colors.orange,
                  selectedDayTextColor: 'white',
                  selectedDayBackgroundColor: Colors.orange,
                  textDayFontFamily: 'poppins-bold',
                  textMonthFontFamily: 'poppins',
                  textDayHeaderFontFamily: 'poppins',
                  monthTextColor: 'white',
                  indicatorColor: Colors.orange,
                  arrowColor:  Colors.orange,
                  dayTextColor: 'white',
                  textDisabledColor: 'grey'}}
              
          onDayPress={day => {
            setTheDay(day.dateString);
          }}
          markedDates={{
          [theDay]: {selected: true},
          }}       
          firstDay={6}
          />
          
            <DataTable style={styles.dataTable}>
              <DataTable.Header>
                <DataTable.Title>Créneau</DataTable.Title>
                <DataTable.Title>Réservation</DataTable.Title>
                <DataTable.Title numeric>Statut</DataTable.Title>
              </DataTable.Header>

              {theDay && data.length !== 0 && data.map( e => e.date===theDay && <DataTable.Row 
               style={{backgroundColor:e.statut==='Confirmée'? 'green':'red'}}  
               key={e.id}
               onPress={()=>props.navigation.navigate('OwnerBookingsDetail',{bookingID:e.id})}>  
        
                <DataTable.Cell>
                  
                    <Text style={styles.slot}>{e.creneauD+ ' > '}</Text>
                    <Text style={styles.slot}>{e.creneauF}</Text>

                </DataTable.Cell>
                <DataTable.Cell>
                  
                    <Text style={styles.slot}>{e.nom}</Text>

                </DataTable.Cell>

                <DataTable.Cell numeric>
                  
                    <Text style={styles.slot}>{e.statut}</Text>

                </DataTable.Cell> 

            </DataTable.Row>)}

              {theDay && data.length === 0 && (<View  style={styles.textContainer}>
                                       <Text style={styles.text}>Il n'y a aucune réservation pour le moment!</Text>
                                     </View>)}  
              {!theDay &&  (<View  style={styles.textContainer}>
                                       <Text style={styles.text}>Séléctionner une date pour afficher les réservations.</Text>
                                     </View>)}                                  
              
            </DataTable>
          </ScrollView>
    </View>
    
     );    
};


OwnerBookingsScreen.navigationOptions= navData => {
   
    return {
        headerRight : ()=>  (
            <View>
              <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                <Item title = "calendar" 
                  iconName = {Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}  
      
                />
              </HeaderButtons>
              <TouchableHighlight
                style = {styles.bookingsNotifications}
                underlayColor = 'red'
                onPress = { () => Alert.alert('Important','Vous avez 1 réservation(s). Cliquez sur chaque ligne dans le tableau pour voir les détails de chaque réservation.',[{text:"D'accord"}]) }
              >
                 <Text style={{color:'white'}}> 1 </Text>
              </TouchableHighlight>  
            </View>
            )
    
    };

 };

const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#000000',
    paddingTop:100
},
bookingsNotifications:{
  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  width: Dimensions.get('window').width * 0.06,
  height: Dimensions.get('window').width * 0.06,
  backgroundColor:Colors.orange,
  alignItems:'center',
  marginBottom:-55,
  
},
dataTable:{
  backgroundColor:'white',
  marginVertical:10
},
textContainer:{
 padding:15
},
text:{
  color:'grey',
  fontFamily:'poppins',
  alignSelf:'center'
},
slot:{
  fontFamily:'poppins',
  color:'white'
}
});

export default OwnerBookingsScreen;