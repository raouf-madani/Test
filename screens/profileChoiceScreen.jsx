import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import Card from "../components/Card";

const ProfileChoiceScreen = props =>
{
    return(
      <View style = {styles.container}>

        <ImageBackground 
        source={require('../assets/images/test.jpg')} style={styles.bigBackgroundImage} 
        blurRadius={0}
        fadeDuration = {0}
        >

          <View style = {styles.generalContainer}>

                <View style = {styles.textContainer}> 
                    <Text style = {{fontSize : 24 , fontFamily : "poppins-bold" , letterSpacing : 2 , color :"white"}}>Choisissez votre camps</Text>
                </View>

                <View style = {styles.cardsContainer}>
                <Card 
                url = {require("../assets/logo/soccer-field.png")}
                role = "Proprétaire"
                fonctionA = "Ajoutez votre Stade"
                fonctionB = "Louez votre Stade"
                onPress={() =>props.navigation.navigate('Owner')}
                    />

                <Card 
                url = {require("../assets/logo/football-player.png")}
                role = "Joueur"
                fonctionA = "Reservez un stade"
                fonctionB = "Trouvez un adversaire"
                onPress={() =>props.navigation.navigate('Player')}
                 />


            </View>
</View>
         </ImageBackground>

      </View>

     );    
};


const styles= StyleSheet.create({
        container : {
            flex : 1 ,
        },
        bigBackgroundImage:{
            flex:1,
            height:'100%',
            width:'100%',
            justifyContent : "center"
          },
          generalContainer : {
                justifyContent : "center",
                alignItems : "center",
                width : "100%",
                height : "60%"
          },
          cardsContainer : {
            flex : 1 ,
            flexDirection : "row",
            justifyContent : "space-around",
            alignItems : "center",
            width : "100%"
           
          },
          textContainer : {
                justifyContent : "center",
                alignItems :"center",
                
               
          }


});

export default ProfileChoiceScreen;