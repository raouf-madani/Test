import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,KeyboardAvoidingView,Text,Platform,Image,Dimensions} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const SignupScreen = props =>{

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  let titleContainerStyle= styles.titleContainer;

  if(screen.width < 350){
    titleContainerStyle= styles.titleContainerSmall;
   }

   if(screen.height > 800){
    titleContainerStyle= styles.titleContainerBig;
    
   }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [lastName,setLastName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
            <ScrollView>
              <View style={titleContainerStyle}>
                <Text style={styles.title}>Inscrivez-Vous</Text>
              </View>
              <View style={styles.signupContainer}>
                <View style={styles.inputsContainer}>
                  <TextInput
                    mode='flat'
                    label='Nom'
                    placeholder='Votre nom'
                    value={lastName}
                    onChangeText={prevText=>setLastName(prevText)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
                  <TextInput
                    mode='flat'
                    label='Prénom'
                    placeholder='Votre prénom'
                    value={firstName}
                    onChangeText={prevText=>setFirstName(prevText)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
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
                    theme={{colors: {primary:Colors.secondary}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={styles.labelSignup}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20, borderColor:'white'}}
                    icon='open-in-app'
                    dark={true}
                    onPress={() =>props.navigation.navigate('SignupOwner')}
                    >S'inscrire
                    </Button>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                    theme={{colors: {primary:Colors.orange}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={styles.labelLogin}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20, borderColor:'white'}}
                    icon='login'
                    dark={true}
                    onPress={() =>props.navigation.navigate('Login')}
                    >Se connecter 
                    </Button>
                  </View>
                  <View style={styles.facebookContainer}>
                    <View style={styles.facebookTextContainer}>
                     <Text style={styles.facebookText}>S'inscrire avec</Text>
                    </View>
                    <Image style={styles.facebookIcon}  source = {require('../../assets/images/facebook.png')} />
                  </View>
                  <View style={styles.termsConditionsContainer}>
                     <Text style={styles.termsConditionsText}>Lisez les termes et conditions avant s'inscrire</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
        </KeyboardAvoidingView> 
       </ImageBackground>
      </View>

     );    
};

SignupScreen.navigationOptions= ()=>{
  return {
    headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
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
    width:'100%'
    
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  titleContainer:{
    alignItems:'center',
    marginTop:50,
    backgroundColor:'white',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  titleContainerSmall:{
    alignItems:'center',
    marginTop:50,
    backgroundColor:'white',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  titleContainerBig:{
    alignItems:'center',
    marginTop:50,
    backgroundColor:'white',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  title:{
    color:Colors.primary,
    fontFamily:'poppins-bold',
    fontSize:26
  },
  signupContainer:{
    paddingHorizontal:20,
    marginVertical:10
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
  labelSignup:{
    fontSize:16,
    fontFamily:'poppins', 
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  },
  labelLogin:{
    fontSize:16,
    fontFamily:'poppins', 
    color: Platform.OS === 'android' ? 'white' : Colors.secondary
  },
  facebookContainer:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginVertical:10
  },
  facebookTextContainer:{
     marginHorizontal:8
  },
  facebookText:{
    fontFamily:'poppins',
    fontSize:14,
    color:'white'
  },
  facebookIcon:{
    width:24,
    height:24
  },
  termsConditionsContainer:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    alignItems:'center',
    alignSelf:'center'
  },
  termsConditionsText:{
    fontFamily:'poppins',
    fontSize:10,
    color:'white'
  } 
   
});

export default SignupScreen;