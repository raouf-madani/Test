import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Picker,Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

let offers = [
  {offer1 :
     { id : "1",
      horraires :{start : "01:00", end : "05:00" },
      stadiumsNumber : 3 ,
      stadiumsType : ["5x5","6x6"]}
  },
  {
    id : "2",
    horraires :{start : "01:00", end : "05:00" },
    stadiumsNumber : 2 ,
    stadiumsType : ["7x7"]
}

];



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
];

for(let i=0 ; i<=10 ; i++){
    days.push(
      {
     id : i.toString() ,
     date : moment().add(i, 'days').format('YYYY-MM-DD')},
      
      
      );

}

const StadiumBookingScreen = props =>{

    const [matchTypeState , setMatchType] = useState();
    const [matchTimeState , setMatchTime] = useState();
    const [selectedDateState , setSelectedDate] = useState();

    const [selectedTimeState , setSelectedTime] = useState();
    const [showState , setShow] = useState(false);

    const [buttonState , setButtonState] = useState({
              id : 0 ,
              color : ""
    });

    const matchTypeHandler = (itemValue, itemIndex) => {
          setMatchType(itemValue);
    };

    const matchTimeHandler = (itemValue)=>{
        setMatchTime (itemValue);
    };

    const selectedDateHandler = (v)=> {
        setSelectedDate(v);

    };

    const showHandler = ()=>{

        setShow(lastValue => !lastValue);

    };
    const handleConfirm = date => {
      console.log("A date has been picked: ", date);
      showHandler();
    };

    const buttonsHandler = (e)=> {
      setButtonState({
        id : e ,
       color : "red" });
     
    };
    

    return(
      <View style={styles.container}>
          <View style = {styles.componentsContainer}>
                  <View style = {styles.stadiumCard}>
                      <Text>FootFive Blida</Text>

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
                        <Picker.Item label="5vs5" value="5vs5" />
                        <Picker.Item label="6vs6" value="6vs6" />
                        <Picker.Item label="7vs7" value="7vs7" />
                        <Picker.Item label="8vs8" value="8vs8" />
                        <Picker.Item label="9vs9" value="9vs9" />
                        <Picker.Item label="10vs10" value="10vs10" />

                      </Picker>

                  </View>
                    {/* Match Type Part : End */}

                      {/* Match Time Part : Start */}
                  <View style = {styles.matchTime}>
                 
                 <View style = {styles.timeText}>
                  
                   <Text>Temps du Match : </Text>
                 
                 </View> 

                  <View style = {styles.radioButtons}>
                      <RadioButton.Group
                        value = {matchTimeState}
                        onValueChange = {matchTimeHandler}
                      >
                        {/* RadioButtons Elements : Start */}
                        <View>
                          <Text>1h</Text>
                          <RadioButton value="1h" 
                            
                          />
                        </View>

                        <View>
                          <Text>1h30</Text>
                          <RadioButton value="1h30" />
                        </View>

                        <View>
                          <Text>2h</Text>
                          <RadioButton value="2h" />
                        </View>
                            {/* RadioButtons Elements : End */}
                      </RadioButton.Group>
                  </View>
                  </View>
                  {/* Match Time Part : End */}


                    <View  style = {styles.customCalendar}>
                    <Text>Date du match</Text>
                    <RadioButton.Group
                        value = {selectedDateState}
                        onValueChange = {selectedDateHandler }
                      >
                        {/* RadioButtons Elements : Start */}
                      
                        <FlatList
                            data = {days}
                            horizontal ={ true}
                            renderItem = {(itemData)=>{
                             
                            return (
                            
                          <View style = {styles.calendarCard}>
                              <Text>{itemData.item.date}</Text>
                            
                              <RadioButton value={itemData.item.date} />
                          
                        </View>)
                            }
                            }
                        
                         /> 

                            {/* RadioButtons Elements : End */}
                      </RadioButton.Group>

                    </View>

               <View style = {{marginTop : 20}}>
                
                <FlatList
                horizontal
                data = {hours}

                renderItem = {(itemData)=>{

                return (
                      <Button title = {itemData.item.time} 
                      color = {buttonState.id ===itemData.item.id ? buttonState.color : ""}
                        onPress ={()=>buttonsHandler(itemData.item.id)}

                      />
                )
                }}
                
                 />
                
               </View>


          </View>

           
          
      </View>
      


     );    
};


const styles= StyleSheet.create({
      container : {
          flex : 1 ,
          justifyContent : "flex-end"

      },
      componentsContainer : {
          
          height : "89%"

      },
      stadiumCard : {
          backgroundColor : "white",
          width : "90%",
          height : 40,
          alignSelf : "center",
          borderRadius : 5,
          alignItems : "center",
          justifyContent : "center"

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
        width : "15%",
        marginLeft : 25
      },
     typeTextContainer : {
       
       height : 50,
       justifyContent : "center",
       marginLeft : 6
     },
     typeStyle : {
        

     },
     matchTime : {
        backgroundColor : "white",
        width : "100%",
        height : 120,
        justifyContent : "center"
     },

     timeText : {
        marginLeft : 5
     },
     radioButtons : {
       flexDirection : "row",
       justifyContent : "space-around",
       width : "40%",
       marginTop : 10
     } ,

     calendarContainer : {

        alignItems : "center",
        flex:1 ,
       marginBottom : 220
     },
     calendarCard : {
        width : 80,
        height : 80,
        backgroundColor : "red",
        alignItems : "center"

     }
   

});

export default StadiumBookingScreen;