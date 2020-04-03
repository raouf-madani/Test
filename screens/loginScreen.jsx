import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,KeyboardAvoidingView,Text,Platform,Image,Dimensions} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../constants/Colors';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const LoginScreen = props =>{

  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
   let titleContainerStyle= styles.titleContainer;
   let titleStyle = styles.title;
   let iconContainerStyle = styles.iconContainer;
   let signupContainerStyle = styles.signupContainer;
   let inputsContainerStyle = styles.inputsContainer;
   let textInputStyle = styles.textInput;
   let buttonLabelStyle = styles.buttonLabel;
   let accountTextContainerStyle = styles.accountTextContainer;
   let accountOrTextStyle = styles.accountOrText;
   let registerNowTextStyle = styles.registerNowText;
   let connectWidthTextStyle = styles.connectWidthText;
   let facebookIconStyle = styles.facebookIcon;

   if(screen.width < 350){
    titleContainerStyle= styles.titleContainerSmall;
    titleStyle = styles.titleSmall;
    iconContainerStyle = styles.iconContainerSmall;
    signupContainerStyle = styles.signupContainerSmall;
    inputsContainerStyle = styles.inputsContainerSmall;
    buttonLabelStyle = styles.buttonLabelSmall;
    accountTextContainerStyle = styles.accountTextContainerSmall;
    accountOrTextStyle = styles.accountOrTextSmall;
    registerNowTextStyle = styles.registerNowTextSmall;
    connectWidthTextStyle = styles.connectWidthTextSmall;
    facebookIconStyle = styles.facebookIconSmall;
   }

   if(screen.height <= 800 && screen.height >=700){
    titleContainerStyle = styles.titleContainerBig;
    inputsContainerStyle = styles.inputsContainerTall;
    textInputStyle = styles.textInputTall;
    accountTextContainerStyle = styles.accountTextContainerTall;
    iconContainerStyle = styles.iconContainerTall;
   }

   if(screen.height > 800){
    titleContainerStyle= styles.titleContainerBig;
    titleStyle = styles.titleBig;
    iconContainerStyle = styles.iconContainerBig;
    signupContainerStyle = styles.signupContainerBig;
    textInputStyle = styles.textInputBig;
    inputsContainerStyle = styles.inputsContainerBig;
    buttonLabelStyle = styles.buttonLabelBig;
    accountTextContainerStyle = styles.accountTextContainerBig;
    accountOrTextStyle = styles.accountOrTextBig;
    registerNowTextStyle = styles.registerNowTextBig;
    connectWidthTextStyle = styles.connectWidthTextBig;
    facebookIconStyle = styles.facebookIconBig;
   }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
      <ImageBackground source={require('../assets/images/player.jpg')} style={styles.bigBackgroundImage}>
       <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
           <ScrollView>
             <View style={titleContainerStyle}>
               <Text style={titleStyle}>Bienvenue à</Text>
             </View>
             <View style = {iconContainerStyle} >
              <Image style={{width:'100%', height:'100%'}} source = {require("../assets/images/5.png")}/>
             </View>
             <View style={signupContainerStyle}>
               <View style={inputsContainerStyle}>
                 <TextInput
                   mode='flat'
                   label='Téléphone'
                   placeholder='Votre numéro de téléphone'
                   value={phone}
                   onChangeText={prevValue=>setPhone(prevValue)}
                   theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                   style={textInputStyle}
                   underlineColor='white'
                 />
                 <TextInput
                   mode='flat'
                   label='Mot de passe'
                   placeholder='Rentrez votre mot de passe'
                   value={password}
                   onChangeText={prevValue=>setPassword(prevValue)}
                   theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                   style={textInputStyle}
                   underlineColor='white'
                 />
               </View>
               <View style={styles.buttonsContainer}>
                 <View style={styles.buttonContainer}>
                   <Button
                   theme={{colors: {primary:'white'}}} 
                   mode={Platform.OS === 'android' ? "contained" : "outlined"}
                   labelStyle={buttonLabelStyle}
                   contentStyle={{width:'100%'}}
                   style={{borderRadius:20, backgroundColor:Colors.primary}}
                   icon='login'
                   dark={true}
                   >Se connecter 
                   </Button>
                 </View>
                 <View style={styles.facebookContainer}>
                   <View style={accountTextContainerStyle}>
                    <Text style={accountOrTextStyle}>Je n'ai pas un compte ?</Text>
                   </View>
                   <View style={styles.loginFacebookContainer}>
                     <Text style={registerNowTextStyle}>S'inscrire Maintenant</Text>
                     <Text style={accountOrTextStyle}>Ou</Text>
                     <Text style={connectWidthTextStyle}>Se connecter avec</Text>
                     <View style={styles.facebookIconContainer}>
                      <Image style={facebookIconStyle} source = {require('../assets/images/facebook.png')} /> 
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

LoginScreen.navigationOptions= ()=>{
  return {
    headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
    headerBackTitle : " ",
    headerTitle: () => (
      <Image 
      resizeMode="cover"
      style={{
        width:150,
        height:40,
        resizeMode:'contain',
        alignSelf: 'center'}}
      
      />
    )};
}

const styles= StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#fff',
    
   },
   bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
    
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  titleContainer:{
    alignItems:'center',
    marginTop:40
  },
  titleContainerSmall:{
    alignItems:'center',
    marginTop:30,
  },
  titleContainerTall:{
    alignItems:'center',
    marginTop:50,
  },
  titleContainerBig:{
    alignItems:'center',
    marginTop:60
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  title:{
    color:'white',
    fontFamily:'poppins',
    fontSize:42
  },
  titleSmall:{
    color:'white',
    fontFamily:'poppins',
    fontSize:34
  },
  titleBig:{
    color:'white',
    fontFamily:'poppins',
    fontSize:54
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  iconContainer :{  
    width : 100 , 
    height : 100 ,  
    alignSelf : "center"
   },
   iconContainerSmall:{
    width : 90 , 
    height : 90 ,  
    alignSelf : "center"
   },
   iconContainerTall:{
    width : 150 , 
    height : 150 ,  
    alignSelf : "center"
   },
   iconContainerBig:{
    width : 180 , 
    height : 180 ,  
    alignSelf : "center"
   },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  signupContainer:{
    padding:20
  },
  signupContainerSmall:{
    padding:10
  },
  signupContainerBig:{
    padding:40
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  inputsContainer:{
    marginBottom:30
  },
  inputsContainerSmall:{
    marginBottom:20
  },
  inputsContainerTall:{
    marginBottom:40
  },
  inputsContainerBig:{
    marginBottom:50
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  textInput:{
    backgroundColor:'transparent'
  },
  textInputTall:{
    backgroundColor:'transparent',
    paddingVertical:18
  },
  textInputBig:{
    backgroundColor:'transparent',
    fontSize:20,
    paddingVertical:20
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  buttonsContainer:{
    alignItems:'center',
    marginHorizontal:10
  },
  buttonContainer:{
    paddingVertical:5
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  buttonLabel:{
    fontSize:16,
    fontFamily:'poppins', 
    color: 'white'
  },
  buttonLabelSmall:{
    fontSize:14,
    fontFamily:'poppins', 
    color: 'white'
  }, 
  buttonLabelBig:{
    fontSize:20,
    fontFamily:'poppins', 
    color: 'white'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  facebookContainer:{
     alignItems:'center',
     justifyContent:'center'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  accountTextContainer:{
     marginVertical:10
  },
  accountTextContainerSmall:{
    marginVertical:7
  },
  accountTextContainerTall:{
    marginVertical:15
  },
  accountTextContainerBig:{
    marginVertical:20
 },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  accountOrText:{
    fontFamily:'poppins',
    fontSize:13,
    color:'#A8A8A8'
  },
  accountOrTextSmall:{
    fontFamily:'poppins',
    fontSize:12,
    color:'#A8A8A8'
  },
  accountOrTextBig:{
    fontFamily:'poppins',
    fontSize:19,
    color:'#A8A8A8'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  loginFacebookContainer:{
    alignItems:'center',
     justifyContent:'center',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  registerNowText:{
    fontFamily:'poppins',
    fontSize:13,
    color:Colors.primary
  },
  registerNowTextSmall:{
    fontFamily:'poppins',
    fontSize:12,
    color:Colors.primary
  },
  registerNowTextBig:{
    fontFamily:'poppins',
    fontSize:17,
    color:Colors.primary
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  connectWidthText:{
    fontFamily:'poppins',
    fontSize:13,
    color:'white'
  },
  connectWidthTextSmall:{
    fontFamily:'poppins',
    fontSize:12,
    color:'white'
  },
  connectWidthTextBig:{
    fontFamily:'poppins',
    fontSize:17,
    color:'white'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  facebookIconContainer:{
    paddingVertical:5
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  facebookIcon:{
    width:24,
    height:24
  },
  facebookIconSmall:{
    width:20,
    height:20
  },
  facebookIconBig:{
    width:32,
    height:32
  }
  
});

export default LoginScreen;