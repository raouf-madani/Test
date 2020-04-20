import React,{useReducer,useCallback,useRef,useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,KeyboardAvoidingView,Text,Platform,Image,Dimensions,TextInput, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import * as firebase from "firebase";



//responsivity (Dimensions get method)
const screen = Dimensions.get('window');


const FIREBASE_CONFIG= {
  apiKey: "AIzaSyCeW9gY7grDmAgpl58ompdE8dC6Xh9znSc",
  authDomain: "footbooking-959a6.firebaseapp.com",
  databaseURL: "https://footbooking-959a6.firebaseio.com",
  projectId: "footbooking-959a6",
  storageBucket: "footbooking-959a6.appspot.com",
  messagingSenderId: "1047069881183",
  appId: "1:1047069881183:web:099c10a1e2a1bc14347cea",
  
};
try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}


//UseReducer Input Management//////////////////////////////////////////////////////////////////////////////////
const Form_Input_Update = 'Form_Input_Update';
const formReducer=(state,action) =>{
    if(action.type === Form_Input_Update){
        const updatedValues = {
          ...state.inputValues,
          [action.inputID]:action.value
        };
        const updatedValidities = {
          ...state.inputValidities,
          [action.inputID]:action.isValid
        };
        let formIsValidUpdated = true;
        for(const key in updatedValidities){
          formIsValidUpdated = formIsValidUpdated && updatedValidities[key];
        }
        return{
          inputValues:updatedValues,
          inputValidities:updatedValidities,
          formIsValid:formIsValidUpdated
        };
    }
   
     return state;
    
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignupScreen = props =>{

  const recaptchaVerifier = useRef(null);
  const verificationCodeTextInput = useRef(null);
  const [verificationId, setVerificationId] = useState('');
  const [verifyError, setVerifyError] = useState(false);
  const [verifyInProgress, setVerifyInProgress] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmError, setConfirmError] = useState(false);
  const [confirmInProgress, setConfirmInProgress] = useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  let titleContainerStyle= styles.titleContainer;
  let titleStyle = styles.title;
  let signupContainerStyle = styles.signupContainer;
  let inputsContainerStyle = styles.inputsContainer;
  let labelSignupStyle= styles.labelSignup;
  let labelLoginStyle = styles.labelLogin;
  let facebookContainerStyle = styles.facebookContainer;
  let facebookTextStyle = styles.facebookText;
  let facebookIconStyle = styles.facebookIcon;
  let termsConditionsTextStyle = styles.termsConditionsText;

  if(screen.width < 350){
    titleContainerStyle= styles.titleContainerSmall;
    titleStyle = styles.titleSmall;
    signupContainerStyle = styles.signupContainerSmall;
    inputsContainerStyle = styles.inputsContainerSmall;
    labelSignupStyle = styles.labelSignupSmall;
    labelLoginStyle = styles.labelLoginSmall;
    facebookContainerStyle = styles.facebookContainerSmall;
    facebookTextStyle = styles.facebookTextSmall;
    facebookIconStyle = styles.facebookIconSmall;
    termsConditionsTextStyle = styles.termsConditionsTextSmall;
   
   }

   if(screen.height <= 800 && screen.height >=700){
    titleContainerStyle = styles.titleContainerBig;
    inputsContainerStyle = styles.inputsContainerTall;
    facebookContainerStyle = styles.facebookContainerTall;
   }

   if(screen.height > 800){

    titleContainerStyle= styles.titleContainerBig;
    titleStyle = styles.titleBig;
    signupContainerStyle = styles.signupContainerBig;
    inputsContainerStyle = styles.inputsContainerBig;
    labelSignupStyle = styles.labelSignupBig;
    labelLoginStyle = styles.labelLoginBig;
    facebookContainerStyle = styles.facebookContainerBig;
    facebookTextStyle = styles.facebookTextBig;
    facebookIconStyle = styles.facebookIconBig;
    termsConditionsTextStyle = styles.termsConditionsTextBig;
   }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////Input Management
    const[formState,disaptchFormState] = useReducer(formReducer,
      {inputValues:{
        name:'',
        surname:'',
        phone: '',
        password:''
      },
      inputValidities:{
        name:false,
        surname:false,
        phone:false,
        password:false
      },
      formIsValid:false});

    const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{

    disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
    },[disaptchFormState]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     const signupHandler = async () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      try {
        setVerifyError(undefined);
        setVerifyInProgress(true);
        setVerificationId('');
        const verificationId = await phoneProvider.verifyPhoneNumber(
          formState.inputValues.phone,
          // @ts-ignore
          recaptchaVerifier.current
        );
        setVerifyInProgress(false);
        setVerificationId(verificationId);
        verificationCodeTextInput.current?.focus();
      } catch (err) {
        setVerifyError(err);
        setVerifyInProgress(false);
      }
    };

    const sendCode = async () => {
      try {
        setConfirmError(undefined);
        setConfirmInProgress(true);
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
         await firebase
          .auth()
          .signInWithCredential(credential);
        setConfirmInProgress(false);
        setVerificationId("");
        setVerificationCode("");
        verificationCodeTextInput.current?.clear();
        Alert.alert("Phone authentication successful!");
      } catch (err) {
        setConfirmError(err);
        setConfirmInProgress(false);
      }
    };

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage}>
        <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={10} style={styles.overlayBackground}>
            <ScrollView>
            
              <View style={titleContainerStyle}>
              <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={FIREBASE_CONFIG}
              />
                <Text style={titleStyle}>Inscrivez-Vous</Text>
              </View>
              <View style={signupContainerStyle}>
                <View style={inputsContainerStyle}>
                      <Input
                      id='name'
                      label='Nom'
                      keyboardType="default"
                      returnKeyType="next"
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue=''
                      initiallyValid={true}
                      required
                      errorText='Veuillez entrer votre nom svp!'
                    />
                    <Input
                      id='surname'
                      label='Prénom'
                      keyboardType="default"
                      returnKeyType="next"
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue=''
                      initiallyValid={true}
                      required
                      errorText='Veuillez entrer votre prénom svp!'
                    />
                    <Input
                    id='phone'
                    label='Téléphone'
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onInputChange={inputChangeHandler}
                    initialValue=''
                    initiallyValid={true}
                    phone
                    required
                    errorText='Veuillez entrer un numéro valide svp!'
                  />
                  <Input
                    id='password'
                    label='Mot de Passe'
                    keyboardType="default"
                    returnKeyType="next"
                    secureTextEntry
                    minLength={6}
                    autoCapitalize='none'
                    onInputChange={inputChangeHandler}
                    initialValue=''
                    initiallyValid={true}
                    required
                    errorText='Veuillez entrer minimum 6 caractères svp!'
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    {!verificationId ? (<Button
                    theme={{colors: {primary:"white"}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={labelSignupStyle}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20,backgroundColor:Colors.primary}}
                    icon='open-in-app'
                    dark={true}
                    onPress={signupHandler}
                    >S'inscrire
                    </Button>):(<View>
                      <TextInput
                       placeholder='123456'
                       ref={verificationCodeTextInput}
                       onChangeText={()=>setVerificationCode(verificationCode)}
                       style={{borderBottomWidth:1,borderBottomColor:'white',marginBottom:5}}
                      />
                      <Button
                    theme={{colors: {primary:"white"}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={labelSignupStyle}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20,backgroundColor:Colors.primary}}
                    icon='open-in-app'
                    dark={true}
                    onPress={sendCode}
                    >Send Code
                    </Button>
                    {confirmError && (
                      <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
                    )}
                      </View>)}
                    

                  </View>
                  <View style={facebookContainerStyle}>
                    <View style={styles.facebookTextContainer}>
                     <Text style={facebookTextStyle}>S'inscrire avec</Text>
                    </View>
                    <Image style={facebookIconStyle}  source = {require('../../assets/images/facebook.png')} />
                  </View>
                  <View style={styles.termsConditionsContainer}>
                     <Text style={termsConditionsTextStyle}>Lisez les termes et conditions avant s'inscrire</Text>
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
    width:'100%'
    
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1,
    justifyContent:'center'
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
    marginTop:35,
    backgroundColor:'white',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  titleContainerTall:{
    alignItems:'center',
    marginTop:60,
    backgroundColor:'white',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  titleContainerBig:{
    alignItems:'center',
    marginTop:70,
    backgroundColor:'white',
    alignSelf:'center',
    padding:20,
    borderRadius:20
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  title:{
    color:Colors.primary,
    fontFamily:'poppins-bold',
    fontSize:26
  },
  titleSmall:{
    color:Colors.primary,
    fontFamily:'poppins-bold',
    fontSize:20
  },
  titleBig:{
    color:Colors.primary,
    fontFamily:'poppins-bold',
    fontSize:46
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  signupContainer:{
    paddingHorizontal:20,
    marginVertical:10
  },
  signupContainerSmall:{
    paddingHorizontal:15,
    marginVertical:5
  },
  signupContainerBig:{
    paddingHorizontal:40,
    marginVertical:20
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
  buttonsContainer:{
    marginHorizontal:40
  },
  buttonContainer:{
    paddingVertical:5
  },
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  labelSignup:{
    fontSize:16,
    fontFamily:'poppins', 
    color:'white'
  },
  labelSignupSmall:{
    fontSize:13,
    fontFamily:'poppins', 
    color: 'white'
  },
  labelSignupBig:{
    fontSize:20,
    fontFamily:'poppins', 
    color: 'white'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  labelLogin:{
    fontSize:16,
    fontFamily:'poppins', 
    color: 'white'
  },
  labelLoginSmall:{
    fontSize:13,
    fontFamily:'poppins', 
    color: 'white'
  },
  labelLoginBig:{
    fontSize:20,
    fontFamily:'poppins', 
    color: 'white'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  facebookContainer:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginVertical:10
  },
  facebookContainerSmall:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:7
 },
 facebookContainerTall:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginVertical:15
},
 facebookContainerBig:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginVertical:20
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  facebookTextContainer:{
     marginHorizontal:8
  },
  facebookText:{
    fontFamily:'poppins',
    fontSize:14,
    color:'white'
  },
  facebookTextSmall:{
    fontFamily:'poppins',
    fontSize:13,
    color:'white'
  },
  facebookTextBig:{
    fontFamily:'poppins',
    fontSize:19,
    color:'white'
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
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  termsConditionsContainer:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    alignItems:'center',
    alignSelf:'center'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  termsConditionsText:{
    fontFamily:'poppins',
    fontSize:10,
    color:'white'
  },
  termsConditionsTextSmall:{
    fontFamily:'poppins',
    fontSize:9,
    color:'white'
  },
  termsConditionsTextBig:{
    fontFamily:'poppins',
    fontSize:13,
    color:'white'
  },
  loader: {
    marginTop: 10,
  }
   
});

export default SignupScreen;