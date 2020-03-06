import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native-paper';
import Colors from "../constants/Colors";

const Card = props =>{
    return(
      <View style = {styles.container}>  

          <View style = {styles.imageContainer}>
              <Image style = {styles.image} source ={props.url} />
            
          </View>

          <View style = {styles.textContainer}>
                <Text style ={styles.role}>{props.role}</Text>
                
                <Text style = {styles.fonctions}>{props.fonctionA}</Text>
               

          </View>

          <View style={styles.buttonContainer}>
              <Button 
                  theme={{colors: {primary:Colors.primary}}} 
                  mode={Platform.OS === 'android' ? "contained" : "outlined"}
                  labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
                  contentStyle={{width:'100%'}}

                  style={{borderColor:'white' , 
                  borderWidth : 0.5 , 
                  backgroundColor :  "rgba(198, 34, 37, 0.6)",
                  borderRadius : 25
                  
                  }}
                 onPress = {props.onPress}
                  
                >
                  Choisir
                </Button>
            </View>

      </View>

     );    
};


const styles= StyleSheet.create({
    container :{
       
        borderWidth : 2 ,
        borderColor : "white",
        backgroundColor :  "rgba(52, 52, 52, 0.6)",
        width : "45%"
    },
    imageContainer : {
        height : 95 ,
        width : 95,
        alignSelf : "center",
        marginTop : 20
    },
    image :{
        height : "100%",
        width : "100%"

    },
    textContainer :{
        alignItems : "center",
        marginTop : 25 ,
        marginBottom : 30
    },

    role : {
        fontFamily : "poppins-bold",
        color : "white",
        fontSize : 18,
        letterSpacing : 2
    },
    fonctions:{
        fontFamily : "poppins",
        color : "white"

    }, 
    buttonContainer:{
      padding:20,
      alignItems:'center',
      width:'100%',
      
    }

   

});

export default Card;