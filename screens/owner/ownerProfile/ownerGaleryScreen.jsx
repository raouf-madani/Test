import React,{useState} from 'react';
import { StyleSheet,View,ImageBackground,Text,TouchableHighlight,Image} from 'react-native';
import { Divider } from 'react-native-elements';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';
import {Ionicons} from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const OwnerGaleryScreen = props =>{

  const [pickedImage,setPickedImage]= useState();
  const [pickedImage2,setPickedImage2]= useState();
  const [pickedImage3,setPickedImage3]= useState();
  const [pickedImage4,setPickedImage4]= useState();

  //Permissions 
  const verifyPermissions= async ()=>{
    const result= await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
    if(result.status !== 'granted'){
        Alert.alert('Permissions insuffisantes!',
        'Vous devez autoriser votre caméra pour utiliser cette application.',
        [{text:"D'accord"}]);
        return false;
    }
    return true;
  };

  //Image 1 
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

 //Image 2 
 const takeImageHandler2 = async ()=>{
  const hasPermissions = await verifyPermissions();
  if(!hasPermissions){
      return;
  }
  const image = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[60,60],
      quality:0.7
  });
  
  setPickedImage2(image.uri);
};

//Image 3
const takeImageHandler3 = async ()=>{
  const hasPermissions = await verifyPermissions();
  if(!hasPermissions){
      return;
  }
  const image = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[60,60],
      quality:0.7
  });
  
  setPickedImage3(image.uri);
};

//Image 4
const takeImageHandler4 = async ()=>{
  const hasPermissions = await verifyPermissions();
  if(!hasPermissions){
      return;
  }
  const image = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[60,60],
      quality:0.7
  });
  
  setPickedImage4(image.uri);
};


    return(
    <View style={styles.container}>
     <ImageBackground source = {require("../../../assets/images/android.jpg")}  style={styles.backgroundImage}>
      <View style={styles.card}>
        <View style={styles.gridContainer}>
          <View style={styles.grid}>
            {!pickedImage ? (<View style={styles.wrapper}>
              <TouchableHighlight style={styles.iconContainer} onPress={takeImageHandler}>
                <Ionicons title = "add" 
                name ='ios-camera'
                color={Colors.background} size={36} />
              </TouchableHighlight>
              <Text style={styles.text}>Photo 1</Text>
            </View>)
             : (<View style={styles.wrapper}>
               <Image style={styles.image} source={{uri:pickedImage}} />
               <TouchableHighlight style={styles.iconContainer} onPress={()=>setPickedImage(false)}>
                  <Ionicons title = "add" 
                  name ='ios-remove'
                  color='red' size={36} />
               </TouchableHighlight>
               </View>)}
          </View>
          <View style={styles.grid}>
            {!pickedImage2 ? (<View style={styles.wrapper}>
              <TouchableHighlight style={styles.iconContainer} onPress={takeImageHandler2}>
                <Ionicons title = "remove" 
                name = 'ios-camera'
                color={Colors.background} size={36} />
              </TouchableHighlight>
              <Text style={styles.text}>Photo 2</Text>
            </View>) :
             ( <View style={styles.wrapper}>
                <Image style={styles.image} source={{uri:pickedImage2}} />
                <TouchableHighlight style={styles.iconContainer} onPress={()=>setPickedImage2(false)}>
                  <Ionicons title = "remove" 
                  name ='ios-remove'
                  color='red' size={36} />
               </TouchableHighlight>
               </View>)}
          </View>
        </View>
        <View style={styles.gridContainer}>
          <View style={styles.grid}>
            {!pickedImage3 ? (<View style={styles.wrapper}>
              <TouchableHighlight style={styles.iconContainer} onPress={takeImageHandler3}>
                <Ionicons title = "add" 
                name ='ios-camera'
                color={Colors.background} size={36} />
              </TouchableHighlight>
              <Text style={styles.text}>Photo 3</Text>
            </View>) : 
            (<View style={styles.wrapper}>
               <Image style={styles.image} source={{uri:pickedImage3}} />
               <TouchableHighlight style={styles.iconContainer} onPress={()=>setPickedImage3(false)}>
                  <Ionicons title = "remove" 
                  name ='ios-remove'
                  color='red' size={36} />
               </TouchableHighlight>
               </View>)}
          </View>
          <View style={styles.grid}>
            {!pickedImage4 ? (<View style={styles.wrapper}>
              <TouchableHighlight style={styles.iconContainer} onPress={takeImageHandler4}>
                <Ionicons title = "add" 
                name ='ios-camera'
                color={Colors.background} size={36} />
              </TouchableHighlight>
              <Text style={styles.text}>Photo 4</Text>
            </View>) : 
            (<View style={styles.wrapper}>
                <Image style={styles.image} source={{uri:pickedImage4}} />
                <TouchableHighlight style={styles.iconContainer} onPress={()=>setPickedImage4(false)}>
                  <Ionicons title = "remove" 
                  name ='ios-remove'
                  color='red' size={36} />
               </TouchableHighlight>
               </View>)}
          </View>
        </View>
      </View>
     </ImageBackground>
    </View>

     );    
};

OwnerGaleryScreen.navigationOptions= navData => {
    
     return {
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "save" 
                   iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                   color='white'
                 />
               </HeaderButtons>
               
             ),
             headerTitle:'Ma Galerie',
             headerTitleStyle:{
               fontFamily:'poppins',
               color:'white'
             },
             headerStyle:{
                 backgroundColor:Colors.background
             },
             headerTintColor:'white'
     
     };
 
  };


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white'
   },
   backgroundImage : {
    flex : 1,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center'
  },
  card:{
    height:'95%',
    width:'95%',
    backgroundColor:Colors.background,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
   },
   gridContainer:{
     flexDirection:'row'
   },
   grid:{
     backgroundColor:'white',
     width:150,
     height:200,
     borderRadius:10,
     borderWidth:1,
     margin:5
   },
   wrapper:{
     width:'100%',
     height:'100%',
     justifyContent:'flex-start',
     alignItems:'flex-end'
   },
   iconContainer:{
    height:40,
    width:40,
    borderRadius:40/2,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center'
   },
   image:{
     width:'100%',
     height:'100%',
     position:'absolute'
   },
   text:{
     alignSelf:'center',
     position:'relative',
     top:50
   }
});

export default OwnerGaleryScreen;