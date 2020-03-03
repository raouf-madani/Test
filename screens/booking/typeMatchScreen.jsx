import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView, Text} from 'react-native';
import { PricingCard } from 'react-native-elements';
import Colors from '../../constants/Colors';

const TypeMatchScreen = props =>{
    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/night.jpg')} style={styles.bigBackgroundImage}>
        <ScrollView>
          <View style= {styles.textContainer}>
          <Text style= {styles.text}>اختر نوع المباراة</Text>
          </View>

          <PricingCard
            color={Colors.primary}
            title="مباراة واحدة"
            price="300 دج"
            info={['ساعة واحدة', 'دش', 'حجرة تغيير الملابس']}
            button={{ title: 'إحجز الآن'}}
            onButtonPress={()=>props.navigation.navigate('BookingMatch')}
            containerStyle = {styles.card}
          />
          <PricingCard
            color= {Colors.primary}
            title="مباراة واحدة"
            price="350 دج"
            info={['ساعة و نصف', 'دش', 'حجرة تغيير الملابس']}
            button={{ title: 'إحجز الآن'}}
            onButtonPress={()=>props.navigation.navigate('BookingMatch')}
            containerStyle = {styles.card}
          />
        </ScrollView>
      </ImageBackground>
    </View>

     );    
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer : {
    alignSelf : "center",
    marginTop : 20,
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  text : {
    color : "white" ,
    fontSize : 25 ,
    fontFamily : "poppins-bold"
  },
  bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    height:'100%',
    width:'100%'
  },
  card : {
    borderRadius : 15,
    elevation : 25,
    backgroundColor : Colors.grey,
    alignItems :"center"
  }
 
  
});

export default TypeMatchScreen;