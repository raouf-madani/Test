import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform,Image,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/homeScreen';
import MyBookingsScreen from '../screens/myBookingsScreen';
import BookingMatchScreen from '../screens/booking/bookingMatchScreen';
import TypeMatchScreen from '../screens/booking/typeMatchScreen'; 
import TypeMembershipScreen from '../screens/membership/typeMembershipScreen';
import LoginScreen from '../screens/user/loginScreen';
import ProfileChoiceScreen from '../screens/profileChoiceScreen';
import SignupScreen from '../screens/user/signupScreen';
import SignupOwnerScreen from '../screens/user/signupOwnerScreen';
import UserServiceScreen from '../screens/user/userServiceScreen';
import EditServiceScreen from '../screens/user/editServiceScreen';
import OwnerBookingsScreen from '../screens/user/ownerBookingsScreen';
import OwnerBookingsDetailScreen from '../screens/user/ownerBookingsDetailScreen';
import OwnerSupportScreen from '../screens/user/ownerSupportScreen';
import OwnerProfileScreen from '../screens/user/ownerProfileScreen';

import PlayerBookingsScreen from "../screens/player/playerBooking/playerBookingsScreen";

import SideBar from '../components/SideBar';
import {Ionicons,  MaterialIcons} from "@expo/vector-icons";
import PlayerHomeScreen from '../screens/home/playerHomeScreen';
import OwnerHomeScreen from '../screens/home/ownerHomeScreen';
import stadiumChoiceScreen from "../screens/player/playerBooking/stadiumChoiceScreen";
import stadiumBookingScreen from "../screens/player/playerBooking/stadiumBookingScreen";
import PlayerExpiredBookingsScreen from '../screens/player/playerBooking/playerExpiredBookingsScreen';
import PlayerProfileScreen from "../screens/player/playerProfile/playerProfileScreen";

const defaultNavigation = {
  headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
    headerTitle: () => (
      <Image 
      resizeMode="cover"
      style={{
        width:150,
        height:40,
        resizeMode:'contain',
        alignSelf: 'center'}}
      
      />
    )
}

///////////////////////////////////////////////////////////////////
//Tab Navigator For Player Bookings Screen
const tabConfig = {
  Réservations : {
          screen : PlayerBookingsScreen ,
          navigationOptions : {
            
            tabBarLabel : "Mes Réservations" ,
            tabBarColor : "#006d6a" ,
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
  activeColor: '#f0edf6',
shifting : true ,
labeled  : true



} ) ;

///////////////////////////////////////////////////////////////////

//Main Stack Navigator
const FootNavigation = createStackNavigator({
   Role : ProfileChoiceScreen ,
   Player : PlayerHomeScreen , 
   Owner : OwnerHomeScreen,
   Stadiums : stadiumChoiceScreen,
   StadiumBooking : stadiumBookingScreen ,
   Home: HomeScreen,
   TypeMatch: TypeMatchScreen,
   TypeMembership: TypeMembershipScreen,
   BookingMatch: BookingMatchScreen , 
   Signup: SignupScreen,
   Login: LoginScreen,
   SignupOwner:SignupOwnerScreen,
   UserService : UserServiceScreen,
   EditService: EditServiceScreen,
   OwnerBookings: OwnerBookingsScreen,
   OwnerBookingsDetail: OwnerBookingsDetailScreen,
   OwnerSupport: OwnerSupportScreen,
   OwnerProfile: OwnerProfileScreen,
   PlayerBookings : PlayerBookingsTab ,
   OwnerSupport: OwnerSupportScreen,
   PlayerProfileScreen: PlayerProfileScreen
   
},
{
    defaultNavigationOptions: defaultNavigation
});

const BookingNavigation =  createStackNavigator (
  {
    Bookings : MyBookingsScreen
  
  }
  
  );



  //Drawer Navigator for the main screen
const MainNavigator = createDrawerNavigator({
          Home : {
            screen : FootNavigation , 
            navigationOptions : {
              drawerLabel : "Réserver Votre Match",
              drawerIcon : (tabInfo) => {
                return( <Ionicons name = "md-home" 
                size = {25} color ={tabInfo.tintColor}/>);
                  }

            }},

            Bookings : {
              screen : BookingNavigation , 
              navigationOptions : {
                drawerLabel : "Mes Réservations",
                drawerIcon : (tabInfo) => {
                  return( <Ionicons name = "md-bookmark" 
                  size = {25} color ={tabInfo.tintColor}/>);
                    }
  
              }

          },
        
},
{ 
  contentComponent : props => <SideBar {...props}/>,
 
  drawerBackgroundColor : "#fff",
  drawerWidth : "80%" ,
  hideStatusBar : "true" , 

  contentOptions : {
    activeBackgroundColor : "rgba(80,210,148,0.3)",
    activeTintColor : Colors.primary,
    itemContainerStyle : {
        marginTop : 16 ,
        marginHorizontal : 8

    },
    itemStyle : {
      borderRadius : 4

    }

  }

}
);

///////////////////////////////////////////////////////////////

const styles= StyleSheet.create({
  

});


export default createAppContainer(MainNavigator);
