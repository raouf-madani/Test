import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Avatar ,Badge } from 'react-native-elements';


const BookingCard = props =>{
    return(
        <View style ={styles.cardContainer}>
        <View style = {styles.left}>
             <View style = {styles.avatarContainer}>
                 <Avatar 
                 size="large" 
                 rounded title="FF"
                 overlayContainerStyle={{backgroundColor: '#323232',marginTop : 2}}
                 />
                 <Badge
                       status={props.status}
                       value = {props.value}
                       containerStyle={{
                         position : "absolute" , 
                         top : "80%", 
                         width : "100%"
                         }}
                     />
                    
             </View>

             <View style = {styles.infosContainer}>
                 <Text 
                 style = {{
                   fontFamily : "poppins-bold",
                   fontSize : 17,
                   color : "white"
                   }}>
                 FootFive
                 </Text>

                 <View style={styles.matchContainer}>
                 <Text style = {styles.smallText}>
                 {props.time} /
                 </Text>
                 <Text style = {styles.smallText}> 
                 {props.stadium}
                 </Text>
                 </View>

                 <View style = {styles.timeContainer}>
                 
                 <Text style = {styles.smallText}>
                 {props.hours}
                 </Text>
                 </View>

             </View>
      </View>

   <View style={styles.right}>
         <View style = {styles.date}>
            <Text style = {styles.smallText}>
            {props.month}
            </Text> 
             <Text style = {styles.bigText}>{props.day}</Text>
             <Text style = {styles.smallText} >
             {props.year}
             </Text>

         </View>
   </View>

</View>

     );    
};


const styles= StyleSheet.create({

    cardContainer : {
        width : " 97%" ,
        height : 85,
        alignSelf : "center",
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "rgba(80, 80, 80,0.9)",
        borderRadius : 15,
        marginVertical : 10
    },
    left : {
      flexDirection :"row",
      width : "50%",
      justifyContent : "space-around",
      
    
    },
    avatarContainer : {
      flexDirection : "row",
      width : 78,
      justifyContent : "center",
      height : "90%"
    },
    infosContainer : {
      justifyContent : "center"
    },
    matchContainer : {
      flexDirection : "row"
    },
    
    right : {
      width : "20%",
      justifyContent : "center"
      
    },
    date : {
        alignItems : "center",
        justifyContent : "center",
       
    },
    bigText : {
      
        fontFamily : "poppins-bold",
        fontSize : 15,
        color : "white"
        
    },
    smallText : {
      fontFamily : "poppins",
      fontSize : 13,
      color : "#e9e5dd"
    
    }
       

});

export default BookingCard;