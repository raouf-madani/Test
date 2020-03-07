import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,KeyboardAvoidingView,Text,Platform,Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';

const LoginScreen = props =>{

  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage} blurRadius={0}>
       <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
           <ScrollView>
             <View style={styles.titleContainer}>
               <Text style={styles.title}>Bienvenue à</Text>
             </View>
             <View style = {styles.iconContainer} >
              <Image style={{width:'100%', height:'100%'}} source = {require('../../assets/images/5.png')}/>
             </View>
             <View style={styles.signupContainer}>
               <View style={styles.inputsContainer}>
                 <TextInput
                   mode='flat'
                   label='Téléphone'
                   placeholder='Votre numéro de téléphone'
                   value={phone}
                   onChangeText={prevValue=>setPhone(prevValue)}
                   theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                   style={{backgroundColor:'transparent'}}
                   underlineColor='white'
                 />
                 <TextInput
                   mode='flat'
                   label='Mot de passe'
                   placeholder='Rentrez votre mot de passe'
                   value={password}
                   onChangeText={prevValue=>setPassword(prevValue)}
                   theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                   style={{backgroundColor:'transparent'}}
                   underlineColor='white'
                 />
               </View>
               <View style={styles.buttonsContainer}>
                 <View style={styles.buttonContainer}>
                   <Button
                   theme={{colors: {primary:Colors.orange}}} 
                   mode={Platform.OS === 'android' ? "contained" : "outlined"}
                   labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.orange}}
                   contentStyle={{width:'100%'}}
                   style={{borderRadius:20, borderColor:'white'}}
                   icon='camera'
                   dark={true}
                   >Se connecter 
                   </Button>
                 </View>
                 <View style={styles.facebookContainer}>
                   <View style={styles.accountTextContainer}>
                    <Text style={styles.accountOrText}>Je n'ai pas un compte ?</Text>
                   </View>
                   <View style={styles.loginFacebookContainer}>
                     <Text style={styles.registerNowText}>S'inscrire Maintenant</Text>
                     <Text style={styles.accountOrText}>Ou</Text>
                     <Text style={styles.connectWidthText}>Se connecter avec</Text>
                     <View style={styles.facebookIconContainer}>
                      <Image source = {require('../../assets/images/facebook24.png')} /> 
                     </View>     
                   </View>
                 </View>
               </View>
             </View>
           </ScrollView>
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
  titleContainer:{
    alignItems:'center',
    marginTop:40,
    alignSelf:'center'
  },
  title:{
    color:'white',
    fontFamily:'poppins',
    fontSize:40
  },
  iconContainer :{  
    overflow : "hidden",
    width : 90 , 
    height : 90 ,  
    alignSelf : "center"
   },
  signupContainer:{
    padding:20
  },
  inputsContainer:{
    marginBottom:30
  },
  buttonsContainer:{
    marginHorizontal:40
  },
  buttonContainer:{
    paddingVertical:5
  },
  facebookContainer:{
     alignItems:'center',
     justifyContent:'center',
     marginVertical:20
  },
  accountTextContainer:{
     marginHorizontal:8,
     marginVertical:10
  },
  accountOrText:{
    fontFamily:'poppins',
    fontSize:13,
    color:'#A8A8A8'
  },
  loginFacebookContainer:{
    alignItems:'center',
     justifyContent:'center',
  },
  registerNowText:{
    fontFamily:'poppins',
    fontSize:13,
    color:Colors.orange
  },
  connectWidthText:{
    fontFamily:'poppins',
    fontSize:13,
    color:'white'
  },
  facebookIconContainer:{
    paddingVertical:5
  } 
   

});

export default LoginScreen;