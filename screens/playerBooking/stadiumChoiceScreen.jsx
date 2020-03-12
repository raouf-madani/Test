import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground} from 'react-native';

import StadiumCard from '../../components/StadiumCard';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from "../../constants/Colors";

const StadiumChoiceScreen = props =>{
    return(
      <ImageBackground source = {require ("../../assets/images/profileBack5.jpg")} style ={styles.container} blurRadius = {1}>
      
        <View style = {styles.componentsContainer}>
        <SearchBar
        placeholder="Ville"
        containerStyle = {styles.searchBar}

        inputContainerStyle = {{
                borderRadius : 25

        }}

        lightTheme = {true}
        searchIcon = {{color : Colors.primary , size : 25}}
      />
            <ScrollView>
                <StadiumCard
                  name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa"
                  onPress = {()=>props.navigation.navigate("StadiumBooking")}
                 />
                
                <StadiumCard
                name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa"
                   />

                <StadiumCard 
                  name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa"
                />
                <StadiumCard
                name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa" 

                  />

                <StadiumCard
                  name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa" 

                  />
                </ScrollView>

        </View>
          
      </ImageBackground>

     );    
};


const styles= StyleSheet.create({
    container : {
            flex: 1 ,
            justifyContent : "flex-end"
            
            
    },
    componentsContainer : {
        width : "100%",
        height : "93%"
    },
    searchBar :{
      width : "80%" , 
      alignSelf : "center",
      borderRadius : 20 , 
      backgroundColor : "rgba(52, 52, 52, 0)" ,
      marginBottom : 15 ,
       borderTopWidth : 0 , 
       borderBottomWidth : 0 }
    
   

});

export default StadiumChoiceScreen;