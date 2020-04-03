import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,TouchableHighlight,Text,Image,Alert ,Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {Ionicons} from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const screen = Dimensions.get("window");
const PlayerProfileScreen = props =>{
let cardStyle = styles.card;
let circleOneStyle = styles.circleOne ;
let circlesContainerStyle = styles.circlesContainer;
let circleTwoStyle = styles.circleTwo;
let textInputStyle = styles.textInput;
let card2Style = styles.card2;

  if (screen.height > 800) {
    cardStyle = styles.cardBig;
    circleOneStyle = styles.circleOneBig ;
    circlesContainerStyle = styles.circlesContainerBig;
    circleTwoStyle = styles.circleTwoBig;
    textInputStyle = styles.textInputBig;
    card2Style = styles.card2Big;
  }
//////////////////////////////////////////////////////////////
  
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
     <ImageBackground source = {require("../../../assets/images/android.jpg")}  
     style={styles.backgroudnImage}
    
     >

     <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
            <View style={cardStyle}>
                {!pickedImage ? (<Text style={styles.pickedImageText}>Votre Image !</Text>)
                : (<Image style={styles.image} source={{uri:pickedImage}} />)}
            </View>
         
            <View style={circlesContainerStyle}>
                <TouchableHighlight style={circleOneStyle} onPress={takeImageHandler}>
                  <Ionicons title = "save" 
                   name = {Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
                   color='white' size={24} />
                </TouchableHighlight>
                <TouchableHighlight 
                style={circleTwoStyle}
                onPress={()=>setPickedImage(false)}
                >
                <Ionicons title = "save" 
                   name = {Platform.OS === 'android' ? 'md-remove' : 'ios-remove'}
                   color='white' size={24} />
                </TouchableHighlight>
            </View>
           
        </View> 
       
        <View style={styles.card2Container}>
            <View style={card2Style}>
                <View style={styles.textInputsContainer}>  
                   <View style={styles.textInputContainer}>
                        <TextInput
                            mode='outlined'
                            label='Nom et Prénom *'
                            placeholder='Tapez votre nom et prénom'
                            value={fullName}
                            onChangeText={prevText=>setFullName(prevText)}
                            theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                            style={textInputStyle}
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
                            style={textInputStyle}
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
                            style={textInputStyle}
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
                            style={textInputStyle}
                            underlineColor='#9399a1'
                        />
                    </View>
                   
                </View> 
            </View>
        </View>
     </ScrollView>
     </ImageBackground>
    </View>

     );    
};

PlayerProfileScreen.navigationOptions= navData => {
    
     return {
       title : "Mon Profile" , 
       headerTitleStyle:{
           fontFamily:'poppins',
           color:Platform.OS === 'android' ? 'white' : Colors.background
         },
         headerStyle:{
             backgroundColor:Platform.OS === 'android' ? Colors.background : 'white'
         },
         headerBackTitle:" ",
          headerTintColor:Platform.OS === 'android' ? 'white' :Colors.background ,
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "save" 
                   iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                   color={Platform.OS === 'android' ? 'white' : Colors.background}
                 />
               </HeaderButtons>
               
             )
     
     };
 
  };

const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'flex-start'
   },
   backgroudnImage : {
    flex : 1 
  },
   cardContainer:{
       marginTop:"5%",
       alignItems : "center",
       justifyContent : "center",

       
   },
////////////////////////////////////////////////////////////////
   card:{
    backgroundColor:'#263341',
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: {width:0, height:2},
    shadowRadius:8,
    elevation:5,
    justifyContent:'center',
    borderRadius : 65,
    height : 130 ,
    width : 130,
    borderWidth : 3,
    borderColor : Colors.grey,
    marginBottom : 9,
    overflow : "hidden"
   },
   cardBig : {
    backgroundColor:'#263341',
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: {width:0, height:2},
    shadowRadius:8,
    elevation:5,
    justifyContent:'center',
    borderRadius : 250/2,
    height :250 ,
    width : 250,
    borderWidth : 3,
    borderColor : Colors.grey,
    marginBottom : 9,
    overflow : "hidden"

   },
////////////////////////////////////////////////////////////////
   pickedImageText:{
    fontFamily:'poppins',
    color:'white',
    alignSelf:'center',
    fontSize : 13 
   },
   image:{
    width:'100%',
    height:'100%'
   },
   //////////////////////////////////////////////////////
   circlesContainer:{
     justifyContent:'center',
     flexDirection : "row",
     width : 90,
     justifyContent : "space-between",
     marginBottom : 10
    
   },
   circlesContainerBig:{
    justifyContent:'center',
    flexDirection : "row",
    width : 200,
    justifyContent : "space-around",
   marginBottom : 10
  },

/////////////////////////////////////////////////////////
   circleOne:{
     height:40,
     width:40,
     borderRadius:50/2,
     backgroundColor:'#171d23',
     justifyContent:'center',
     alignItems:'center'
   },
   circleOneBig:{
    height:80,
    width:80,
    borderRadius :80/2,
    backgroundColor:'#171d23',
    justifyContent:'center',
    alignItems:'center'
  },

/////////////////////////////////////////////////////////

   circleTwo:{
    height:40,
    width:40,
    borderRadius:50/2,
    backgroundColor:'#456383',
    justifyContent:'center',
    alignItems:'center'
   },

   circleTwoBig:{
    height:80,
    width:80,
    borderRadius:80/2,
    backgroundColor:'#456383',
    justifyContent:'center',
    alignItems:'center'
   },
  /////////////////////////////////////////////////////////
   card2Container:{
     alignItems:'center',
     marginBottom:50
   },
 ////////////////////////////////////////////////////////////
   card2:{
    height:350,
    width:'90%',
    backgroundColor:'rgba(38, 51, 65,0.9)',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:20
   },
   card2Big:{
    height:400,
    width:'90%',
    backgroundColor:'rgba(38, 51, 65,0.9)',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:20
   },
 ////////////////////////////////////////////////////////////

   textInputsContainer:{
      height:'100%'
   },
   textInputContainer:{
    paddingVertical:5,
    
   },
/////////////////////////////////////////////////////////
textInputBig : {
  backgroundColor:'transparent',
  fontSize : 25,
 height : 65

}, 
textInput : {
  backgroundColor:'transparent'

}

//////////////////////////////////////////////////////
   
  
});

export default PlayerProfileScreen;