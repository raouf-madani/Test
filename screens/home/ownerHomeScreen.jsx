import React, {useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, ImageBackground , Image} from 'react-native';
import SmallCard  from '../../components/SmallCard';
import {useDispatch,useSelector} from 'react-redux';
import * as ownerActions from '../../store/actions/ownerActions';
import * as propertyActions from '../../store/actions/propertyActions';

const OwnerHomeScreen = props =>{
  
  const ownerID= props.navigation.getParam('ownerID');
   
  /*
   *******Fetch Owner's property
  */
  const dispatch =useDispatch();
  const getOwnerProperty=useCallback(async()=>{
    try{
      dispatch(ownerActions.setOwnerProperty(ownerID));
      dispatch(propertyActions.setProperties());
      }catch(err){
        console.log(err);
      }
  },[dispatch]);

  useEffect(()=>{
  getOwnerProperty();
  },[dispatch,getOwnerProperty]);

  useEffect(()=>{
    const willFocusSub= props.navigation.addListener('willFocus',getOwnerProperty);
    return ()=>{
      willFocusSub.remove();
    };
  },[getOwnerProperty]);

    return(
      <View style ={styles.container}>
        <ImageBackground source = {require("../../assets/images/profileBack5.jpg")}  style = {styles.backgroudnImage}>
         
         <View style = {styles.textContainer}>
            <Text style = {styles.welcomeText}>BIENVENUE</Text>

         </View>

          <View style = {styles.rowsContainer}>
              <View style = {styles.rowOne}>
                  <SmallCard 
                  image ={require("../../assets/logo/user.png")} 
                  screen = "Profile"
                  onPress = {() =>props.navigation.navigate('OwnerProfile',{ownerID:ownerID})}
                  />
                  
                  <SmallCard
                  image ={require("../../assets/logo/book.png")} 
                  screen = "Services"
                  onPress={()=> props.navigation.navigate('OwnerService')}
                   />

              </View> 

              <View style = {styles.rowTwo}>
                  
                  <SmallCard
                    image ={require("../../assets/logo/calendar.png")} 
                    screen = "Réservations"
                    onPress={()=> props.navigation.navigate('OwnerBookings')}
                     />

                  <SmallCard
                    image ={require("../../assets/logo/football2.png")} 
                    screen = "Support"
                    onPress={()=>props.navigation.navigate('OwnerSupport')}
                   />

              </View>
       
            </View>

        </ImageBackground>


      </View>

     );    
};

OwnerHomeScreen.navigationOptions= ()=>{
  

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
  container : {
      flex : 1,
  },
  backgroudnImage : {
    flex : 1 ,
    justifyContent : "center"
  },
  image : {
        width : "100%",
        height : "100%"
  },
  imageContainer : {
      width : 100,
      height : 100,
      alignSelf : "center",
      marginVertical : 30
  },
  rowsContainer : {
      alignItems :"center",
      justifyContent : "space-around" 
  },
  rowOne : {
      flexDirection : "row",
      width : "80%",
      height : "30%",
    
      
  },
  rowTwo : {
    flexDirection : "row",
    width : "80%",
    height : "30%",
    marginBottom : 30
},

    textContainer : {
            alignSelf : "center",

    },
    welcomeText : {
        fontFamily : "poppins-bold",
        fontSize : 45,
        color : "white",
        letterSpacing : 5,

    }

   

});

export default OwnerHomeScreen;