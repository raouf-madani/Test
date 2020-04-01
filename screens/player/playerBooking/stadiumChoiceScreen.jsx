import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground} from 'react-native';

import StadiumCard from '../../../components/StadiumCard';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from "../../../constants/Colors";
import InfoOverlay from '../../../components/InfoOverlay';

const StadiumChoiceScreen = props =>{

  const [overlayState , setOverlay] = useState (false);

  const overlayHandler = ()=> {

    setOverlay((previous) => !previous);
  }
  
    return(
     
      <ImageBackground
      source = {require("../../../assets/images/android.jpg")}
       style = {styles.container}
     blurRadius = {0}
       >
        <InfoOverlay 
        isVisible = {overlayState}
        infoHandler = {overlayHandler}
     
         />
      
        <View style = {styles.componentsContainer}>
        <SearchBar
        placeholder="Ville"
        containerStyle = {styles.searchBar}

        inputContainerStyle = {{
                borderRadius : 25

        }}

        lightTheme = {true}
        searchIcon = {{color : Colors.secondary, size : 25}}
      />
            <ScrollView>
                <StadiumCard
                  name = "Foot Five Blida"
                  adress = "18 Rue bab dzair rue soumaa"
                  onPress = {()=>props.navigation.navigate("StadiumBooking")}
                  infoPress = {overlayHandler}
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


StadiumChoiceScreen.navigationOptions = (navData) => {
return {
  headerTransparent : true,
  headerTintColor:'white',
  headerBackTitle : " ",
  title : ""
}

};

const styles= StyleSheet.create({
    container : {
            flex: 1 ,
            justifyContent : "flex-end",
            backgroundColor : "#323232",

    },

    componentsContainer : {
        width : "95%",
        height : "93%",
        alignSelf : "center"
    },
    searchBar :{
      width : "80%" , 
      alignSelf : "center",
      borderRadius : 20 , 
      backgroundColor : "rgba(52, 52, 52, 0)" ,
      marginBottom : 15 ,
      borderTopWidth : 0 , 
      borderBottomWidth : 0 
      }
    
   

});

export default StadiumChoiceScreen;