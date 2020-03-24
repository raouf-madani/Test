import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import {HeaderButtons,Item} from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import LoginScreen from '../screens/loginScreen';
import ProfileChoiceScreen from '../screens/profileChoiceScreen';
import SignupScreen from '../screens/player/signupScreen';
import SignupOwnerScreen from '../screens/owner/signupOwnerScreen';
import OwnerServiceScreen from '../screens/owner/ownerBooking/ownerServiceScreen';
import EditServiceScreen from '../screens/owner/ownerBooking/editServiceScreen';
import OwnerBookingsScreen from '../screens/owner/ownerBooking/ownerBookingsScreen';
import OwnerBookingsDetailScreen from '../screens/owner/ownerBooking/ownerBookingsDetailScreen';
import OwnerSupportScreen from '../screens/owner/ownerProfile/ownerSupportScreen';
import OwnerProfileScreen from '../screens/owner/ownerProfile/ownerProfileScreen';
import OwnerGaleryScreen from '../screens/owner/ownerProfile/ownerGaleryScreen';

import PlayerBookingsScreen from "../screens/player/playerBooking/playerBookingsScreen";


import {Ionicons,  MaterialIcons} from "@expo/vector-icons";
import PlayerHomeScreen from '../screens/home/playerHomeScreen';
import OwnerHomeScreen from '../screens/home/ownerHomeScreen';
import stadiumChoiceScreen from "../screens/player/playerBooking/stadiumChoiceScreen";
import stadiumBookingScreen from "../screens/player/playerBooking/stadiumBookingScreen";
import PlayerExpiredBookingsScreen from '../screens/player/playerBooking/playerExpiredBookingsScreen';
import PlayerProfileScreen from "../screens/player/playerProfile/playerProfileScreen";


///////////////////////////////////////////////////////////////////
//Tab Navigator For Player Bookings Screen
const tabConfig = {
  Réservations : {
          screen : PlayerBookingsScreen ,
          navigationOptions : {
            tabBarLabel : "Mes Réservations" ,
            tabBarColor : Colors.secondary ,
            tabBarIcon : () => {
              return( <Ionicons name = "ios-calendar" 
              size = {22} color ="white"/>);
                },
        
        }
          
  } ,
  Expirés : {
          screen : PlayerExpiredBookingsScreen,
          navigationOptions : {
            
            tabBarLabel : "Expirées" ,
            tabBarColor : "rgba(198, 34, 37, 1)" ,
            tabBarIcon : () => {
              return( <MaterialIcons name = "history" 
              size = {22} color ="white"/>);
                }
        } 

  } 


}



const PlayerBookingsTab = createMaterialBottomTabNavigator(tabConfig, 
      
{
  navigationOptions : {
    title :"Mes Réservations",
    headerTintColor: '#fff' ,
    headerStyle:{
      backgroundColor:  "rgba(53, 53, 53,0.95)"
  },
  } ,
activeColor: '#f0edf6',
shifting : true ,
labeled  : true

} ) ;

///////////////////////////////////////////////////////////////////
//Tab Navigator For Owner Profile Screen

const tabConfig2 = {
  LogOut : {
          screen : OwnerProfileScreen ,
          navigationOptions : {
            tabBarLabel : "Se déconnecter" ,
            tabBarColor:"rgba(198, 34, 37, 1)",
            tabBarIcon : () => {
              return( <MaterialIcons name = "exit-to-app" 
              size = {22} color ="white"/>);
                }
        
        }
          
  }
}

const ownerProfileTab = createMaterialBottomTabNavigator(tabConfig2, 
      
  {
    navigationOptions : {
      headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "save" 
                   iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                   color='white'
                 />
               </HeaderButtons>
               
             ),
      headerTitle:'Mon Profile',
      headerTitleStyle:{
        fontFamily:'poppins',
        color:'white'
      },
      headerStyle:{
          backgroundColor:Colors.background
      },
      headerTintColor:'white'
    }
  
  } ) ;


///////////////////////////////////////////////////////////////////

//Main Stack Navigator
const FootNavigation = createStackNavigator({
   Role : ProfileChoiceScreen ,
   Player : PlayerHomeScreen , 
   Owner : OwnerHomeScreen,
   Stadiums : {
     screen : stadiumChoiceScreen ,
     navigationOptions : {headerTransparent : true,title : ""}
  
  },
   StadiumBooking : stadiumBookingScreen ,
   Signup: SignupScreen,
   Login: LoginScreen,
   SignupOwner:SignupOwnerScreen,
   OwnerService : OwnerServiceScreen,
   EditService: EditServiceScreen,
   OwnerBookings: OwnerBookingsScreen,
   OwnerBookingsDetail: OwnerBookingsDetailScreen,
   OwnerSupport: OwnerSupportScreen,
   OwnerProfile: {
     screen: ownerProfileTab
   },
   PlayerBookings :{ 
     screen : PlayerBookingsTab 
    
    },
   OwnerSupport: OwnerSupportScreen,
   PlayerProfileScreen: PlayerProfileScreen,
   OwnerGalery: OwnerGaleryScreen
},
);


 

///////////////////////////////////////////////////////////////

const styles= StyleSheet.create({
  

});


export default createAppContainer(FootNavigation);
