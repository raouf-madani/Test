import React from 'react';
import { StyleSheet,View,ImageBackground,Image,Text,Linking} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';

const OwnerSupportScreen = props =>{

    return(
    <View style={styles.container}>
        <View style={styles.card}>
            <ImageBackground source={require('../../../assets/images/support.png')} style={styles.bigBackgroundImage} blurRadius={0}>
                
            </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
                 <Text style={styles.title}>Un Problème Téchnique ?</Text>
        </View>
        <View style={styles.card2}>
            <View style={styles.infoContainer}>
              <Image style={{height:24,width:24}} source={require('../../../assets/images/whatsapp.png')} />
              <Text  style={styles.info}>06532458765</Text>
            </View>
            <View style={styles.infoContainer}>
              <Image style={{height:24,width:24}}  source={require('../../../assets/images/inbox.png')} />
              <Text style={styles.info}>contact@partiyadz.com</Text>
            </View>
            <View style={styles.infoContainer}>
              <Image style={{height:24,width:24}}  source={require('../../../assets/images/domain.png')} />
              <Text style={styles.info}>partiyadz.com</Text>
            </View>
        </View>
    </View>

     );    
};

OwnerSupportScreen.navigationOptions= navData => {
    
     return {
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "callSupport" 
                   iconName = {Platform.OS === 'android' ? 'md-call' : 'ios-call'}
                   color='white'
                   onPress={()=>{
                     let phoneNumber = '';
     
                     if (Platform.OS === 'android') {
                       phoneNumber = 'tel:${06532458765}';
                     } else {
                       phoneNumber = 'telprompt:${06532458765}';
                     }
                 
                     Linking.openURL(phoneNumber);
                   }}
                 />
               </HeaderButtons>
               
             ),
             headerTitle:'Support',
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
    backgroundColor:'white',
    justifyContent:'flex-start'
   },
   card:{
    margin:15,
    height:300,
   },
   bigBackgroundImage:{
    flex:1,
    justifyContent:'flex-end'
   },
   titleContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:-35,
      marginHorizontal:5
   },
   title:{
       fontFamily:'poppins-bold',
       color:Colors.background,
       fontSize:24
   },
   card2:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop: 20
   },
   infoContainer:{
       flexDirection:'row',
       paddingVertical:5
   },
   info:{
       fontSize:15,
       fontFamily:'poppins',
       paddingLeft:10,
       color:Colors.background
   }
});

export default OwnerSupportScreen;