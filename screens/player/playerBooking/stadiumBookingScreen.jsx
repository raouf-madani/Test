import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Picker,ImageBackground, Dimensions , StatusBar, Platform,ActionSheetIOS} from 'react-native';
import { RadioButton , Button} from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Colors from "../../../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';

const screen = Dimensions.get("window");

// 10 next Days and OWN TIME PICKER
let days = [];
let hours = [
{id : "1",time : "01:00"},
{id : "2",time : "01:30"},
{id : "3",time : "02:00"},
{id : "4",time : "02:30"},
{id : "5",time : "03:00"},
{id : "6",time : "03:30"},
{id : "7",time : "04:00"},
{id : "8",time : "04:30"},
{id : "9",time : "05:00"},
{id : "10",time : "06:30"},
{id : "11",time : "07:00"},
{id : "12",time : "07:30"},
{id : "13",time : "08:00"},
{id : "14",time : "08:30"},
];

for(let i=0 ; i<=10 ; i++){
    days.push(
      {
     id : i.toString() ,
     date : moment().add(i, 'days').format("YYYY-MM-DD"),
     get day() {
        return moment(this.date).format("ddd")

     }
    },
     
      );

}

//OFFERS

let offers = [
  
     { id : "offer1",
      horraires :
        {Sat : ["01:00","05:00"],
         Sun : ["01:00","05:00"],
         Mon : ["03:00" , "07:00"]
      }
      
      ,
      stadiumsNumber : 3 ,
      stadiumsType : "5x5",
      matchTimeType : "1h",
      price : "3000"
    
    }
  ,
  { id : "offer2",
  horraires :
    {Sat : ["02:00","05:00"],
     Sun : ["01:00","05:00"],
     Mon:["03:00" , "04:00"]
  }
  ,
  stadiumsNumber : 3 ,
  stadiumsType : "5x5",
  matchTimeType : "1h30",
  price : "3500"

},
 {
    id : "offer3",
    horraires :
      {Sat : ["08:00","08:30"],
       Sun : ["08:00","08:30"],
       Mon:["05:00","08:30"]
    }
    ,
    stadiumsNumber : 2 ,
    stadiumsType : "7x7",
    matchTimeType : "1h",
    price : "4500"
}

];
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//GET ALL STadiums that exist and avoid duplicated elements
let allStadiums=[] ;
let stadiumsType = offers.map((item,index) => {
    return item.stadiumsType;

});

stadiumsType.forEach(element => {
  
      if(allStadiums.indexOf(element) === -1)
        {allStadiums.push(element);}
}

);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const StadiumBookingScreen = props =>{
/////////////////////////////////////////////////////////////////
//Responsivity //
let iconSize = 22 ;
let nameTextStyle = styles.nameText;
let typeStyle = styles.typeStyle;
let timeTextStyle = styles.timeText;
let calendarCardStyle = styles.calendarCard ;
let calendarDayStyle = styles.calendarDay;
let calendarDateStyle = styles.calendarDate;
let matchTypeStyle = styles.matchType;
let matchTimeStyle = styles.matchTime;
let partyTimeStyle = styles.partyTime ;
let priceTextStyle = styles.priceText;
let priceButtonStyle =  styles.priceButton;
let tempsDuMatchStyle = styles.tempsDuMatch ;
//Big Screen Design 
if(screen.height > 800) {
    iconSize = 30 ;
    nameTextStyle = styles.nameTextBig;
    typeStyle = styles.typeStyleBig;
    timeTextStyle = styles.timeTextBig;
    calendarCardStyle = styles.calendarCardBig;
    calendarDayStyle = styles.calendarDayBig;
    calendarDateStyle = styles.calendarDateBig;
    matchTypeStyle = styles.matchTypeBig;
    matchTimeStyle = styles.matchTimeBig;
    partyTimeStyle = styles.partyTimeBig ;
    priceTextStyle = styles.priceTextBig;
    priceButtonStyle = styles.priceButtonBig;
    tempsDuMatchStyle = styles.tempsDuMatchBig ;
}

if(screen.width <= 360) {
  
  iconSize = 14 ;
  nameTextStyle = styles.nameTextSmall;
  matchTypeStyle = styles.matchTypeSmall;
  typeStyle = styles.typeStyleSmall;
  matchTimeStyle = styles.matchTimeSmall;
  timeTextStyle = styles.timeTextSmall;
  calendarCardStyle = styles.calendarCardSmall;
  calendarDayStyle = styles.calendarDaySmall;
  calendarDateStyle = styles.calendarDateSmall;
  partyTimeStyle = styles.partyTimeSmall ;
  priceButtonStyle = styles.priceButtonSmall;
  priceTextStyle = styles.priceTextSmall;
  tempsDuMatchStyle = styles.tempsDuMatchSmall ;
}
/////////////////////////////////////////////////////////////////
    const [selectedOffer , setSelectedOffer] = useState(false);
    const [priceState , setPrice] = useState(0);
    const [offerHoursState , setOfferHours] = useState([]);

    //Match Type State 5x5 6x6 7x7 ....
    const [matchTypeState , setMatchType] = useState(`${allStadiums[0]}`);
    //Match Time State 1h 1h30 2h 
    const [matchTimeState , setMatchTime] = useState();

    //Selected Date State with the full date and the day 
    const [selectedDateState , setSelectedDate] = useState({
        id : "0",
        day :"0",
        date : "0"

    });

    //Selected Playing Hour 
    const [selectedHour , setSelectedHour] = useState();

    //Created day's hours 
    const [hoursState , setHoursState] = useState ([]);

    //Custom radio buttons for time
    const [buttonState , setButtonState] = useState({
              id : 0 ,
              color : ""
    });

    //Selected Match type handler (Set the match type)
    const matchTypeHandler = (itemValue, itemIndex) => {
        setMatchType(itemValue);
       
        
    };

    //Selected Match time type handler (set the match time)
    const matchTimeHandler = (itemValue)=>{
        setMatchTime (itemValue);
        
    };
  

    //Selected Date (set the selected date)
    const selectedDateHandler = (v)=> {
        setSelectedDate(v);
    };

    //Selected time to play the game 
    const buttonsHandler = (e)=> {
      setButtonState({
        id : e ,
       color : Colors.secondary });
     
    };
 //////////////////////////////////////////////////////////
    //GET ALL matchTime types that exist in our dummy Data and match to the match type 
    let allTimes = [];
    let timesFiltered = offers.filter(element=>
                  element.stadiumsType === matchTypeState );

    let timesFilteredToShow = timesFiltered.map(e=>e.matchTimeType)
    //////////////////////////////////////////////////////////
    //GET ONLY THE GAME TIMES THAT MATCHES WITH THE SELECTED TYPE AND TIME
    
      useEffect(()=> {
    
      let daysHours = [];
      const customOffers = offers.find(element => element.stadiumsType === `${matchTypeState}` && element.matchTimeType ===`${matchTimeState}`);
      
      if(customOffers && selectedDateState) {
       daysHours = customOffers.horraires[selectedDateState.day]; 
       setPrice(customOffers.price);
       
      } else{
        const timeChange = offers.find(element => element.stadiumsType === `${matchTypeState}`);

        setMatchTime(timeChange.matchTimeType);
      }


 let indexes = [];

if(daysHours) {
       
       
          hours.map(element => {
          
          if(element.time === daysHours[0] ||element.time === daysHours[1] ) {
            
                indexes.push (hours.indexOf(element));
             
          }
    
});
setHoursState(hours.slice(indexes[0],indexes[1]+1));

} else {
  setHoursState([]);

}
let offerHours = [];
hours.slice(indexes[0],indexes[1]+1).map(element => {
      offerHours.push(element.time);

})

setOfferHours(offerHours);

if(offerHours.indexOf(buttonState.id) === -1) {
  setSelectedOffer(false);
}

if(selectedHour && offerHours.indexOf(buttonState.id) !== -1 ) {
    setSelectedOffer(true);
} 

 },[matchTypeState,matchTimeState,selectedDateState,selectedHour,buttonState]);

 const openSheet = ()=> {
  
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: allStadiums,
      destructiveButtonIndex: -1,
      cancelButtonIndex:-1,
    },
    
    buttonIndex => {
     matchTypeHandler(allStadiums[buttonIndex],buttonIndex);
    
    }
  );

 };
    return(
      
      <ImageBackground source = {require ("../../../assets/images/android.jpg")} 
      style ={styles.container} 
      blurRadius = {0.5}>
   
     <ScrollView style = {styles.componentsContainer}>
      
                  <View style = {styles.stadiumCard}>
                  <Ionicons name="md-football" size={iconSize} color={Colors.secondary} />
                      <Text style ={nameTextStyle}>
                      FootFive Blida
                      </Text>
                      <Ionicons name="md-football" size={iconSize} color={Colors.secondary} />
                  </View>

                          {/* Match Type Part : Start */}
                  <View style = {matchTypeStyle}>

                    <View style = {styles.typeTextContainer}>
                          <Text style = {typeStyle}>
                          Type du Match :  
                          </Text>
                    </View>

                     { Platform.OS === "android" ? <Picker 
                      style = {styles.picker}
                      onValueChange = {matchTypeHandler}
                      selectedValue = {matchTypeState}
                      
                      >
                   
                      {allStadiums.map ( (item,index) => 
                      <Picker.Item 
                      key = {index} 
                      label={item} 
                      value={item} 
                     
                      />)}

                      </Picker> :
                      <TouchableOpacity style = {styles.touchableIos} onPress = {openSheet}>
                        <Text style = {{
                          fontSize : 18,
                          fontFamily : "poppins-bold"
                          }
                          }>
                        {matchTypeState}
                        </Text>

                      </TouchableOpacity>
                    }

                  </View>
                    {/* Match Type Part : End */}

                      {/* Match Time Part : Start */}
                  <View style = {matchTimeStyle}>
                 
                 <View style = {styles.timeTextContainer}>
                  
                   <Text style = {tempsDuMatchStyle}>Temps du Match : </Text>
                 
                 </View> 

                  <View style = {styles.radioButtons}>
                      <RadioButton.Group
                        value = {matchTimeState}
                        onValueChange = {matchTimeHandler}
                      >

                {/* RadioButtons Elements : Start */}
                      {timesFilteredToShow.map(
                        (element,index)=>
                        {
                           return (
                             <View 
                             style = {{
                               marginHorizontal : 5 ,
                              
                               }} 
                             key ={index}>

                          <Text style = {timeTextStyle}>
                          {element}
                           </Text>
                          <RadioButton.Android
                          value={element} 
                           color = {Colors.secondary}
                          
                          />
                        </View>
                        )

                          })}
                        {/* RadioButtons Elements : End */}
                      </RadioButton.Group>
                  </View>
                  </View>
                  {/* Match Time Part : End */}


                   <View  style = {styles.customCalendar}>
                        <View style = {styles.dateText}>
                        
                        <Text style = {tempsDuMatchStyle}>
                        Date du match :</Text>
                        
                  </View>  
                    <RadioButton.Group
                        value = {selectedDateState}
                        onValueChange = {selectedDateHandler}
                      >
                        {/* RadioButtons Elements : Start */}
                      
                        <FlatList
                            data = {days}
                            horizontal ={ true}
                            renderItem = {(itemData)=>{
                            return (    
                          <View style = {calendarCardStyle}>
                           <Text 
                           style ={calendarDayStyle} >
                              {itemData.item.day}
                            </Text>
                            <View style = {{height:30,justifyContent : "center"}}>
                              <RadioButton.Android  
                              value={itemData.item} 
                              color = {Colors.secondary}
                              
                              /></View>

                              <Text style ={calendarDateStyle} >
                              {itemData.item.date}
                              </Text>

                            </View>
                        )
                            }
                            }
                      
                         /> 

                            {/* RadioButtons Elements : End */}
                      </RadioButton.Group>

                    </View>

               <View style = {{marginTop : 20}}>
            {hoursState.length === 0 ?
            <View>
            <Text style = {styles.noTimeText}>
            Aucun créneau disponible 
            </Text>
            </View> 
            
            
            : 
          
                <FlatList
                horizontal
                data = {hoursState}
                style = {styles.hoursList}
                renderItem = {(itemData)=>{

                return (
                 <View style = {styles.buttonContainer}>
                   
                      
              <Button
                  contentStyle={styles.timeButton}
                  labelStyle = {{color : "black" }}
                  style={{borderColor:Colors.secondary , 
                  borderWidth : 0.5 , 
                  backgroundColor : buttonState.id ===itemData.item.time ? buttonState.color : "white",
                  borderRadius : 20,
                  marginHorizontal : 5,
                  marginVertical : 5
                  }} 
                  
                  onPress ={()=>{
                    buttonsHandler(itemData.item.time)
                    setSelectedHour(itemData.item.time);
                    }}
                  >
                    <Text 
                    style = {partyTimeStyle}>
                    {itemData.item.time }
                    </Text> 
                      </Button>
                       

                  </View>     
                )
                }}
                
                 />
                 }
                
               </View>


        {selectedOffer && 
        <View style= {styles.priceContainer}>

              <View style = {styles.priceTextContainer}>
              <Text style = {priceTextStyle}>
              {priceState + " DA"}
              </Text>

              </View>

              <View style = {styles.priceButtonContainer}>
                <Button 
                style = {priceButtonStyle} 
                mode = "contained" color = {Colors.secondary}>
               <Text style = {styles.bookButtonText}>Reserver</Text>
                </Button>
              </View>
              
              </View>} 
            
              </ScrollView>
      
          </ImageBackground>
      
       


     );    
};

StadiumBookingScreen.navigationOptions = ()=> {
      return {
        headerTransparent : true,
        title : "" ,
        headerBackTitle : " ",
        headerTintColor: "rgba(53, 53, 53,1)" 
      }

}


const styles= StyleSheet.create({
      container : {
          flex : 1 ,
          justifyContent : "flex-end",
          alignItems : "center",
          backgroundColor : Colors.background

      },
      componentsContainer : {
          height : "97%",
          width : "100%",
          backgroundColor :  "rgba(255, 255, 255, 0.85)",
          marginBottom : screen.height < 500 ? 0 : 10,
          marginTop :screen.height < 500 ? 0 :  5,
      },
//////////////////////////////////////////////////////////     
      stadiumCard : {
          backgroundColor : "rgba(255, 255, 255, 0.85)",
          width : "70%",
          height : "8%",
          alignSelf : "center",
          borderRadius : 15,
          alignItems : "center",
          justifyContent : "space-around",
          marginTop : screen.height >700 ? 45 :  25,
          flexDirection : "row"
      },
      
///////////////////////////////////////////////////////////      
      nameText :{
          fontSize : 20,
          fontFamily : "poppins-bold"
      },
      nameTextBig : {
        fontSize : 26,
        fontFamily : "poppins-bold"
      },
      nameTextSmall : {
        fontSize : 14,
        fontFamily : "poppins-bold"
      },
///////////////////////////////////////////////////////////      
      matchType : {
          width : "100%",
          height : 80 , 
          marginTop : 10,
          flexDirection : "row",
          alignItems : "center"
      },
      matchTypeBig : {
        width : "100%",
        height : 80 , 
        marginVertical : 20,
        flexDirection : "row",
        alignItems : "center"
    },
    matchTypeSmall : {
      width : "100%",
      height : 80 , 
      flexDirection : "row",
      alignItems : "center"
  },

///////////////////////////////////////////////////////////       
      picker : {
        backgroundColor : "white",
        width : 50,
        marginLeft : 25,
        
      },
   
     typeTextContainer : {   
       justifyContent : "center",
       marginLeft : 10
     },
/////////////////////////////////////////////////////////////
touchableIos : {
  
  marginLeft : 10,
  borderWidth : 1,
  borderColor : Colors.background,
  width : 75,
  padding : 5,
  alignItems : "center",
  borderRadius : 10
},
  ////////////////////////////////////////////////////
tempsDuMatch : { 
  fontFamily : "poppins-bold",
  fontSize : 15,
  color : Colors.background
},
tempsDuMatchBig : {
  fontFamily : "poppins-bold",
  fontSize : 22,
  color : Colors.background

},

tempsDuMatchSmall : {
  fontFamily : "poppins-bold",
      fontSize : 11,
      color : Colors.background
},
///////////////////////////////////////////////////////////     
     typeStyle : {
        fontFamily : "poppins-bold",
        fontSize : 15,
        color : Colors.background
     },
     typeStyleBig : {
      fontFamily : "poppins-bold",
      fontSize : 22,
      color : Colors.background

     },
     typeStyleSmall : {
      fontFamily : "poppins-bold",
      fontSize : 11,
      color : Colors.background

     },
 /////////////////////////////////////////////////////////  
     matchTime : {
        width : "100%",
        height : 120,
        justifyContent : "center",
     },
     matchTimeBig : {
      width : "100%",
        height : 120,
        justifyContent : "center",
      marginVertical : 15
   },
   matchTimeSmall : {
    width : "100%",
      height : 100,
      justifyContent : "center",
      
    
 },
//////////////////////////////////////////////////////////////////
     timeTextContainer : {
        marginLeft :10 ,
        
     },
   
///////////////////////////////////////////////////////////     
     timeText : {
      fontFamily : "poppins-bold",
        fontSize : 15,
        color : Colors.background,
        alignSelf : "center",
       
     },
     timeTextBig : {
      fontFamily : "poppins-bold",
        fontSize : 22,
        color : Colors.background,
        alignSelf : "center"
     },
     timeTextSmall : {
      fontFamily : "poppins-bold",
        fontSize : 11,
        color : Colors.background,
        alignSelf : "center"
     },
///////////////////////////////////////////////////////////     
     radioButtons : {
       flexDirection : "row",
       width : "40%",
       marginTop : 10,
       marginLeft : 5,
       
     } ,
     dateText : {
      marginVertical : 10,
      marginLeft : 10,
     },
//////////////////////////////////////////////////////////
     calendarCard : {
        width : 100,
        height : 100,
        backgroundColor : "white",
        alignItems : "center",
        marginHorizontal : 6,
        borderRadius : 12,
        justifyContent : "center",
        
     },

     calendarCardBig : {
      width : 140,
      height : 140,
      backgroundColor : "white",
      alignItems : "center",
      marginHorizontal : 6,
      borderRadius : 12,
      justifyContent : "center"
     },
     calendarCardSmall : {
      width : 70,
      height : 70,
      backgroundColor : "white",
      alignItems : "center",
      marginHorizontal : 6,
      borderRadius : 12,
      justifyContent : "center"
     },
//////////////////////////////////////////////////////////
     calendarDay : {
      fontFamily : "poppins-bold",
      fontSize : 17
    },
     calendarDayBig : {
        fontFamily : "poppins",
        fontSize : 24
     },
     calendarDaySmall : {
      fontFamily : "poppins",
      fontSize : 10
   },
////////////////////////////////////////////////////////////
     calendarDate : {
       fontFamily : "poppins-bold", 
       fontSize : 14
      },
      calendarDateBig : {
        fontFamily : "poppins", 
        fontSize : 18
       },
       calendarDateSmall : {
        fontFamily : "poppins", 
        fontSize : 8
       },
////////////////////////////////////////////////////////////
    hoursList : {
    

     
     },
     buttonContainer :{
     
     },
     timeButton : {
      
        
     },
     
 ///////////////////////////////////////////////////////
 partyTime: {
   fontSize : 12 
  },
  partyTimeBig : {
    fontSize : 18 
  },
  partyTimeSmall : {
    fontSize : 8
  },
 /////////////////////////////////////// ////////////////
     priceContainer : {
        marginTop :screen.width <350 ? 2 : 25,
        alignItems : "center"
     },
     priceButtonContainer : {
        overflow : "hidden",
        marginBottom : 15 ,
        
     },
   ////////////////////////////////////////////////////////  
     priceButton : {
      borderRadius : 15 ,
      justifyContent : "center"
     },
     priceButtonBig : {
      borderRadius : 50 ,
      justifyContent : "center",
      width : 200 ,
      height : 50
     },
     priceButtonSmall : {
      borderRadius : 50 ,
      justifyContent : "center",
     
      
     },
  ////////////////////////////////////////////////////////   
     priceText :{
       fontSize : 28 , 
       fontFamily : "poppins-bold" , 
       color : "black"
      },

       priceTextBig : {
        fontSize : 34, 
        fontFamily : "poppins-bold" , 
        color : "black",
        padding : 5

       },
       priceTextSmall: {
        fontSize : 16, 
        fontFamily : "poppins-bold" , 
        color : "black",
        
       },
////////////////////////////////////////////////////
bookButtonText : {
  fontSize : screen.width < 350 ? 10 : 14
} ,

noTimeText : {
  fontSize : screen.width < 350 ? 14 : 20 , 
  color : "black", 
  alignSelf : "center",
  fontFamily : "poppins"}

});

export default StadiumBookingScreen;