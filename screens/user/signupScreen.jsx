import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image,KeyboardAvoidingView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';

const SignupScreen = props =>{

    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage} blurRadius={0}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100} style={styles.overlayBackground}>
            <View style={styles.headingContainer}> 
              <View style={styles.titleContainer}>
                <Text style={styles.title}>مرحبا بكم</Text>
              </View> 
              <View style = {styles.iconContainer} >
                <Image style ={{height : "100%" , width : "100%"}} source = {require('../../assets/images/5.png')}/>
              </View>
            </View>
            <View style={styles.signupContainer}>
              <TextInput
                mode='flat'
                label='رقم الهاتف'
                placeholder='اكتب شيئا هنا'
                value={phone}
                onChangeText={prevValue=>setPhone(prevValue)}
                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                style={{backgroundColor:'transparent'}}
                underlineColor='white'
              />
              <TextInput
                mode='flat'
                label='كلمة السر'
                placeholder='اكتب شيئا هنا'
                value={password}
                onChangeText={prevValue=>setPassword(prevValue)}
                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                style={{backgroundColor:'transparent'}}
                underlineColor='white'
              />
            </View>
        </KeyboardAvoidingView> 
       </ImageBackground>
      </View>

     );    
};


const styles= StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
   },
   bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    height:'100%',
    width:'100%',
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1
  },
  headingContainer:{
    margin:20
  },
  iconContainer : {  
    overflow : "hidden" ,
    width : 110 , 
    height : 110 , 
    alignSelf : "center" 
  },
  titleContainer:{
    alignItems:'center',
    padding:10
  },
  title:{
    color:'white',
    fontFamily:'poppins-bold',
    fontSize:50
  },
  signupContainer:{
    padding:20
  }
   

});

export default SignupScreen;