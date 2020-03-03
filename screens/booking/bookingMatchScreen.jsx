import React, {useState} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View,ScrollView,ImageBackground,Platform} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';

const BookingMatchScreen = props =>{

   const [lastName,setLastName] = useState('');
   const [firstName,setFirstName] = useState('');
   const [phone,setPhone] = useState('');
   


    return(
      <ImageBackground source={require('../../assets/images/night.jpg')} style={styles.bigBackgroundImage}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
            <ScrollView>
              <View style= {styles.textContainer}>
              <Text style= {styles.text}>إملئ الإستمارة</Text>
              </View> 
              <View style={styles.formControl}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='اللقب'
                      placeholder='اكتب شيئا هنا'
                      value={lastName}
                      onChangeText={prevText=>setLastName(prevText)}
                      theme={{colors: {primary:Colors.primary,underlineColor:'transparent'}}}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='الإسم'
                      placeholder='اكتب شيئا هنا'
                      value={firstName}
                      onChangeText={prevText=>setFirstName(prevText)}
                      selectionColor='red'
                      underlineColor='green'
                      theme={{colors: {primary:Colors.primary,underlineColor:'transparent'}}}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      mode='outlined'
                      label='رقم الهاتف'
                      placeholder='اكتب شيئا هنا'
                      value={phone}
                      onChangeText={prevText=>setPhone(prevText)}
                      theme={{colors: {primary:Colors.primary,underlineColor:'transparent'}}}
                      
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                  <Button 
                  theme={{colors: {primary:Colors.primary}}} 
                  mode={Platform.OS === 'android' ? "contained" : "outlined"}
                  labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
                  contentStyle={{width:'100%'}}
                  style={{borderRadius:20, borderColor:'white'}}
                  onPress={() =>console.log('Pressed')}
                  >
                  إرسل الآن
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
    marginTop : 20,
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  text : {
    color : "white" ,
    fontSize : 25 ,
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