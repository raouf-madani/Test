import React,{useEffect} from 'react';
import { StyleSheet, View, ImageBackground, ActivityIndicator,AsyncStorage} from 'react-native';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';
import {useDispatch} from 'react-redux';


const StartupScreen = props =>{

    const dispatch = useDispatch();
    useEffect(()=>{
       const tryLogin=async()=>{
           const userData= await AsyncStorage.getItem('userData');
          
           if(!userData){
               props.navigation.navigate('Auth');
               return;
           }
           const transformedData = JSON.parse(userData); // transform string to Javascript Object or Array
           const {token,userID,expiryDate,gender} = transformedData;
           const expirationDate = new Date(expiryDate);
           
           if(!token || !userID || expirationDate <= new Date()){
            props.navigation.navigate('Auth');
            return;
           }
            
           if(gender==="player"){
            props.navigation.navigate('Player');
           }else if(gender==="owner"){
            props.navigation.navigate('Owner');
           }
           dispatch(authActions.authenticate(token,userID));
       }
       tryLogin();
    },[dispatch]);

    return(
      <View style = {styles.container}>
        <ImageBackground 
        source={require('../assets/images/player.jpg')} 
        style={styles.bigBackgroundImage} 
        style={styles.bigBackgroundImage}
        >
            <View style={styles.overlayBackground}>
                <ActivityIndicator size='large' color={Colors.primary} />
            
            </View>
         </ImageBackground>

      </View>

     );    
};

/*ProfileChoiceScreen.navigationOptions= ()=>{
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
}*/


const styles= StyleSheet.create({
container : {
    flex : 1 ,
},
bigBackgroundImage:{
flex:1,
resizeMode:'cover',
}, 
overlayBackground:{
backgroundColor:"rgba(0, 0, 0, 0.4)", 
flex:1,
justifyContent:'center',
alignItems:'center'
}

});

export default StartupScreen;