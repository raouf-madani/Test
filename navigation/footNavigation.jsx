import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform,Image,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/homeScreen';
import MyBookingsScreen from '../screens/myBookingsScreen';
import BookingMatchScreen from '../screens/booking/bookingMatchScreen';
import TypeMatchScreen from '../screens/booking/typeMatchScreen'; 
import TypeMembershipScreen from '../screens/membership/typeMembershipScreen';
import LoginScreen from '../screens/user/loginScreen';
import ProfileChoiceScreen from '../screens/profileChoiceScreen';
import SignupScreen from '../screens/user/signupScreen';
import SignupOwnerScreen from '../screens/user/signupOwnerScreen';

import SideBar from '../components/SideBar';
import {Ionicons} from "@expo/vector-icons";
import PlayerHomeScreen from '../screens/home/playerHomeScreen';
import OwnerHomeScreen from '../screens/home/ownerHomeScreen';
import stadiumChoiceScreen from "../screens/playerBooking/stadiumChoiceScreen"

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

const FootNavigation = createStackNavigator({
   Role : ProfileChoiceScreen ,
   Player : PlayerHomeScreen , 
   Owner : OwnerHomeScreen,
   Stadiums : stadiumChoiceScreen,
   Home: HomeScreen,
   TypeMatch: TypeMatchScreen,
   TypeMembership: TypeMembershipScreen,
   BookingMatch: BookingMatchScreen , 
   Signup: SignupScreen,
   Login: LoginScreen,
   SignupOwner:SignupOwnerScreen 
},
{
    defaultNavigationOptions: defaultNavigation
});

const BookingNavigation =  createStackNavigator (
  {
    Bookings : MyBookingsScreen
  
  }
  
  );


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



const styles= StyleSheet.create({
  

});


export default createAppContainer(MainNavigator);
