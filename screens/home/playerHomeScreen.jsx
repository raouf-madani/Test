import React from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions} from 'react-native';
import SmallCard  from '../../components/SmallCard';


const screen = Dimensions.get("window");
const PlayerHomeScreen = props =>{


let welcomeTextStyle = styles.welcomeText;

  if(screen.width < 350) {
    welcomeTextStyle = styles.welcomeTextSmall;
  }

  if (screen.height > 800) {
    welcomeTextStyle = styles.welcomeTextBig;
    
  }

    return(
      <View style ={styles.container}>
        <ImageBackground source = {require("../../assets/images/test.jpg")}  style = {styles.backgroudnImage}>
         
         <View style = {styles.textContainer}>
            <Text style = {welcomeTextStyle}>BIENVENUE</Text>

         </View>

          <View style = {styles.rowsContainer}>
              <View style = {styles.rowOne}>
                  <SmallCard 
                  image ={require("../../assets/logo/user.png")} 
                  screen = "Profile"
                  onPress = {() =>props.navigation.navigate('PlayerProfileScreen')}
                  />
                  
                  <SmallCard
                  image ={require("../../assets/logo/book.png")} 
                  screen = "Réserver"
                  onPress = {() =>props.navigation.navigate('Stadiums')}
                   />

              </View> 

              <View style = {styles.rowTwo}>
                  
                  <SmallCard
                    image ={require("../../assets/logo/calendar.png")} 
                    screen = "Réservations"
                    onPress = {() =>props.navigation.navigate('PlayerBookings')}
                     />

                  <SmallCard
                    image ={require("../../assets/logo/football2.png")} 
                    screen = "Something"
                    onPress = {() =>props.navigation.navigate('Signup')}
                   />

              </View>
       
            </View>

        </ImageBackground>


      </View>

     );    
};

PlayerHomeScreen.navigationOptions= ()=>{
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
/////////////////////////////////////////////////////////////
    welcomeText : {
        fontFamily : "poppins-bold",
        fontSize : 45,
        color : "white",
        letterSpacing : 5,

    },
    welcomeTextSmall : {
      fontFamily : "poppins-bold",
      fontSize : 28,
      color : "white",
      letterSpacing : 4,

    },
    welcomeTextBig : {
      fontFamily : "poppins-bold",
      fontSize : 55,
      color : "white",
      letterSpacing : 5,
    }
/////////////////////////////////////////////////////////////

   

});

export default PlayerHomeScreen;