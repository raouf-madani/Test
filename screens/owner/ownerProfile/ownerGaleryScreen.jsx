import React,{useState} from 'react';
import { StyleSheet,View,ImageBackground,Text,TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {Ionicons} from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const OwnerGaleryScreen = props =>{


    return(
    <View style={styles.container}>
     <ImageBackground source = {require("../../../assets/images/android.jpg")}  style={styles.backgroundImage}>
     
     </ImageBackground>
    </View>

     );    
};

OwnerGaleryScreen.navigationOptions= navData => {
    
     return {
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "save" 
                   iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                   color='white'
                 />
               </HeaderButtons>
               
             ),
             headerTitle:'Ma Galerie',
             headerTitleStyle:{
               fontFamily:'poppins',
               color:'white'
             },
             headerStyle:{
                 backgroundColor:Colors.background
             },
             headerTintColor:'white'
     
     };
 
  };


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white'
   },
   backgroundImage : {
    flex : 1,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default OwnerGaleryScreen;