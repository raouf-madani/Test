import React from 'react';
import { StyleSheet, Text, View,Image,Button, ImageBackground} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";


const StadiumCard = props =>{
  
    return(
        <ImageBackground source = {require("../assets/images/cardback1.jpg")} style = {styles.cardContainer}>

        <View style = {styles.imageContainer}>
            <Image source = {require("../assets/images/imagefive.jpg")} style = {styles.image}  />

        </View>
         
            <View style={styles.textContainer}>
            
            <View>
                <Text style = {styles.title}>
                {props.name}
                </Text>

                <Text style = {styles.adress}>
                {props.adress}
                </Text>
             </View>
      
            <View style = {styles.buttonContainer}>
                    <Button title = "Choisir" color ={Colors.secondary} onPress = {props.onPress}/>

            </View>

          

        </View>

        <View style = {styles.info}>

        <Ionicons 
        name = "md-information-circle" 
        size = {25}
         color = {Colors.secondary} 
         onPress = {props.infoPress}

         />
        </View>
      
    </ImageBackground>



     );    
};


const styles= StyleSheet.create({
    cardContainer : {
        width : "100%" ,
        height : 120,
        backgroundColor : "rgba(255, 255, 255,0.85)",
        flexDirection : "row",
        justifyContent : "space-around",
        overflow : "hidden",
        alignSelf : "center",
        marginBottom : 12,
        borderRadius : 10,
        borderWidth : 2
    
    },
    imageContainer : {
            width : "25%",
            height : "85%",      
            alignSelf : "center",
            borderRadius :22,
            overflow : "hidden"

    },

    image : {
            height : "100%",
            width : "100%",
           

    },
    textContainer : {
            
            width : "55%",
            overflow : "hidden",
            justifyContent : "space-around",
            alignItems : "center"
    },
   
    title : {
        alignSelf : "center",
        fontFamily : "poppins-bold",
        letterSpacing : 1,
        color : "black"
        
    },
    adress : {
           alignSelf : "center",
           fontSize : 12,
           color : "black"
    },
    info : {
        alignSelf : "flex-start"
    }
    
  
   
   

});

export default StadiumCard;