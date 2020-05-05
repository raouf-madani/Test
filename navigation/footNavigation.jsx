import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"

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
import ForgotPasswordScreen from "../screens/forgotPasswordScreen";
import StartupScreen from "../screens/startupScreen";


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
    headerBackTitle : " " ,
    headerTintColor: Platform.OS === "android"? '#fff' : "rgba(53, 53, 53,1)" ,
    headerStyle:{
      backgroundColor:Platform.OS === "android" ?  "rgba(53, 53, 53,0.95)" : "white"
  },
  } ,
activeColor: '#f0edf6',
shifting : true ,
labeled  : true

} ) ;




///////////////////////////////////////////////////////////////////

//Main Stack Navigator
const FootNavigation = createStackNavigator({
   
   Player : PlayerHomeScreen , 
   Owner : OwnerHomeScreen,
   Stadiums :  stadiumChoiceScreen ,
   StadiumBooking : stadiumBookingScreen ,
   OwnerService : OwnerServiceScreen,
   EditService: EditServiceScreen,
   OwnerBookings: OwnerBookingsScreen,
   OwnerBookingsDetail: OwnerBookingsDetailScreen,
   OwnerSupport: OwnerSupportScreen,
   OwnerProfile: OwnerProfileScreen,
   PlayerBookings :{ 
     screen : PlayerBookingsTab 
    
    },
   OwnerSupport: OwnerSupportScreen,
   PlayerProfileScreen: PlayerProfileScreen,
   OwnerGalery: OwnerGaleryScreen
},
);


 const AuthNavigation = createStackNavigator({
  Login: LoginScreen,
  Role : ProfileChoiceScreen,
  Signup: SignupScreen,
  SignupOwner:SignupOwnerScreen,
  ForgotPassword:ForgotPasswordScreen
 });

const MainNavigation = createSwitchNavigator({
  Startup:StartupScreen,
  Auth: AuthNavigation,
  Main: FootNavigation
})


export default createAppContainer(MainNavigation);
