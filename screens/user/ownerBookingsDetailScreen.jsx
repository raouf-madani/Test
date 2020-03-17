import React,{useEffect} from 'react';
import { StyleSheet,View,Text,ScrollView,Linking} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import Colors from '../../constants/Colors';



const OwnerBookingsDetailScreen = props =>{

    const bookingID = props.navigation.getParam('bookingID');
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
    const currentBooking = data.find(booking => booking.id === bookingID);
    
    useEffect(()=>{
    props.navigation.setParams({phoneNumber:currentBooking.num});
    },[currentBooking.num]);
      
    return(
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{flex:1,justifyContent:'center'}}>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Nom : </Text>
            <Text style={styles.infoDetail}> {currentBooking.nom}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Prénom : </Text>
            <Text style={styles.infoDetail}> {currentBooking.prenom}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Numéro de téléphone : </Text>
            <Text style={styles.infoDetail}> {currentBooking.num}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Date : </Text>
            <Text style={styles.infoDetail}> {currentBooking.date}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Créneau : </Text>
            <Text style={styles.infoDetail}> {currentBooking.creneauD+' > '+currentBooking.creneauF}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Type du match : </Text>
            <Text style={styles.infoDetail}> 5vs5</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Statut : </Text>
            <Text style={styles.infoDetail}> {currentBooking.statut}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Numéro de la réservation : {currentBooking.id}</Text>
            <Text></Text>
        </View>
     </ScrollView>   
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
              
            )
    
    };

 };

const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'flex-start',
    padding:20
},
infoContainer:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    flexDirection:'row',
    margin:10,
    padding:5
},
info:{
    fontFamily:'poppins-bold',
    color:'white'
},
infoDetail:{
    fontFamily:'poppins',
    color:'white',
    fontSize:15
}
});

export default OwnerBookingsDetailScreen;