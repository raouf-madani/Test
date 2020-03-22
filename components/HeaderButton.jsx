import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { Platform } from "react-native";


const CustomHeaderButton = props =>{

     return <HeaderButton 
     {...props} 
     IconComponent = {Ionicons}
     iconSize={32}
     
     />

};


export default CustomHeaderButton;

