import React from 'react';
import { StyleSheet, Text, View, ImageBackground , Image} from 'react-native';
import SmallCard  from '../../components/SmallCard';


const PlayerHomeScreen = props =>{
    return(
      <View style ={styles.container}>
        <ImageBackground source = {require("../../assets/images/profileBack5.jpg")}  style = {styles.backgroudnImage}>
         
         <View style = {styles.textContainer}>
            <Text style = {styles.welcomeText}>BIENVENUE</Text>

         </View>

          <View style = {styles.rowsContainer}>
              <View style = {styles.rowOne}>
                  <SmallCard 
                  image ={require("../../assets/logo/user.png")} 
                  screen = "Profile"
                  onPress = {() =>props.navigation.navigate('Home')}
                  />
                  
                  <SmallCard
                  image ={require("../../assets/logo/book.png")} 
                  screen = "Réservez"
                  onPress = {() =>props.navigation.navigate('Stadiums')}
                   />

              </View> 

              <View style = {styles.rowTwo}>
                  
                  <SmallCard
                    image ={require("../../assets/logo/calendar.png")} 
                    screen = "Réservations"
                     />

                  <SmallCard
                    image ={require("../../assets/logo/football2.png")} 
                    screen = "Something"
                   />

              </View>
       
            </View>

        </ImageBackground>


      </View>

     );    
};


const styles= StyleSheet.create({
  container : {
      flex : 1,
  },
  backgroudnImage : {
    flex : 1 ,
    justifyContent : "center"
  },
  image : {
        width : "100%",
        height : "100%"
  },
  imageContainer : {
      width : 100,
      height : 100,
      alignSelf : "center",
      marginVertical : 30
  },
  rowsContainer : {
      alignItems :"center",
      justifyContent : "space-around" 
  },
  rowOne : {
      flexDirection : "row",
      width : "80%",
      height : "30%",
    
      
  },
  rowTwo : {
    flexDirection : "row",
    width : "80%",
    height : "30%",
    marginBottom : 30
},

    textContainer : {
            alignSelf : "center",

    },
    welcomeText : {
        fontFamily : "poppins-bold",
        fontSize : 45,
        color : "white",
        letterSpacing : 5,

    }

   

});

export default PlayerHomeScreen;