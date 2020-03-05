import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-paper';
import Colors from '../constants/Colors';

const InfoOverlay = props =>{
  
    return(   
        <Overlay 
        isVisible={props.isVisible} 
        overlayBackgroundColor = "rgba(255, 255, 255, 0.98)"
        overlayStyle = {{borderRadius : 25}}
       
        >
        <View style = {styles.container}>

     
        <View style = {styles.iconContainer} >

        <Image style ={{height : "100%" , width : "100%"}} source = {require('../assets/images/lock.png')}/>

        </View>

          <View style = {styles.textContainer}>
              <Text style = {{fontSize : 25 , fontFamily : "poppins-bold" , color : "black"}}>قواعد الحجز</Text>
              <View style = {styles.rulesContainer}>
              <Text style = {styles.text}>قاعدة 1 : إلغاء الحجز يكون على الأقل ساعة قبل بدأ المباراة</Text>
              <Text style = {styles.text}>قاعدة 2 : يجب الرد على المكالمة لتأكيد الحجز</Text>


              <Text style = {styles.text}>قاعدة 3 : إلغاء الحجز يكون على الأقل ساعة قبل بدأ المباراة</Text>
              </View>
          </View>
          <View style={styles.buttonContainer}>
          <Button 
                  theme={{colors: {primary:Colors.primary}}} 
                  mode={Platform.OS === 'android' ? "contained" : "outlined"}
                  labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
                  contentStyle={{width:'100%'}}
                  style={{borderRadius:20, borderColor:'white'}}
                  onPress={props.infoHandler}
                  >
                  موافق
                  </Button>
                  </View>

        </View>
      </Overlay>

     );    
};


const styles= StyleSheet.create({
container : {
  flex : 1 ,
 
  justifyContent : "space-around",
  
  
},
textContainer : {
  flex : 1 ,
  
  justifyContent : "center",
  alignItems : "center"
},
iconContainer : {  
  overflow : "hidden" ,
  width : 150 , 
  height : 150 , 
  alignSelf : "center" ,
  marginVertical : 15
},

  buttonContainer:{
    padding:20,
    alignItems:'center',
    width:'100%'
  },
  rulesContainer : {
    flex : 1 ,
      justifyContent : "space-around" ,
  },

  text : {
      color : "black",
      fontFamily : "poppins"
  }
   

});

export default InfoOverlay;