import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Picker,ImageBackground} from 'react-native';
import { RadioButton , Button} from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Colors from "../../../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

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
       color : "rgba(54, 187, 117,0.9)" });
     
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


    return(
      
      <ImageBackground source = {require ("../../../assets/images/smoke3.jpg")} style ={styles.container} blurRadius = {0.5}>
          <View style = {styles.componentsContainer}>
      
                  <View style = {styles.stadiumCard}>
                  <Ionicons name="md-football" size={22} color={Colors.primary} />
                      <Text style ={styles.nameText}>
                      FootFive Blida
                      </Text>
                      <Ionicons name="md-football" size={22} color={Colors.primary} />
                  </View>

                          {/* Match Type Part : Start */}
                  <View style = {styles.matchType}>

                    <View style = {styles.typeTextContainer}>
                          <Text style = {styles.typeStyle}>
                          Type du Match :  
                          </Text>
                    </View>

                      <Picker 
                      style = {styles.picker}
                      onValueChange = {matchTypeHandler}
                      selectedValue = {matchTypeState}
                      >
                   
                      {allStadiums.map ( (item,index) => 
                      <Picker.Item 
                      key = {index} 
                      label={item} 
                      value={item} />)}

                      </Picker>

                  </View>
                    {/* Match Type Part : End */}

                      {/* Match Time Part : Start */}
                  <View style = {styles.matchTime}>
                 
                 <View style = {styles.timeTextContainer}>
                  
                   <Text style = {styles.timeText}>Temps du Match : </Text>
                 
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
                               marginHorizontal : 5 
                               }} 
                             key ={index}>

                          <Text style = {styles.timeText}>
                          {element}
                           </Text>
                          <RadioButton 
                          value={element} 
                           color = {Colors.primary}
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
                        
                        <Text style = {styles.timeText}>
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
                            
                          <View style = {styles.calendarCard}>
                           <Text style ={{fontFamily : "poppins"}} >
                              {itemData.item.day}
                            </Text>
                            
                              <RadioButton  
                              value={itemData.item} 
                              color = {Colors.primary}
                              />

                              <Text style ={{fontFamily : "poppins", fontSize : 12}} >
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
            <Text style = {{fontSize :20 , color : "black", alignSelf : "center",fontFamily : "poppins"}}>
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
                    {/* <Button 
                    title = {itemData.item.time } 
                    color = {buttonState.id ===itemData.item.id ? buttonState.color : ""}
                    
                    onPress ={()=>buttonsHandler(itemData.item.id)} */}
                      
                  
                      
             <Button
                  contentStyle={styles.timeButton}
                  labelStyle = {{color : "black" }}
                  style={{borderColor:Colors.primary , 
                  borderWidth : 0.5 , 
                  backgroundColor : buttonState.id ===itemData.item.time ? buttonState.color : "white",
                  width : "90%",
                  borderRadius : 25,
                  marginHorizontal : 5
                  }} 
                  
                  onPress ={()=>{
                    buttonsHandler(itemData.item.time)
                    setSelectedHour(itemData.item.time);
                    }}
                  >
                    <Text style = {{fontSize : 12 }}>
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
              <Text style = {{fontSize : 22 , fontFamily : "poppins" , color : "black"}}>
              {priceState + " DA"}
              </Text>

              </View>

              <View style = {styles.priceButtonContainer}>
                <Button style = { styles.priceButton} mode = "contained" color = {Colors.primary}>
                Reserver
                </Button>
              </View>
              
              </View>} 

          </View>

           
          </ImageBackground>
      
      


     );    
};


const styles= StyleSheet.create({
      container : {
          flex : 1 ,
          justifyContent : "flex-end",
          alignItems : "center",
          backgroundColor : "#323232"

      },
      componentsContainer : {
          height : "93%",
          width : "98%",
          backgroundColor :  "rgba(255, 255, 255, 0.75)",
          borderRadius : 25,
          marginBottom : 11

      },
      stadiumCard : {
          backgroundColor : "rgba(255, 255, 255, 0.85)",
          width : "90%",
          height : "7%",
          alignSelf : "center",
          borderRadius : 15,
          alignItems : "center",
          justifyContent : "space-around",
          marginTop : 25,
          flexDirection : "row"

      },
      nameText :{
          fontSize : 20,
          fontFamily : "poppins-bold"
      },
      matchType : {
          width : "100%",
          height : 80 , 
          marginTop : 10,
          flexDirection : "row",
          alignItems : "center"
          
      },
      picker : {
        backgroundColor : "white",
        width : "11%",
        marginLeft : 25,
        
      },
     typeTextContainer : {   
       justifyContent : "center",
       marginLeft : 6
     },
     typeStyle : {
        fontFamily : "poppins-bold",
        fontSize : 15,
        color : "black"

     },
     matchTime : {
        
        width : "100%",
        height : 120,
        justifyContent : "center",
     },

     timeTextContainer : {
        marginLeft : 6,
        
     },
     timeText : {
      fontFamily : "poppins-bold",
        fontSize : 15,
        color : "black"
     },
     radioButtons : {
       flexDirection : "row",
       width : "40%",
       marginTop : 10,
       marginLeft : 15
     } ,
     dateText : {
      marginVertical : 10,
      marginLeft : 6,
     },
     calendarCard : {
        width : 80,
        height : 80,
        backgroundColor : "white",
        alignItems : "center",
        marginHorizontal : 6,
        borderRadius : 12

     },
     hoursList : {
       marginTop : 6,
       
       paddingVertical : 8

     },
     buttonContainer :{
    
      
     },
     timeButton : {
    
        
     },
     priceContainer : {
      
        marginTop :25,
        alignItems : "center"
     },
     priceButtonContainer : {
       
        overflow : "hidden",
        marginBottom : 15

     },
     priceButton : {
      borderRadius : 15
     }
   

});

export default StadiumBookingScreen;