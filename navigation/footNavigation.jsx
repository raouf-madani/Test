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
import SignupScreen from '../screens/user/signupScreen';

const defaultNavigation = {
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
      source={require('../assets/logo/world_football.png')}
      />
    )
}

const FootNavigation = createStackNavigator({
   Home: HomeScreen,
   TypeMatch: TypeMatchScreen,
   BookingMatch: BookingMatchScreen,
   TypeMembership: TypeMembershipScreen
},
{
    defaultNavigationOptions: defaultNavigation
});

const styles= StyleSheet.create({
  

});

export default createAppContainer(FootNavigation);