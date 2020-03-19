import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,TouchableHighlight,Text,Image,Alert,Picker,KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {Ionicons} from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const OwnerProfileScreen = props =>{

    //States for personal information textInputs 
    const [fullName,setFullName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

    const cities = [{id:'09',wilaya:'Blida'},{id:'16',wilaya:'Alger'}];

    //States for complex information textInputs
    const [complexName,setComplexName] = useState('');
    const [complexCity,setComplexCity] = useState(`${cities[0].wilaya}`);
    const [complexAddress,setComplexAddress] = useState('');
    const [complexStadiumNumber,setComplexStadiumNumber] = useState('');

    

    //state for image
    const [pickedImage,setPickedImage]= useState();

    const verifyPermissions= async ()=>{
        const result= await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
        if(result.status !== 'granted'){
            Alert.alert('Permissions insuffisantes!',
            'Vous devez accorder les autorisations de la caméra pour utiliser cette application.',
            [{text:"D'accord"}]);
            return false;
        }
        return true;
      };

    const takeImageHandler = async ()=>{
       const hasPermissions = await verifyPermissions();
       if(!hasPermissions){
           return;
       }
       const image = await ImagePicker.launchCameraAsync({
           allowsEditing:true,
           aspect:[60,60],
           quality:0.7
       });
       
       setPickedImage(image.uri);
    };

    return(
    <View style={styles.container}>
     <ImageBackground source = {require("../../../assets/images/profileBack5.jpg")}  style={styles.backgroudnImage}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        {!pickedImage ? (<Text style={styles.pickedImageText}>Capture de votre stade!</Text>)
                        : (<Image style={styles.image} source={{uri:pickedImage}} />)}
                    </View>
                    <View style={styles.circlesContainer}>
                        <TouchableHighlight style={styles.circleOne} onPress={takeImageHandler}>
                        <Ionicons title = "save" 
                        name = {Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
                        color='white' size={24} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.circleTwo} onPress={()=>setPickedImage(false)}>
                        <Ionicons title = "save" 
                        name = {Platform.OS === 'android' ? 'md-remove' : 'ios-remove'}
                        color='white' size={24} />
                        </TouchableHighlight>
                    </View>
                </View> 
                <View style={styles.card2Container}>
                    <View style={styles.card2}>
                        <View style={styles.textInputsContainer}>  
                        <View style={styles.textInputContainer}>
                                <TextInput
                                    mode='outlined'
                                    label='Nom et Prénom *'
                                    placeholder='Tapez votre nom et prénom'
                                    value={fullName}
                                    onChangeText={prevText=>setFullName(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}> 
                                <TextInput
                                    mode='outlined'
                                    label='Téléphone *'
                                    placeholder='Tapez votre numéro de téléphone'
                                    value={phone}
                                    onChangeText={prevText=>setPhone(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    mode='outlined'
                                    label='Email *'
                                    placeholder='Tapez votre adresse email'
                                    value={email}
                                    onChangeText={prevText=>setEmail(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    mode='outlined'
                                    label='Adresse *'
                                    placeholder='Tapez votre propre adresse'
                                    value={address}
                                    onChangeText={prevText=>setAddress(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    mode='outlined'
                                    label='Nom du complexe *'
                                    placeholder="Tapez le nom du votre complexe"
                                    value={complexName}
                                    onChangeText={prevText=>setComplexName(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                            <TextInput
                                    mode='outlined'
                                    label='Adresse du complexe *'
                                    placeholder="Tapez l'adresse du votre complexe"
                                    value={complexAddress}
                                    onChangeText={prevText=>setComplexAddress(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                            <TextInput
                                    mode='outlined'
                                    label='Nombre des stades *'
                                    placeholder="Entrez le nombre de vos stades"
                                    value={complexStadiumNumber}
                                    onChangeText={prevText=>setComplexStadiumNumber(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={{backgroundColor:'transparent'}}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={styles.pickerContainer}>
                                <Picker
                                 style = {styles.picker}
                                 onValueChange = {prevValue=>setComplexCity(prevValue)}
                                 selectedValue = {complexCity}
                                >
                                    {cities.map(el=>
                                    <Picker.Item
                                     key={el.id}
                                     label={el.wilaya}
                                     value={el.wilaya}
                                      />)}
                                </Picker>
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

OwnerProfileScreen.navigationOptions= navData => {
    
     return {
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "save" 
                   iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                 />
               </HeaderButtons>
               
             )
     
     };
 
  };


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'flex-start',
    
   },
   backgroudnImage : {
    flex : 1 
  },
   cardContainer:{
    flexDirection:'row'
   },
   card:{
    margin:20,
    height:200,
    width:'60%',
    marginTop:100,
    backgroundColor:'#263341',
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: {width:0, height:2},
    shadowRadius:8,
    elevation:5,
    justifyContent:'center',
    
   },
   pickedImageText:{
    fontFamily:'poppins',
    color:'white',
    alignSelf:'center'
   },
   image:{
    width:'100%',
    height:'100%'
   },
   circlesContainer:{
     width:'40%',
     margin:20,
     marginTop:100,
     height:200,
     justifyContent:'center',
   },
   circleOne:{
     height:50,
     width:50,
     borderRadius:50/2,
     backgroundColor:'#171d23',
     marginVertical:20,
     justifyContent:'center',
     alignItems:'center'
   },
   circleTwo:{
    height:50,
    width:50,
    borderRadius:50/2,
    backgroundColor:'#456383',
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
   },
   card2Container:{
     alignItems:'center',
     marginBottom:50
   },
   card2:{
    height:650,
    width:'90%',
    backgroundColor:'#263341',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:20
   },
   textInputsContainer:{
      height:'100%'
   },
   textInputContainer:{
    paddingVertical:5
   },
  pickerContainer:{
    borderWidth:1,
    borderColor:'#9399a1',
    padding:5,
    borderRadius:5,
    marginTop:12  
  },
  picker:{
    width:'100%',
    backgroundColor:'#263341',
    color:'#9399a1'
  }
  
});

export default OwnerProfileScreen;