import React from 'react';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";


const StadiumCard = props =>{
    return(
        <View style = {styles.cardContainer}>

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

        <Ionicons name = "md-information-circle" 
        size = {25} color = {Colors.secondary} />
        </View>
      
    </View>



     );    
};


const styles= StyleSheet.create({
    cardContainer : {
        width : "97%" ,
        height : 120,
        backgroundColor : "rgba(255, 255, 255, 0.9)",
        flexDirection : "row",
        justifyContent : "space-around",
        overflow : "hidden",
        alignSelf : "center",
        marginBottom : 12,
        borderRadius : 10,
    
    },
    imageContainer : {
            width : "25%",
            height : "85%",
            marginHorizontal : 5,
            alignSelf : "center"

    },

    image : {
            height : "100%",
            width : "100%",
            borderRadius :22

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
        
    },
    adress : {
           alignSelf : "center",
           fontSize : 12,
           color : "grey"
    },
    info : {
        alignSelf : "flex-start"
    }
    
  
   
   

});

export default StadiumCard;