import React, {useState} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View,ScrollView,ImageBackground,Platform} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const BookingMatchScreen = props =>{

   const [lastName,setLastName] = useState('');
   const [firstName,setFirstName] = useState('');
   const [phone,setPhone] = useState('');
   const [matchTime,setMatchTime] = useState('');
   const [isDatePickerVisible,setIsDatePickerVisible] = useState(false);

   const hideDatePicker = ()=>{
     setIsDatePickerVisible(false);
   };

   const handleConfirm = Date =>{
     hideDatePicker();
     setMatchTime(Date.toString());   
   };
   


    return(
      <ImageBackground source={require('../../assets/images/night.jpg')} style={styles.bigBackgroundImage}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
            <ScrollView>
              <View style= {styles.textContainer}>
              <Text style= {styles.text}>Remplir le formulaire</Text>
              </View> 
              <View style={styles.formControl}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='Nom'
                      placeholder='Votre nom'
                      value={lastName}
                      onChangeText={prevText=>setLastName(prevText)}
                      theme={{colors: {primary:Colors.primary}}}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='Prénom'
                      placeholder='Votre prénom'
                      value={firstName}
                      onChangeText={prevText=>setFirstName(prevText)}
                      theme={{colors: {primary:Colors.primary}}}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='Téléphone'
                      placeholder='Numéro de téléphone'
                      value={phone}
                      onChangeText={prevText=>setPhone(prevText)}
                      theme={{colors: {primary:Colors.primary}}}
                      
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='Créneau'
                      placeholder="Jouer et l'heure"
                      value={matchTime}
                      onChangeText={prevMatchTime=>setMatchTime(prevMatchTime)}
                      theme={{colors: {primary:Colors.primary}}}
                      onFocus={()=>setIsDatePickerVisible(true)}
                    />
                  </View>  
                  
                  <DateTimePickerModal 
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />

                  <View style={styles.buttonContainer}>
                  <Button 
                  theme={{colors: {primary:Colors.primary}}} 
                  mode={Platform.OS === 'android' ? "contained" : "outlined"}
                  labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
                  contentStyle={{width:'100%'}}
                  style={{borderRadius:20, borderColor:'white'}}
                  onPress={() =>props.navigation.navigate('Signup')}
                  >
                   Confirmer
                  </Button>
                  </View>
              </View>
            </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
     );    
};


const styles= StyleSheet.create({
  bigBackgroundImage:{
    flex:1,
    resizeMode:'cover'
 },
  textContainer : {
    alignSelf : "center",
    marginTop : 40,
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  text : {
    color : "white" ,
    fontSize : 23 ,
    fontFamily : "poppins-bold"
  },
  keyboard:{
    flex:1
  },
  formControl:{
    margin:20,
  },
  inputContainer:{
    padding:5
  },
  buttonContainer:{
    padding:20,
    alignItems:'center',
    width:'100%'
  }
   
});

export default BookingMatchScreen;