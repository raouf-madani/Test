import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { Platform } from "react-native";


const CustomHeaderButton = props =>{
Platform
     return <HeaderButton 
     {...props} 
     IconComponent = {Ionicons}
     iconSize={32}
     color = "white"
     />

};


export default CustomHeaderButton;

