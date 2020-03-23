import React,{useEffect} from 'react';
import { StyleSheet,View,Linking,ImageBackground} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {TextInput} from 'react-native-paper';

import BookingCard from '../../../components/BookingCard';



const OwnerBookingsDetailScreen = props =>{

    const bookingID = props.navigation.getParam('bookingID');
    const data=[{id:'1',nom:'Madani',prenom:'Raouf',creneauD:'13h',creneauF:'14h',statut:'Confirmée',date:'2020-03-16',num:'06598532145'},
               {id:'2',nom:'Snoussi',prenom:'el Hareth',creneauD:'14h',creneauF:'15h',statut:'Confirmée',date:'2020-03-16',num:'07597532145'},
               {id:'3',nom:'Mahdi',prenom:'Djalel',creneauD:'15h',creneauF:'16h',statut:'Expirée',date:'2020-03-17',num:'06338532145'},
               {id:'4',nom:'Benzema',prenom:'Karim',creneauD:'16h',creneauF:'17h',statut:'Confirmée',date:'2020-03-18',num:'06408532145'},
               {id:'5',nom:'Ronaldo',prenom:'Cristiano',creneauD:'17h',creneauF:'18h',statut:'Anulée',date:'2020-03-16',num:'06556832145'},
               {id:'6',nom:'Neymar',prenom:'Junior',creneauD:'18h',creneauF:'19h',statut:'Confirmée',date:'2020-03-16',num:'06778532145'},
               {id:'7',nom:'Fekir',prenom:'Nabil',creneauD:'20h',creneauF:'21h',statut:'Confirmée',date:'2020-03-19',num:'0558532145'},
               {id:'8',nom:'Ronaldo',prenom:'Nazario',creneauD:'17h',creneauF:'18h',statut:'Anulée',date:'2020-03-16',num:'06998578286'},
               {id:'9',nom:'Coins',prenom:'Da Silva',creneauD:'18h',creneauF:'19h',statut:'Confirmée',date:'2020-03-19',num:'0799632145'},
               {id:'10',nom:'Carlos',prenom:'Balboa',creneauD:'20h',creneauF:'21h',statut:'Anulée',date:'2020-03-16',num:'05519892145'}
               ];
    const currentBooking = data.find(booking => booking.id === bookingID);

    const month = ()=>{
        const array = currentBooking.date.split('-');
        const newArrayMonth = array.slice(1,2);
        if(newArrayMonth.toString()=== '03'){
            return 'Mars';
        }else{
            return;
        }

    }
    
    useEffect(()=>{
    props.navigation.setParams({phoneNumber:currentBooking.num});
    },[currentBooking.num]);
      
    return(
    
     <View style={styles.container}>
        <BookingCard 
          status="error"
          value={currentBooking.statut}
          time="1h"
          stadium = "5vs5"
          hours={currentBooking.creneauD+' > '+currentBooking.creneauF}
          day={currentBooking.date.split('-').pop()}
          month={month()}
          year={currentBooking.date.split('-').shift()}
        />
        <View style={styles.cardContainer}>
          <TextInput
              mode='outlined'
              value={'Nom : '+currentBooking.nom}
              theme={{colors: {primary:Colors.background,text:'white'}}}
              style={{backgroundColor:Colors.background}}
              underlineColor='white'
          />
          <TextInput
              mode='outlined'
              value={'Prénom : '+currentBooking.prenom}
              theme={{colors: {primary:Colors.background,text:'white'}}}
              style={{backgroundColor:Colors.background}}
              underlineColor='white'
          />
          <TextInput
              mode='outlined'
              value={'Téléphone : '+currentBooking.num}
              theme={{colors: {primary:Colors.background,text:'white'}}}
              style={{backgroundColor:Colors.background}}
              underlineColor='white'
          />
          <TextInput
              mode='outlined'
              value={'Numéro de réservation : '+currentBooking.id}
              theme={{colors: {primary:Colors.background,text:'white'}}}
              style={{backgroundColor:Colors.background}}
              underlineColor='white'
          />
        </View>
      </View>
    
    
     );    
};

OwnerBookingsDetailScreen.navigationOptions= navData => {
   const phoneN = navData.navigation.getParam('phoneNumber');
    return {
        headerRight : ()=>  
              (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                <Item title = "callCustomer" 
                  iconName = {Platform.OS === 'android' ? 'md-call' : 'ios-call'} 
                  color={Colors.primary} 
                  onPress={()=>{
                    let phoneNumber = '';
    
                    if (Platform.OS === 'android') {
                      phoneNumber = `tel:${`${phoneN}`}`;
                    } else {
                      phoneNumber = `telprompt:${`${phoneN}`}`;
                    }
                
                    Linking.openURL(phoneNumber);
                  }}
                />
              </HeaderButtons>
            ),
            headerTitle:phoneN,
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
  justifyContent:'flex-end',
  alignItems:'center',
  padding:20,
},
cardContainer : {
    width : " 97%" ,
    height : 300,
    justifyContent : "center",
    backgroundColor : "rgba(80, 80, 80,0.9)",
    borderRadius : 15,
    marginVertical : 10,
    paddingHorizontal:10
}
});

export default OwnerBookingsDetailScreen;