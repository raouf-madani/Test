import React from 'react';
import { Overlay } from 'react-native-elements';
import { Text, View, Button,StyleSheet,Alert} from 'react-native'; 
import {Ionicons} from "@expo/vector-icons";
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';


const SlotDetail = props=>{

const dispatch = useDispatch();
 
return(

        <View>
         <Overlay overlayStyle= {styles.overlay}  isVisible={props.isVisible} >
           <View style={{hegiht:'100%'}}>
              
                  <View style={{alignSelf :"center"}}>
                     <Text style={styles.title}>Mes Créneaux</Text>      
                  </View>
                        

                  <View style={styles.row}>
                           <View>
                              <Ionicons 
                              name="md-time" 
                              size={24} 
                              color="white" 
                              />
                           </View>
                           <View style={{width:"85%"}}>
                              <Text style={styles.mainText}>{props.day}</Text>
                              <Text style={styles.smallText}>{props.debut+'-'+props.end}</Text>
                           </View>
                  </View>
                
           </View>
         </Overlay>
        </View>
        );


};


const styles = StyleSheet.create({
overlay : {
        backgroundColor :   "#323232",
        width:"90%"
},

title :{
   fontFamily : "poppins-bold",
   color :"white",
   fontSize : 25
},
row :{
   flexDirection:"row",
   justifyContent:"space-around",
   backgroundColor:"rgba(80, 80, 80,0.7)",
   marginVertical : 2,
   paddingVertical : 5      
},
mainText :{
    color :"white",
    fontFamily : "poppins-bold",
},
smallText : {
    color : "white",
    fontFamily : "poppins",

}



});

export default SlotDetail;