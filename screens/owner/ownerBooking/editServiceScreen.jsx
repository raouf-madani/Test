import React, { useState,useEffect } from 'react';
import { StyleSheet,View,Switch,Text,ScrollView} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import { DataTable,RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {TextInput} from 'react-native-paper';
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';


const EditServiceScreen = props =>{
 
     
    //radio group buttons state for Match Type 
    const [matchType, setMatchType] = useState();
    //radio group buttons state for Match Time 
    const [matchTime,setMatchTime]= useState();

    //Switch buttons states for slots
    const [switchSat, setSwitchSat] = useState(false);
    const [switchSun, setSwitchSun] = useState(false);
    const [switchMon, setSwitchMon] = useState(false);
    const [switchTue, setSwitchTue] = useState(false);
    const [switchWed, setSwitchWed] = useState(false);
    const [switchThu, setSwitchThu] = useState(false);
    const [switchFri, setSwitchFri] = useState(false);
  
    //Text states for 7 days isOpenSat ? date : Ouvert
    // isCloseSat ? date : fermé
    //Open Date states for 7 days. isOpenSat ? openTimeSat : Ouvert
    //Close Date states for 7 days. isCloseSat ? closeTimeSat : Fermé
    const [sat, setSat] = useState({isOpenSat:false,openTimeSat:'ouvert'});
    const [satClose, setSatClose] = useState({isCloseSat:false,closeTimeSat:'ouvert'});
    const [sun, setSun] = useState({isOpenSun:false,openTimeSun:'ouvert'});
    const [sunClose, setSunClose] = useState({isCloseSun:false,closeTimeSun:'ouvert'});
    const [mon, setMon] = useState({isOpenMon:false,openTimeMon:'ouvert'});
    const [monClose, setMonClose] = useState({isCloseMon:false,closeTimeMon:'ouvert'});
    const [tue, setTue] = useState({isOpenTue:false,openTimeTue:'ouvert'});
    const [tueClose, setTueClose] = useState({isCloseTue:false,closeTimeTue:'ouvert'});
    const [wed, setWed] = useState({isOpenWed:false,openTimeWed:'ouvert'});
    const [wedClose, setWedClose] = useState({isCloseWed:false,closeTimeWed:'ouvert'});
    const [thu, setThu] = useState({isOpenThu:false,openTimeThu:'ouvert'});
    const [thuClose, setThuClose] = useState({isCloseThu:false,openTimeThu:'ouvert'});
    const [fri, setFri] = useState({isOpenFri:false,openTimeFri:'ouvert'});
    const [friClose, setFriClose] = useState({isCloseFri:false,closeTimeFri:'ouvert'});
    
    //Date Picker states
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    //id state 
    const [id,setId] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

     //if the Saturday switch is off >>> initialState
     useEffect(()=>{
       if(!switchSat){
          setSat({...sat,isOpenSat:false,openTimeSat:'Ouvert'});
          setSatClose({...satClose,isCloseSat:false,closeTimeSat:'Fermé'})
       }if (!switchSun){
          setSun({...sun,isOpenSun:false,openTimeSun:'Ouvert'});
          setSunClose({...sunClose,isCloseSun:false,closeTimeSun:'Fermé'});
       }if (!switchMon){
          setMon({...mon,isOpenMon:false,openTimeMon:'Ouvert'});
          setMonClose({...monClose,isCloseMon:false,closeTimeMon:'Fermé'});
       }if (!switchTue){
          setTue({...tue,isOpenTue:false,openTimeTue:'Ouvert'});
          setTueClose({...tueClose,isCloseTue:false,closeTimeTue:'Fermé'});
       }if(!switchWed){
          setWed({...wed,isOpenWed:false,openTimeWed:'Ouvert'}); 
          setWedClose({...wedClose,isCloseWed:false,closeTimeWed:'Fermé'});
       }if(!switchThu){
          setThu({...thu,isOpenThu:false,openTimeThu:'Ouvert'});
          setThuClose({...thuClose,isCloseThu:false,closeTimeThu:'Fermé'});
       }if(!switchFri){
          setFri({...fri,isOpenFri:false,openTimeFri:'Ouvert'});
          setFriClose({...friClose,isCloseFri:false,closeTimeFri:'Fermé'});
       }    
         
     },[switchSat,switchSun,switchMon,switchTue,switchWed,switchThu,switchFri]);
    
     
    const handleConfirm = (date) => {
        
          hideDatePicker();
          //set the hours after confirming it in the datePicker
          if(id === 'sat'){
            setSat({...sat,openTimeSat:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='satClose'){
            setSatClose({...satClose,closeTimeSat:date.getHours()+'h'+date.getMinutes()});
          }else if (id==='sun'){
            setSun({...sun,openTimeSun:date.getHours()+'h'+date.getMinutes()}); 
          }else if(id==='sunClose'){
            setSunClose({...sunClose,closeTimeSun:date.getHours()+'h'+date.getMinutes()});
          }else if (id==='mon'){
            setMon({...mon,openTimeMon:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='monClose'){
            setMonClose({...monClose,closeTimeMon:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='tue'){
            setTue({...tue,openTimeTue:date.getHours()+'h'+date.getMinutes()});
          }else if(id === 'tueClose'){
            setTueClose({...tueClose,closeTimeTue:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='wed'){
            setWed({...wed,openTimeWed:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='wedClose'){
            setWedClose({...wedClose,closeTimeWed:date.getHours()+'h'+date.getMinutes()});
          }else if(id==='thu'){
            setThu({...thu,openTimeThu:date.getHours()+'h'+date.getMinutes()});
          }else if (id === 'thuClose'){
            setThuClose({...thuClose,closeTimeThu:date.getHours()+'h'+date.getMinutes()});
          }else if(id === 'fri'){
            setFri({...fri,openTimeFri:date.getHours()+'h'+date.getMinutes()});
          }else if(id === 'friClose'){
            setFriClose({...friClose,closeTimeFri:date.getHours()+'h'+date.getMinutes()});
          }
        
      };
 
   
    return(
           
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>Type du match :</Text>
        </View>
        <View style={styles.typeTimeMatchContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.radioContainer}>
                   <RadioButton.Group
                    value = {matchType}
                    onValueChange = {prevValue=>setMatchType(prevValue)}>
                      <View style={styles.radioTypeMatch}>
                        <Text>5 vs 5</Text>
                        <RadioButton color={Colors.primary} value="5 vs 5"/>
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>6 vs 6</Text>
                        <RadioButton color={Colors.primary} value="6 vs 6" />
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>7 vs 7</Text>
                        <RadioButton color={Colors.primary} value="7 vs 7" />
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>8 vs 8</Text>
                        <RadioButton color={Colors.primary} value="8 vs 8" />
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>9 vs 9</Text>
                        <RadioButton color={Colors.primary} value="9 vs 9" />
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>10 vs 10</Text>
                        <RadioButton color={Colors.primary} value="10 vs 10" />
                      </View>

                      <View style={styles.radioTypeMatch}>
                        <Text>11 vs 11</Text>
                        <RadioButton color={Colors.primary} value="11 vs 11" />
                      </View>
             
                  </RadioButton.Group>
                </View>
            </ScrollView> 
        </View>

        <View style={styles.titleContainer2}>
            <Text style={styles.title}>Durée du match :</Text>
        </View>
        <View style={styles.typeTimeMatchContainer}>
            <RadioButton.Group
              value = {matchTime}
              onValueChange = {prevValue=>setMatchTime(prevValue)}>
              <View style={styles.radioTypeMatch}>
                <Text>1h00</Text>
                <RadioButton color={Colors.primary} value="1h"/>
              </View>

              <View style={styles.radioTypeMatch}>
                <Text>1h30</Text>
                <RadioButton color={Colors.primary} value="1h30" />
              </View>

              <View style={styles.radioTypeMatch}>
                <Text>2h00</Text>
                <RadioButton color={Colors.primary} value="2h" />
              </View>
            </RadioButton.Group>
        </View>

        <View style={styles.titleContainer2}>
            <Text style={styles.title}>Créneaux :</Text>
        </View>
        <DataTable>
        <DataTable.Row>
          <Switch value={switchSat} onValueChange={()=>setSwitchSat(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchSat? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Sam</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchSat){showDatePicker();setSat({...sat,isOpenSat:true});setId('sat');} }}>{sat.isOpenSat === true ? sat.openTimeSat: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{if(switchSat){showDatePicker();setSatClose({...satClose,isCloseSat:true});setId('satClose')}}}>{satClose.isCloseSat ? satClose.closeTimeSat : 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchSun} onValueChange={()=>setSwitchSun(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchSun ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Dim</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchSun){showDatePicker();setSun({...sun,isOpenSun:true});setId('sun');} }}>{sun.isOpenSun ? sun.openTimeSun: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchSun){showDatePicker();setSunClose({...sunClose,isCloseSun:true});setId('sunClose');} }}>{sunClose.isCloseSun ? sunClose.closeTimeSun : 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchMon} onValueChange={()=>setSwitchMon(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchMon ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Lun</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchMon){showDatePicker();setMon({...mon,isOpenMon:true});setId('mon');} }}>{mon.isOpenMon ? mon.openTimeMon: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchMon){showDatePicker();setMonClose({...monClose,isCloseMon:true});setId('monClose');} }}>{monClose.isCloseMon ? monClose.closeTimeMon : 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchTue} onValueChange={()=>setSwitchTue(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchTue ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Mar</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchTue){showDatePicker();setTue({...tue,isOpenTue:true});setId('tue');} }}>{tue.isOpenTue ? tue.openTimeTue: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchTue){showDatePicker();setTueClose({...tueClose,isCloseTue:true});setId('tueClose');} }}>{tueClose.isCloseTue ? tueClose.closeTimeTue : 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchWed} onValueChange={()=>setSwitchWed(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchWed ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Mer</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchWed){showDatePicker();setWed({...wed,isOpenWed:true});setId('wed');} }}>{wed.isOpenWed ? wed.openTimeWed: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchWed){showDatePicker();setWedClose({...wedClose,isCloseWed:true});setId('wedClose');} }}>{wedClose.isCloseWed ? wedClose.closeTimeWed: 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchThu} onValueChange={()=>setSwitchThu(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchThu ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Jeu</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchThu){showDatePicker();setThu({...thu,isOpenThu:true});setId('thu');} }}>{thu.isOpenThu ? thu.openTimeThu: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchThu){showDatePicker();setThuClose({...thuClose,isCloseThu:true});setId('thuClose');} }}>{thuClose.isCloseThu ? thuClose.closeTimeThu: 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Switch value={switchFri} onValueChange={()=>setSwitchFri(prevValue=>!prevValue)} trackColor={{true:'rgba(198,34,37,0.8)'}} thumbColor={switchFri ? Colors.primary: 'white'}/><DataTable.Cell><Text style={styles.titleNoBold}>Ven</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.titleNoBold} onPress={()=>{ if(switchFri){showDatePicker();setFri({...fri,isOpenFri:true});setId('fri');} }}>{fri.isOpenFri ? fri.openTimeFri: 'Ouvert  -  '}</Text><Text style={styles.titleNoBold} onPress={()=>{ if(switchFri){showDatePicker();setFriClose({...friClose,isCloseFri:true});setId('friClose');} }}>{friClose.isCloseFri ? friClose.closeTimeFri: 'Fermé'}</Text></DataTable.Cell>
        </DataTable.Row>
        </DataTable>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={true}
        />

        <View style={styles.titleContainer2}>
            <Text style={styles.title}>Tarif :</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
              mode='outlined'
              placeholder='DA/Equipe'
              theme={{colors: {primary:'white',text:'white',placeholder:'white'}}}
              style={{backgroundColor:'transparent'}}
              underlineColor='white'
              keyboardType='decimal-pad'
          />
        </View>

        </ScrollView>
    </View>
     );    
};


 EditServiceScreen.navigationOptions= navData => {
   
    return {
         headerRight : () =>(
            <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
              <Item title = "save" 
                iconName = {Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}        
              />
            </HeaderButtons>),
            headerTitle:'Ajouter Service',
            headerTitleStyle:{
              fontFamily:'poppins'
            }
    };

 };

const styles= StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:Colors.background,
    width:'100%',
    paddingVertical:40
},
titleContainer:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    marginTop:70,
    paddingVertical:5,
    paddingHorizontal:10,
},
titleContainer2:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingHorizontal:10,
    marginTop:10,
    paddingVertical:5
},
title:{
  fontFamily:'poppins-bold',
  color:'white'
},
titleNoBold:{
  fontFamily:'poppins',
  color:'white'
},
typeTimeMatchContainer:{
    width : "95%" ,
    height : 90,
    backgroundColor : "rgba(255, 255, 255, 0.9)",
    flexDirection : "row",
    justifyContent : "space-around",
    overflow : "hidden",
    alignSelf : "center",
    padding : 20,
    borderRadius : 10
},
radioContainer:{
    flexDirection:'row',
    paddingHorizontal:10
},
radioTypeMatch:{
    marginHorizontal:16
},
text:{
    fontFamily:'poppins',
    color:"#696969"
},
textInputContainer:{
  paddingHorizontal:10
}
});

export default EditServiceScreen;