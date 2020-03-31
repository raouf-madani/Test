import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Avatar ,Badge } from 'react-native-elements';
import Colors from '../constants/Colors';

const screen = Dimensions.get("window");
const BookingCard = props =>{
let avatarContainerStyle = styles.avatarContainer;
let cardContainerStyle = styles.cardContainer;
let smallTextStyle = styles.smallText;
let bigTextStyle = styles.bigText;
let stadiumNameStyle = styles.stadiumName;
let avatarSize = "large" ;
let badgeTailleStyle = styles.badgeTaille ;
let badgeTextStyle = styles.badgeText;
let badgeStyle = styles.badgeStyle;

  if (screen.height > 800 || screen.width > 500) {
      avatarContainerStyle = styles.avatarContainerBig;
      cardContainerStyle = styles.cardContainerBig;
      smallTextStyle =styles.smallTextBig;
      bigTextStyle = styles.bigTextBig;
      stadiumNameStyle = styles.stadiumNameBig;
      avatarSize = 120 ;
      badgeTailleStyle = styles.badgeTailleBig ;
      badgeTextStyle = styles.badgeTextBig;
  }
  if(screen.width <= 360) {
        avatarSize = 65;
        avatarContainerStyle = styles.avatarContainerSmall;
        badgeTextStyle = styles.badgeTextSmall;
        badgeStyle = styles.badgeStyleSmall;
        smallTextStyle =styles.smallTextSmall;
  }

    return(
        <View style ={cardContainerStyle}>
        <View style = {styles.left}>
             <View style = {avatarContainerStyle}>
                 <Avatar 
                 size={avatarSize}
                 rounded title="FF"
                 overlayContainerStyle={{backgroundColor: Colors.background,marginTop : 2}}
                 />
                 <Badge
                       status={props.status}
                       value = {props.value}
                       containerStyle={badgeStyle}
                       textStyle = {badgeTextStyle}
                       badgeStyle = {badgeTailleStyle}
                     />
                    
             </View>

             <View style = {styles.infosContainer}>
                 <Text 
                 style = {stadiumNameStyle}>
                 FootFive
                 </Text>

                 <View style={styles.matchContainer}>
                 <Text style = {smallTextStyle}>
                 {props.time} /
                 </Text>
                 <Text style = {smallTextStyle}> 
                 {props.stadium}
                 </Text>
                 </View>

                 <View style = {styles.timeContainer}>
                 
                 <Text style = {smallTextStyle}>
                 {props.hours}
                 </Text>
                 </View>

             </View>
      </View>

   <View style={styles.right}>
         <View style = {styles.date}>
            <Text style = {smallTextStyle}>
            {props.month}
            </Text> 
             <Text style = {bigTextStyle}>{props.day}</Text>
             <Text style = {smallTextStyle} >
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
        height : 100,
        alignSelf : "center",
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "rgba(80, 80, 80,0.7)",
        borderRadius : 15,
        marginVertical : 10
    },

    cardContainerBig : {
      width : "90%" ,
      height : 150,
      alignSelf : "center",
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : "rgba(80, 80, 80,0.7)",
      borderRadius : 25,
      marginVertical : 10
  },
 ///////////////////////////////////////////////////////////////   
    left : {
      flexDirection :"row",
      width : "50%",
      justifyContent : "space-around",

    
    },
/////////////////////////////////////////////////////////////////
    avatarContainer : {
      flexDirection : "row",
      width : 85,
      justifyContent : "center",
      height : "90%",
      overflow : "hidden",
      alignSelf : "center"
    },
    avatarContainerBig : {
      flexDirection : "row",
      width : 180,
      justifyContent : "center",
      height : "90%",
      overflow : "hidden",
      alignSelf : "center"
    },
    avatarContainerSmall : {
      flexDirection : "row",
      width : 65,
      justifyContent : "center",
      height : "85%",
      overflow : "hidden",
      alignSelf : "center"
    },
/////////////////////////////////////////////////////////////////

    badgeStyle : {
      position : "absolute" , 
      top : "80%", 
      width : "100%",
      overflow : "hidden"
      },
      
    badgeStyleSmall : {
      position : "absolute" , 
      top : "60%", 
      width : "100%"
      },
///////////////////////////////////////////////////////////////      
      badgeText : {
        fontSize : 12
      },
      badgeTextBig : {
        fontSize : 20
      },
      badgeTextSmall : {
        fontSize : 8
      },
 ///////////////////////////////////////////////////     

      badgeTaille : {
    
      },
      badgeTailleBig : {
        width : 120,
        height : "80%",
        borderRadius : 15,
      

      },
 ///////////////////////////////////////////////////     
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
////////////////////////////////////////////////////////////
    bigText : {
      
        fontFamily : "poppins-bold",
        fontSize : 15,
        color : "white"
        
    },
    bigTextBig : {
      
      fontFamily : "poppins-bold",
      fontSize : 23,
      color : "white"
      
  },
/////////////////////////////////////////////////////////   
    smallText : {
      fontFamily : "poppins",
      fontSize : 13,
      color : "#e9e5dd"
    
    },
    smallTextBig : {
      fontFamily : "poppins",
      fontSize : 22,
      color : "#e9e5dd"
    
    },
    smallTextSmall : {
      fontFamily : "poppins",
      fontSize : 11,
      color : "#e9e5dd"
    
    },

    /////////////////////////////////////////////////////////   
       stadiumName : {
        fontFamily : "poppins-bold",
        fontSize : 17,
        color : "white"
        },
        stadiumNameBig : {
          fontFamily : "poppins-bold",
          fontSize : 24,
          color : "white"
          },

});

export default BookingCard;