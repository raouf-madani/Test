import React from 'react';
import { StyleSheet,View,Text,ImageBackground,Platform,Button} from 'react-native';
//import {Button} from 'react-native-paper';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const ServiceCard = props =>{

    return(
     
    <View style={styles.container}>
       
            <View style={styles.titleContainer}>
            <Text style={styles.title}>SERVICE {props.serviceNumber}</Text>
            </View>
            

            <View style={styles.infoContainer}>
                <View style={styles.infoMatchContainerLeft}>
                    <View style={styles.typeTimeMatchContainer}>
                        <Ionicons name={Platform.OS === 'android' ? 'ios-person' : 'ios-person'} size={25} color={Colors.primary}/>
                        <Text style={styles.typeMatch}> {props.typeMatch} </Text>
                        <Ionicons name={Platform.OS === 'android' ? 'ios-person' : 'ios-person'} size={25} color={Colors.primary}/>
                    </View>
                    <View style={styles.typeTimeMatchContainer}>
                        <Ionicons name={Platform.OS === 'android' ? 'md-hourglass' : 'ios-trash'} size={25} color={Colors.primary}/>
                        <Text style={styles.typeMatch}> {props.durationMatch} heure</Text>
                    </View>
                </View>
                <View style={styles.infoMatchDateContainerRight}>
                    <View style={styles.typeTimeMatchContainer}> 
                        <Ionicons name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'} size={25} color={Colors.primary}/>
                        <Text style={styles.edit}> modifier </Text>
                    </View>
                    <View style={styles.typeTimeMatchContainer}>
                        <Ionicons name={Platform.OS === 'android' ? 'md-time' : 'ios-time'} size={25} color={Colors.primary}/>
                        <Text style={styles.edit}> modifier </Text>
                    </View>
                </View>
            </View>

            <View style={styles.tarifContainer}>
                <Text style={styles.title}>{props.price} <Text style={styles.algerianDinar}>DA/Equipe</Text></Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonWidth}>
                    <Button color={Colors.primary} title="Supprimer"/>
                </View>
            </View>

        
    </View>
    );    
};


const styles= StyleSheet.create({
   
 container:{
    borderRadius:10,
    margin:20,
    height:300,
    backgroundColor:"rgba(1,2,3,0.6)"
 },

 titleContainer:{
    width:'100%',
    height:'25%',
    alignItems:'center',
    justifyContent:'center'
 },
 title:{
     fontFamily:'poppins-bold',
     fontSize:30,
     color:Colors.primary
 },
 infoContainer:{
    width:'100%',
    height:'35%',
    justifyContent: 'space-between',
    flexDirection:'row'
 },
 typeMatch:{
    fontSize:18,
    fontFamily:'poppins',
    color:'white',
 },
 edit:{
    fontSize:18,
    fontFamily:'poppins',
    color:'white',
    borderBottomColor:'white',
    borderBottomWidth:1
 },
 infoMatchContainerLeft:{
     width:'50%',
     padding:5,
     alignItems:'center'
 },
 infoMatchDateContainerRight:{
     width:'50%',
     padding:5,
     alignItems:'center'
 },
 typeTimeMatchContainer:{
    flexDirection:'row',
    paddingVertical:10
 },
 tarifContainer:{
     paddingVertical:10,
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'20%'
 },
 algerianDinar:{
     fontSize:14,
     fontFamily:'poppins',
     color:'white'
 },
 buttonsContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height:'20%',
    paddingHorizontal: 20,
    
 },
 buttonWidth:{
    width:'40%',
    borderRadius:20,
    overflow:'hidden'
 },
});

export default ServiceCard;