import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native';


const InfoOverlay = props =>{
  
    return(   
        <Overlay isVisible={props.isVisible} >
        <View>
        <Text>Bookings Rules</Text>
        <Text>Rule 1 : </Text>
        <Text>Rule 2 :</Text>
        <Text>Rule 3 : </Text>
        <Button 
        title = "Close" 
        
        onPress = {()=>{
                props.infoHandler();
        }} />

        </View>
      </Overlay>

     );    
};


const styles= StyleSheet.create({

   

});

export default InfoOverlay;