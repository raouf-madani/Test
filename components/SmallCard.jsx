import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native-paper';
import Colors from "../constants/Colors";

const SmallCard = props =>{
    return(
      <View style = {styles.container}>  
            <View style = {styles.card}>

                <View style= {styles.imageContainer}>
                        <Image style={styles.image} source ={props.image}/>

                </View>
                
                <View style = {styles.textContainer}>
                        <Text style = {styles.text}>
                        
                        {props.screen}
                        
                        </Text>

                </View>

            </View>


      </View>

     );    
};


const styles= StyleSheet.create({
        container : {
                flex : 1 ,
                
        },
        card : {
            width : "80%",
            height : "100%",
            marginHorizontal : 20,
            borderWidth : 2 ,
            borderColor : "white",
            backgroundColor :  "rgba(52, 52, 52, 0.3)",
            justifyContent : "space-around",
            alignItems : "center"
        },
        imageContainer : {
            width : "35%",
            height : "35%"
        },

        image: {
                width : "100%",
                height : "100%",
                flexShrink : 1
                
        },
        text : {
              
                fontFamily : "poppins",
                color : "white"
        }
   

});

export default SmallCard;