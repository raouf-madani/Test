import React from 'react';
import { StyleSheet, Text, View, Image, Platform, ImageBackground ,Dimensions} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-paper';
import Colors from '../constants/Colors';
import Carousel , { ParallaxImage }  from 'react-native-snap-carousel';
import {Ionicons} from "@expo/vector-icons";

const screen = Dimensions.get("window");
const InfoOverlay = props =>{
  
  const data = [
          {id : 1 , 
            title : require("../assets/images/footfive2.jpg")
          },
          {id:2 ,
          title : require("../assets/images/imagefive.jpg")},
          {id:3 ,
            title : require("../assets/images/footfive2.jpg")}

  ]
  const renderItem = ({item, index},parallaxProps) => {
      return(
      
     <View style = {{flex: 1, overflow : "hidden" }}>
        <ParallaxImage
          source = {item.title}
          containerStyle = {{ 
        
           borderRadius: 25 ,
           flex: 1 
            }}
          style = {{resizeMode : "contain"}}
          parallaxFactor={0.4}
          {...parallaxProps}
         
         /></View>
      
      );

  }
    return(  
      
        <Overlay 
        isVisible={props.isVisible} 
        overlayBackgroundColor = "rgba(255, 255, 255, 0.98)"
        overlayStyle = {styles.overlay}
        >

        <ImageBackground 
        style = {styles.container}
        source = {require("../assets/images/overlay.jpg")}
         >
         <View style = {styles.header}>
         

            <View style = {styles.name}>
                <Text style = {{
                  fontSize : 19 , 
                  fontFamily : "poppins-bold",
                  letterSpacing : 2
                  
                  }}>
                
                Foot Five Blida
                
                </Text>
            </View>

            <View style ={styles.close}>

              <Ionicons 
              name="md-close-circle" size={26} color={Colors.orange} 
              onPress={props.infoHandler}
              />
             </View>

            </View>
            <View style = {styles.Carousel}>
                    <Carousel
                      data = {data}
                      renderItem = {renderItem} 
                      itemWidth = {screen.width - 60}
                      sliderWidth = {screen.width - 60 }
                      itemHeight = {300}
                      sliderHeight = {350}
                    hasParallaxImages = {true}
                    
                    /> 
             </View>

             <View style = {styles.allInfo}>

                <View style = {styles.propertyInfo}>
            
                  <Text>
                 <Text style = {styles.leftText}>Télephone : </Text> 
                 <Text style = {styles.rightText}> 025252525 </Text> 
                  </Text>
                  <Text>

                  <Text style = {styles.leftText} >Adresse : </Text>
                   <Text style = {styles.rightText}> 17 Cité jwajla 
                   </Text> 
                  </Text>

                  <Text>
                  <Text style = {styles.leftText} >Ville : 
                  </Text>
                   <Text style = {styles.rightText}>Blida</Text> 
                </Text>

                <Text>
                  <Text style = {styles.leftText} >Douche : 
                  </Text>
                   <Text style = {styles.rightText}> Oui</Text> 
                </Text>
                    
                  <Text>
                  <Text style = {styles.leftText} >Stades : 
                  </Text>
                   <Text style = {styles.rightText} > 5x5 , 7x7
                   </Text> 
                  </Text>

                </View>
              </View>

        </ImageBackground>
      </Overlay>

     );    
};


const styles= StyleSheet.create({
overlay : {
  height : "90%",
  width : "90%",
  backgroundColor : "rgba(255,255,255,1)",
  borderRadius : 25
 
},
container : {
  // backgroundColor : "blue",
  flex : 1 ,

} , 
header : {
flexDirection : "row",

},
close : {
 
 

},
name : {

flex : 3,
alignItems : "center"
  
},
Carousel : {
  
  height : "50%",
  width : "100%",
  alignSelf : "center",
  alignItems : "center",
  marginVertical : 15,
  
},
allInfo : {

  width : "90%",
  height : "100%",
  flexShrink : 1,
  alignSelf : "center"
}, 
propertyInfo : {
  width : "100%" ,
  height : "90%",
  justifyContent : "space-around"
},
extraInfo : {
  flex : 1 
},
////////////////////////////////////////////////////////
leftText : {
  fontFamily : "poppins-bold",
  fontSize : screen.height >800 ? 24 :  16,
  
},
/////////////////////////////////////////////
rightText : {
  fontFamily : "poppins",
  fontSize : screen.height >800 ? 22 :  14,
}

////////////////////////////////////////////////////////

});

export default InfoOverlay;

 {/* <Button 
              theme={{colors: {primary:Colors.primary}}} 
              mode={Platform.OS === 'android' ? "contained" : "outlined"}
              labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
              contentStyle={{width:'100%'}}
              style={{borderRadius:20, borderColor:'white'}}
              onPress={props.infoHandler}
            >
              Confirmer
            </Button> */}