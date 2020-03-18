import React,{useState} from 'react';
import { StyleSheet,View,ImageBackground,KeyboardAvoidingView,Text} from 'react-native';
import {TextInput,Searchbar} from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Colors from '../../constants/Colors';

const SignupOwnerScreen = props =>{

    //states for checkboxes
    const [isCheckedShower, setIsCheckedShower] = useState(false);
    const [isCheckedBall, setIsCheckedBall] = useState(false);
    const [isCheckedCloackroom, setIsCheckedcloackroom] = useState(false);
    const [isCheckedBib, setIsCheckedBib] = useState(false);
    const [isCheckedCover, setIsCheckedCover] = useState(false);
    const [isCheckedUncover, setIsCheckedUncover] = useState(false);
   

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

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage} blurRadius={0}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
            <View style={styles.progressSteps}>
                <ProgressSteps
                 activeStepIconBorderColor={Colors.orange}
                 completedProgressBarColor={Colors.orange}
                 completedStepIconColor={Colors.orange} 
                 activeStepNumColor='white'
                 completedStepNumColor='white' 
                 activeLabelColor={Colors.orange}
                 >
                    <ProgressStep 
                      label="Propriétaire" 
                      previousBtnTextStyle={{color:Colors.orange,fontFamily:'poppins'}} 
                      nextBtnTextStyle={{color:Colors.orange}}
                      nextBtnText='Suivant'
                      >
                        <View style={styles.inputsContainer}>
                            <TextInput
                                mode='flat'
                                label='Nom et Prénom *'
                                placeholder='Tapez votre nom et prénom'
                                value={fullName}
                                onChangeText={prevText=>setFullName(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={{backgroundColor:'transparent'}}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Téléphone *'
                                placeholder='Tapez votre numéro de téléphone'
                                value={phone}
                                onChangeText={prevText=>setPhone(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={{backgroundColor:'transparent'}}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Email *'
                                placeholder='Tapez votre adresse email'
                                value={email}
                                onChangeText={prevText=>setEmail(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={{backgroundColor:'transparent'}}
                                underlineColor='white'
                            />
                            <TextInput
                                mode='flat'
                                label='Adresse *'
                                placeholder='Tapez votre propre adresse'
                                value={address}
                                onChangeText={prevText=>setAddress(prevText)}
                                theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                                style={{backgroundColor:'transparent'}}
                                underlineColor='white'
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                        label="Multi-Stades"
                        previousBtnTextStyle={{color:Colors.orange,fontFamily:'poppins'}} 
                        nextBtnTextStyle={{color:Colors.orange,fontFamily:'poppins'}}
                        nextBtnText='Suivant'
                        previousBtnText='Précédent'
                    >
                     <View style={styles.inputsContainer}>
                        <TextInput
                            mode='flat'
                            label='Nom du complexe *'
                            placeholder='Tapez le nom du votre complexe'
                            value={complexName}
                            onChangeText={prevText=>setComplexName(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={{backgroundColor:'transparent'}}
                            underlineColor='white'
                        />
                        <TextInput
                            mode='flat'
                            label='Adresse du complexe *'
                            placeholder="Tapez l'adresse du votre complexe"
                            value={complexAddress}
                            onChangeText={prevText=>setComplexAddress(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={{backgroundColor:'transparent'}}
                            underlineColor='white'
                        />
                        <TextInput
                            mode='flat'
                            label='Nombre des stades *'
                            placeholder="Entrez le nombre de vos stades"
                            value={complexStadiumNumber}
                            onChangeText={prevText=>setComplexStadiumNumber(prevText)}
                            theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                            style={{backgroundColor:'transparent'}}
                            underlineColor='white'
                        />
                        <View style={{paddingVertical:15}}>
                            <Searchbar
                            placeholder='Ville du complexe *' 
                            value={complexCity}
                            onChangeText={prevText=>setComplexCity(prevText)}
                            inputStyle={{color:'white',fontSize:16, fontFamily:'poppins'}}
                            iconColor='white'
                            style={styles.searchBarCity}
                            theme={{colors: {placeholder:'white'}}}
                            />
                        </View>
                     </View>
                    </ProgressStep>
                    <ProgressStep 
                        label="Logistiques"
                        previousBtnTextStyle={{color:Colors.orange,fontFamily:'poppins'}} 
                        nextBtnTextStyle={{color:Colors.primary,fontFamily:'poppins'}}
                        finishBtnText='Confirmer'
                        previousBtnText='Précédent'
                        nextBtnStyle={{padding:0}}
                        previousBtnStyle={{padding:0}}    
                    >
                        <View style={styles.step3Container}>
                            <View style={styles.rowContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>Matériels logistiques *</Text>
                                </View>
                                <View style={styles.rowStyle}>
                                    <CheckBox
                                        title='Douches'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedShower ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedShower(isChecked => !isChecked)}
                                    />
                                    <CheckBox
                                        title='Vestiaire'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedCloackroom ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedcloackroom(isChecked => !isChecked)}
                                    />
                                </View>
                                <View style={styles.rowStyle}>
                                    <CheckBox
                                        title='Ballons'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedBall ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedBall(isChecked => !isChecked)}
                                    />
                                    <CheckBox
                                        title='Dossards'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checked={isCheckedBib ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedBib(isChecked => !isChecked)}
                                    />
                                </View>
                            </View>
                            <View style={styles.rowContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>Plafond *</Text>
                                </View>
                                <View style={styles.rowStyle}>
                                    <CheckBox
                                        title='Couvert'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={isCheckedCover ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedCover(isChecked => !isChecked)}
                                    />
                                    <CheckBox
                                        title='Non couvert'
                                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={isCheckedUncover ? true : false}
                                        checkedColor={Colors.primary}
                                        onPress={()=>setIsCheckedUncover(isChecked => !isChecked)}
                                    />
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
  progressSteps:{
     marginHorizontal:10,
     flex:1,
     marginVertical:30
  },
  inputsContainer:{
    padding:10,
    marginTop:30
  },
  textContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  rowContainer:{
    paddingVertical:13
  },
  text:{
    color:'white',
    fontFamily:'poppins'
  },
  rowStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  step3Container:{
      paddingTop:20
  },
  searchBarCity:{
    backgroundColor:'transparent',
    borderBottomColor:'white',
    borderBottomWidth:1  }
  
   
});

export default SignupOwnerScreen;