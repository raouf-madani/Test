import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import homeScreen from "../screens/homeScreen";
import typeMatchScreen from "../screens/booking/typeMatchScreen";
import typeMembershipScreen from "../screens/membership/typeMembershipScreen"


const BookingNavigator = createStackNavigator ({
        Home : homeScreen ,
        Match : typeMatchScreen,
        Membership : typeMembershipScreen

});

export default createAppContainer(BookingNavigator);