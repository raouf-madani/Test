import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform,Image,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

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
   Signup: SignupScreen,
   Login: LoginScreen,
   SignupOwner:SignupOwnerScreen,
   OwnerService : OwnerServiceScreen,
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
