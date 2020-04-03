import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,TouchableHighlight,Text,Image,Alert,KeyboardAvoidingView,Dimensions,ActionSheetIOS,Picker} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {Ionicons} from "@expo/vector-icons";




import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerProfileScreen = props =>{
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */ 
    let textInputStyle = styles.textInput;
    let textInputContainerStyle = styles.textInputContainer;
    let cardStyle = styles.card;
    let circlesContainerStyle = styles.circlesContainer;
    let card2Style = styles.card2;
    let labelBtnStyle = styles.labelBtn;

    if(screen.width < 350){
        circlesContainerStyle = styles.circlesContainerSmall;
    }

    if(screen.height > 800){
        textInputStyle = styles.textInputBig;
        textInputContainerStyle = styles.textInputContainerBig;
        cardStyle = styles.cardBig;
        circlesContainerStyle = styles.circlesContainerBig;
        card2Style = styles.card2Big;
        labelBtnStyle =styles.labelBtnBig;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
     <ImageBackground source = {require("../../../assets/images/android.jpg")}  style={styles.backgroundImage}>
     <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={{flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <View style={cardStyle}>
                        {!pickedImage ? (<Text style={styles.pickedImageText}>Capture de votre stade!</Text>)
                        : (<Image style={styles.image} source={{uri:pickedImage}} />)}
                    </View>
                    <View style={circlesContainerStyle}>
                        <TouchableHighlight style={styles.circleOne} onPress={takeImageHandler}>
                            <Ionicons title = "add" 
                            name = {Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
                            color='white' size={24} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.circleTwo} onPress={()=>setPickedImage(false)}>
                            <Ionicons title = "delete" 
                            name = {Platform.OS === 'android' ? 'md-remove' : 'ios-remove'}
                            color='white' size={24} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.circleThree} onPress={()=>props.navigation.navigate('OwnerGalery')}>
                            <Ionicons title = "addMore" 
                            name = {Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                            color='white' size={24} />
                        </TouchableHighlight>
                    </View>
                </View> 
                <View style={styles.card2Container}>
                    <View style={card2Style}>
                        <View style={styles.textInputsContainer}>  
                        <View style={textInputContainerStyle}>
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
                            <View style={textInputContainerStyle}> 
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
                            <View style={textInputContainerStyle}>
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
                            <View style={textInputContainerStyle}>
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
                            <View style={textInputContainerStyle}>
                                <TextInput
                                    mode='outlined'
                                    label='Nom du complexe *'
                                    placeholder="Tapez le nom du votre complexe"
                                    value={complexName}
                                    onChangeText={prevText=>setComplexName(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={textInputStyle}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={textInputContainerStyle}>
                            <TextInput
                                    mode='outlined'
                                    label='Adresse du complexe *'
                                    placeholder="Tapez l'adresse du votre complexe"
                                    value={complexAddress}
                                    onChangeText={prevText=>setComplexAddress(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={textInputStyle}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View style={textInputContainerStyle}>
                            <TextInput
                                    mode='outlined'
                                    label='Nombre des stades *'
                                    placeholder="Entrez le nombre de vos stades"
                                    value={complexStadiumNumber}
                                    onChangeText={prevText=>setComplexStadiumNumber(prevText)}
                                    theme={{colors: {primary:'#456383',text:'#9399a1',placeholder:'#9399a1'}}}
                                    style={textInputStyle}
                                    underlineColor='#9399a1'
                                />
                            </View>
                            <View  style={styles.pickerContainer}>
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
                    </View>
                </View>  
        </ScrollView>
        <View style={{width:'100%'}}>
            <Button
                theme={{colors: {primary:Colors.primary}}} 
                mode="contained"
                labelStyle={labelBtnStyle}
                contentStyle={{width:'100%'}}
                style={{borderColor:Colors.primary}}
                icon='exit-to-app'
                dark={true}
                >Se déconnecter 
            </Button>
        </View>
        </KeyboardAvoidingView>
     </ImageBackground>
    </View>

     );    
};


OwnerProfileScreen.navigationOptions = () => {

    return {
        headerRight : ()=>  (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
          <Item title = "save" 
            iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
            color={Platform.OS === 'android' ? 'white' : Colors.background}
          />
        </HeaderButtons>
      ),
        headerTitle:'Mon Profile',
        headerTitleStyle:{
            fontFamily:'poppins',
            color:Platform.OS === 'android' ? 'white' : Colors.background
          },
          headerStyle:{
              backgroundColor:Platform.OS === 'android' ? Colors.background : 'white'
          },
          headerTintColor:Platform.OS === 'android' ? 'white' : Colors.background,
          headerBackTitle : " "
        };
};


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white'
   },
   backgroundImage : {
    flex : 1
  },
   cardContainer:{
    flexDirection:'row',
    width:'90%'
   },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   card:{
    height:200,
    width:'70%',
    marginTop:50,
    marginHorizontal:20,
    backgroundColor:Colors.background,
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: {width:0, height:2},
    shadowRadius:8,
    elevation:5,
    justifyContent:'center',
   },
   cardBig:{
    height:300,
    width:'70%',
    marginTop:50,
    marginHorizontal:40,
    backgroundColor:Colors.background,
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: {width:0, height:2},
    shadowRadius:8,
    elevation:5,
    justifyContent:'center',
   },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   pickedImageText:{
    fontFamily:'poppins',
    color:'white',
    alignSelf:'center'
   },
   image:{
    width:'100%',
    height:'100%'
   },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   circlesContainer:{
     width:'20%',
     marginBottom:20,
     marginTop:50,
     height:200,
     justifyContent:'center',
     marginHorizontal:20
   },
   circlesContainerSmall:{
    width:'20%',
    marginBottom:20,
    marginTop:50,
    height:200,
    justifyContent:'center',
    marginHorizontal:10
  },
   circlesContainerBig:{
    width:'20%',
    marginBottom:20,
    marginTop:50,
    height:300,
    justifyContent:'center',
    marginHorizontal:35
  },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   circleOne:{
     height:50,
     width:50,
     borderRadius:50/2,
     backgroundColor:'#171d23',
     marginVertical:7,
     justifyContent:'center',
     alignItems:'center'
   },
   circleTwo:{
    height:50,
    width:50,
    borderRadius:50/2,
    backgroundColor:'#456383',
    marginVertical:7,
    justifyContent:'center',
    alignItems:'center'
   },
   circleThree:{
    height:50,
    width:50,
    borderRadius:50/2,
    backgroundColor:'#171d23',
    marginVertical:7,
    justifyContent:'center',
    alignItems:'center'
   },
   card2Container:{
     alignItems:'center',
     marginBottom:50
   },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   card2:{
    height:650,
    width:'90%',
    backgroundColor:Colors.background,
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:20
   },
   card2Big:{
    height:800,
    width:'90%',
    backgroundColor:Colors.background,
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:20
   },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   textInputsContainer:{
      height:'100%'
   },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   textInputContainer:{
    paddingVertical:5
   },
   textInputContainerBig:{
    paddingVertical:15
   },
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   textInput:{
     backgroundColor:'transparent',
     fontFamily:'poppins',
     fontSize:16,
     color:'#9399a1'
   },
   textInputBig:{
    backgroundColor:'transparent',
    fontSize:20,
    color:'#9399a1',
    fontFamily:'poppins'
   },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   labelBtn:{
    fontSize:15,
    fontFamily:'poppins', 
    color: 'white'
   },
   labelBtnBig:{
    fontSize:20,
    fontFamily:'poppins', 
    color: 'white'
   },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
   pickerContainer:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#9399a1',
    padding:Platform.OS === 'android' ? 5 : 15,
    marginTop:12
   }
  
});

export default OwnerProfileScreen;