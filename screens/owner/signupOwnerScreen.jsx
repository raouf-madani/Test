import React,{useState} from 'react';
import { StyleSheet,View,ImageBackground,KeyboardAvoidingView,Text,Image,Dimensions,Picker,ActionSheetIOS} from 'react-native';
import {TextInput,RadioButton} from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Colors from '../../constants/Colors';


//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const SignupOwnerScreen = props =>{

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  let progressStepsStyle = styles.progressSteps;
  let inputsContainerStyle = styles.inputsContainer;
  let previousNextBtnStyle = styles.previousNextBtn;
  let finishBtnStyle = styles.finishBtn;
  let textInputStyle = styles.textInput;
  let pickerContainerStyle = styles.pickerContainer;
  let step3ContainerStyle = styles.step3Container;
  let textStyle = styles.text;
  let checkBoxLabelStyle = styles.checkBoxLabel;
  let rowContainerStyle = styles.rowContainer;
  let rowsStyle = styles.rowStyle;

  if(screen.width < 350){
    progressStepsStyle = styles.progressStepsSmall;
    pickerContainerStyle = styles.pickerContainer;
    previousNextBtnStyle = styles.previousNextBtnSmall;
    finishBtnStyle = styles.finishBtnSmall;
    inputsContainerStyle = styles.inputsContainerSmall;
    step3ContainerStyle = styles.step3ContainerSmall;
    rowContainerStyle = styles.rowContainerSmall;
    
   }

   if(screen.height <= 800 && screen.height >=700){
    progressStepsStyle = styles.progressStepsTall;
    inputsContainerStyle = styles.inputsContainerBig;
    textInputStyle = styles.textInputTall;
    pickerContainerStyle = styles.pickerContainerTall;
    step3ContainerStyle = styles.step3ContainerBig;
    textStyle = styles.textTall;
    checkBoxLabelStyle = styles.checkBoxLabelTall;
    rowContainerStyle = styles.rowContainerTall;
    rowsStyle = styles.rowStyleTall;
   }

   if(screen.height > 800){
    progressStepsStyle = styles.progressStepsBig;
    inputsContainerStyle = styles.inputsContainerBig;
    previousNextBtnStyle = styles.previousNextBtnBig;
    finishBtnStyle = styles.finishBtnBig;
    textInputStyle = styles.textInputBig;
    pickerContainerStyle = styles.pickerContainerBig;
    step3ContainerStyle = styles.step3ContainerBig;
    textStyle = styles.textBig;
    checkBoxLabelStyle = styles.checkBoxLabelBig;
    rowContainerStyle = styles.rowContainerBig;
    rowsStyle = styles.rowStyleBig;
   }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //states for checkboxes and radiobutton
    const [isCheckedShower, setIsCheckedShower] = useState(false);
    const [isCheckedBall, setIsCheckedBall] = useState(false);
    const [isCheckedCloackroom, setIsCheckedcloackroom] = useState(false);
    const [isCheckedBib, setIsCheckedBib] = useState(false);
    const [isCheckedCover, setIsCheckedCover] = useState(false);
    
   
    //States for personal information textInputs 
    const [fullName,setFullName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

    
    //States for complex information textInputs
    const [complexName,setComplexName] = useState('');
    const [complexCity,setComplexCity] = useState('');
    const [complexAddress,setComplexAddress] = useState('');
    const [complexStadiumNumber,setComplexStadiumNumber] = useState(''); 
    const citiesA = ["Alger","Blida","Oran"];    

    //picker only iOS function 
    const onPress = () =>{
      const cities = ["Annuler", "Alger","Blida","Oran"];    
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: cities,
          cancelButtonIndex: 0
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else {
           setComplexCity(cities[buttonIndex]);
          } 
        }
      );  
  }

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
            <View style={progressStepsStyle}>
                <ProgressSteps
                 activeStepIconBorderColor={Colors.primary}
                 completedProgressBarColor={Colors.primary}
                 completedStepIconColor={Colors.primary} 
                 activeStepNumColor='white'
                 completedStepNumColor='white' 
                 activeLabelColor={Colors.primary}
                 labelFontFamily='poppins'
                 >
                    <ProgressStep 
                      label="Propriétaire" 
                      previousBtnTextStyle={previousNextBtnStyle} 
                      nextBtnTextStyle={previousNextBtnStyle}
                      nextBtnText='Suivant'
                      >
                        <View style={inputsContainerStyle}>
                            <TextInput
                                mode='flat'
                                label='Nom et Prénom *'
                                placeholder='Tapez votre nom et prénom'
                                value={fullName}
                                onChangeText={prevText=>setFullName(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={textInputStyle}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Téléphone *'
                                placeholder='Tapez votre numéro de téléphone'
                                value={phone}
                                onChangeText={prevText=>setPhone(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={textInputStyle}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Email *'
                                placeholder='Tapez votre adresse email'
                                value={email}
                                onChangeText={prevText=>setEmail(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={textInputStyle}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Adresse *'
                                placeholder='Tapez votre propre adresse'
                                value={address}
                                onChangeText={prevText=>setAddress(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={textInputStyle}
                                underlineColor='white'
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                        label="Multi-Stade"
                        previousBtnTextStyle={previousNextBtnStyle} 
                        nextBtnTextStyle={previousNextBtnStyle}
                        nextBtnText='Suivant'
                        previousBtnText='Précédent'
                    >
                     <View style={inputsContainerStyle}>
                        <TextInput
                            mode='flat'
                            label='Nom du complexe *'
                            placeholder='Tapez le nom du votre complexe'
                            value={complexName}
                            onChangeText={prevText=>setComplexName(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={textInputStyle}
                            underlineColor='white'
                        />
                        <TextInput
                            mode='flat'
                            label='Adresse du complexe *'
                            placeholder="Tapez l'adresse du votre complexe"
                            value={complexAddress}
                            onChangeText={prevText=>setComplexAddress(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={textInputStyle}
                            underlineColor='white'
                        />
                        <TextInput
                            mode='flat'
                            label='Nombre des stades *'
                            placeholder="Entrez le nombre de vos stades"
                            value={complexStadiumNumber}
                            onChangeText={prevText=>setComplexStadiumNumber(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={textInputStyle}
                            underlineColor='white'
                        />
                        <View style={pickerContainerStyle}>
                            {Platform.OS === 'android' ? 
                               <Picker
                               selectedValue={complexCity}
                               onValueChange={itemValue => setComplexCity(itemValue)}
                               style={textInputStyle}
                             >
                               {citiesA.map(el=> <Picker.Item label={el} value={el} key={el} />)}
                             </Picker> :
                              <Text onPress={onPress}style={textInputStyle}>
                                  {complexCity ? complexCity : 'Ville du complexe *'}
                              </Text>}
                        </View>
                     </View>
                    </ProgressStep>
                    <ProgressStep 
                        label="Logistiques"
                        previousBtnTextStyle={previousNextBtnStyle} 
                        nextBtnTextStyle={finishBtnStyle}
                        finishBtnText='Confirmer'
                        previousBtnText='Précédent'
                        nextBtnStyle={{paddingHorizontal:0}}
                        previousBtnStyle={{paddingHorizontal:0}}    
                    >
                        <View style={step3ContainerStyle}>
                            <View style={rowContainerStyle}>
                                <View style={styles.textContainer}>
                                    <Text style={textStyle}>Matériels logistiques *</Text>
                                </View>
                                <View style={rowsStyle}>
                                    <CheckBox
                                        title='Douches'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedShower ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedShower(isChecked => !isChecked)}
                                        fontFamily='poppins'
                                        textStyle={checkBoxLabelStyle}
                                    />
                                    <CheckBox
                                        title='Vestiaire'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedCloackroom ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedcloackroom(isChecked => !isChecked)}
                                        fontFamily='poppins'
                                        textStyle={checkBoxLabelStyle}
                                    />
                                </View>
                                <View style={rowsStyle}>
                                    <CheckBox
                                        title='Ballons'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedBall ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedBall(isChecked => !isChecked)}
                                        fontFamily='poppins'
                                        textStyle={checkBoxLabelStyle}
                                    />
                                    <CheckBox
                                        title='Dossards'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedBib ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedBib(isChecked => !isChecked)}
                                        fontFamily='poppins'
                                        textStyle={checkBoxLabelStyle}
                                    />
                                </View>
                            </View>
                            <View style={rowContainerStyle}>
                                <View style={styles.textContainer}>
                                    <Text style={textStyle}>Plafond *</Text>
                                </View>
                                <View style={rowsStyle}>
                                <RadioButton.Group
                                  value = {isCheckedCover}
                                  onValueChange = {prevValue=>setIsCheckedCover(prevValue)}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                      <Text style={checkBoxLabelStyle}>Couvert</Text>
                                      <RadioButton.Android uncheckedColor='grey' color={Colors.primary} value="Couvert"/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                      <Text style={checkBoxLabelStyle}>Non Couvert</Text>
                                      <RadioButton.Android uncheckedColor='grey' color={Colors.primary} value="Non Couvert"/>
                                    </View>  
                              </RadioButton.Group>
                                </View>
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </KeyboardAvoidingView> 
       </ImageBackground>
      </View>

     );    
};

SignupOwnerScreen.navigationOptions= ()=>{
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
      ),
       headerBackTitle : " "
    };
  }


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
    width:'100%',
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1,
    justifyContent:'center'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  progressSteps:{
     marginHorizontal:10,
     flex:1,
     marginVertical:30
  },
  progressStepsSmall:{
    marginHorizontal:10,
    flex:1,
    marginVertical:10
 },
 progressStepsTall:{
    marginHorizontal:10,
    flex:1,
    marginVertical:40
 },
 progressStepsBig:{
    marginHorizontal:10,
    flex:1,
    marginVertical:50
 },
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 previousNextBtn:{
   color:Colors.primary,
   fontFamily:'poppins'
 },
 previousNextBtnSmall:{
  color:Colors.primary,
  fontFamily:'poppins',
  fontSize:15
},
 previousNextBtnBig:{
    color:Colors.primary,
    fontFamily:'poppins',
    fontSize:24
 },
 finishBtn:{
    color:Colors.secondary,
    fontFamily:'poppins'
 },
 finishBtnSmall:{
  color:Colors.secondary,
  fontFamily:'poppins',
  fontSize:15
},
 finishBtnBig:{
    color:Colors.secondary,
    fontFamily:'poppins',
    fontSize:24
 },
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  inputsContainer:{
    padding:10,
    marginTop:30
  },
  inputsContainerSmall:{
    padding:10,
    marginTop:15
  },
  inputsContainerBig:{
    padding:30,
    marginTop:50
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  textInput:{
    backgroundColor:'transparent',
    fontFamily:'poppins',
    fontSize:16,
    color:'white'
  },
  textInputTall:{
    backgroundColor:'transparent',
    fontSize:18,
    paddingVertical:15,
    fontFamily:'poppins',
    color:'white'
  },
  textInputBig:{
    backgroundColor:'transparent',
    fontSize:20,
    paddingVertical:25,
    fontFamily:'poppins',
    color:'white'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  textContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  rowContainer:{
    marginVertical:13
  },
  rowContainerSmall:{
    marginVertical:11
  },
  rowContainerTall:{
    marginVertical:25
  },
  rowContainerBig:{
    marginVertical:40
  },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   rowStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%'
  },
  rowStyleTall:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    marginVertical:20
  },
  rowStyleBig:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    marginVertical:25
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  text:{
    color:'white',
    fontFamily:'poppins'
  },
  textTall:{
    color:'white',
    fontFamily:'poppins',
    fontSize:20
  },
  textBig:{
    color:'white',
    fontFamily:'poppins',
    fontSize:24
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  checkBoxLabel:{
    color:'grey',
    fontFamily:'poppins'
  },
  checkBoxLabelTall:{
    color:'grey',
    fontFamily:'poppins',
    fontSize:18
  },
  checkBoxLabelBig:{
    color:'grey',
    fontSize:20,
    fontFamily:'poppins'
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  step3Container:{
    marginTop:30
  },
  step3ContainerSmall:{
    marginTop:20
  },
  step3ContainerBig:{
    marginTop:50
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  pickerContainer:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    padding:Platform.OS === 'android' ? 5 : 15,
    marginTop:12
  },
  pickerContainerTall:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    paddingVertical:Platform.OS === 'android' ? 15 : 25,
    paddingHorizontal:Platform.OS === 'android' ? 10 : 20
  },
  pickerContainerBig:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    paddingVertical:Platform.OS === 'android' ? 25 : 35,
    paddingHorizontal:Platform.OS === 'android' ? 10 : 20
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
   
});

export default SignupOwnerScreen;