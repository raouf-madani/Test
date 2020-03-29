import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableHighlight,ImageBackground,Alert,ScrollView,Dimensions} from 'react-native';
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

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerBookingsScreen = props =>{


 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  let calendarStyle = styles.calendar;
  let dataTableStyle = styles.dataTable;
  let textStyle = styles.text;
  let sizeDay = 14;
  let sizeMonth = 14;

  if(screen.width < 350){
    calendarStyle = styles.calendarSmall;
    dataTableStyle = styles.dataTableSmall;
    textStyle = styles.textSmall;
    sizeDay = 13;
    sizeMonth = 13;
  }

  if(screen.height <= 800 && screen.height >=650){
    calendarStyle = styles.calendarTall;
    dataTableStyle = styles.dataTableTall;
    textStyle = styles.textTall;
    sizeDay = 16;
    sizeMonth = 17;
  }

  if(screen.height > 800){
    calendarStyle = styles.calendarBig;
    dataTableStyle = styles.dataTableBig;
    textStyle = styles.textBig;
    sizeDay = 18;
    sizeMonth = 20;
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Calendar Configuration
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
      <ImageBackground source = {require("../../../assets/images/android.jpg")}  style={styles.backgroundImage}>
       <ScrollView>
          <Calendar
          style={calendarStyle}
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
                  textDisabledColor: 'grey',
                  textDayFontSize: sizeDay,
                  textMonthFontSize: sizeMonth,
                  textDayHeaderFontSize: 14}}
              
          onDayPress={day => {
            setTheDay(day.dateString);
          }}
          markedDates={{
          [theDay]: {selected: true},
          }}       
          firstDay={7}
          />
          
            <DataTable style={dataTableStyle}>
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
                                       <Text style={textStyle}>Il n'y a aucune réservation pour le moment!</Text>
                                     </View>)}  
              {!theDay &&  (<View  style={styles.textContainer}>
                                       <Text style={textStyle}>Séléctionner une date pour afficher les réservations.</Text>
                                     </View>)}                                  
              
            </DataTable>
          </ScrollView>
        </ImageBackground> 
    </View>
    
     );    
};


OwnerBookingsScreen.navigationOptions= navData => {
   
    return {
        headerRight : ()=>  (
            <View style={styles.iconContainer}>
              <TouchableHighlight
                style = {styles.bookingsNotifications}
                underlayColor = 'red'
              >
                 <Text style={{color:'white'}}> 1 </Text>
              </TouchableHighlight>
              <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                <Item title = "calendar" 
                  iconName = {Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}  
                  style={{marginHorizontal:-10}}
                  color={Colors.primary}
                  onPress = { () => Alert.alert('Important','Vous avez 1 réservation(s). Cliquez sur chaque ligne dans le tableau pour voir les détails de chaque réservation.',[{text:"D'accord"}]) }
                />
              </HeaderButtons>  
            </View>
            ),
            headerTitle:'Mes Réservations',
            headerTitleStyle:{
              fontFamily:'poppins',
              color:Colors.background
            },
            headerStyle:{
                backgroundColor:'white'
            },
            headerTintColor:Colors.background
    
    };

 };

const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:Colors.background,
    justifyContent:'flex-end'
},
iconContainer:{
  flexDirection:'row',
  paddingRight:10
},
backgroundImage:{
  flex : 1,
  resizeMode: 'cover'
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
calendar:{
  marginTop:30
},
calendarSmall:{
  marginTop:40
},
calendarTall:{
  marginTop:60
},
calendarBig:{
  marginTop:70
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bookingsNotifications:{
  height:20,
  width:20,
  borderRadius:20/2,
  backgroundColor:Colors.primary,
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:-10
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
dataTable:{
  backgroundColor:'white',
  marginVertical:20
},
dataTableSmall:{
  backgroundColor:'white',
  marginVertical:10
},
dataTableTall:{
  backgroundColor:'white',
  marginVertical:50
},
dataTableBig:{
  backgroundColor:'white',
  marginVertical:60
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
textContainer:{
 padding:15
},
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
text:{
  color:'grey',
  fontFamily:'poppins',
  alignSelf:'center',
  fontSize:12
},
textSmall:{
  color:'grey',
  fontFamily:'poppins',
  alignSelf:'center',
  fontSize:11
},
textTall:{
  color:'grey',
  fontFamily:'poppins',
  alignSelf:'center',
  fontSize:18
},
textBig:{
  color:'grey',
  fontFamily:'poppins',
  alignSelf:'center',
  fontSize:19
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
slot:{
  fontFamily:'poppins',
  color:'white'
}
});

export default OwnerBookingsScreen;