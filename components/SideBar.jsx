import React from "react";
import {Ionicons} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Text , StyleSheet, ImageBackground, Image, View } from "react-native";
import Colors from "../constants/Colors";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { LinearGradient } from "expo-linear-gradient";


const SideBar = (props) => {

    return( 
<View style = {{flex : 1}}>
<ImageBackground 
source = {require("../assets/images/hero.jpg")} 
style = {{width : undefined , padding : 16 , paddingTop : 48}}
blurRadius = {3}
>

<Image 
source = {require("../assets/images/profile.jpg")} 
style = {styles.profile}

/>

<Text style = {styles.name}>Donald Trump</Text>

<View style = {{flexDirection : "row"}}>
    <Text style = {styles.numberOfBookings}> 15 Bookings </Text>
    <Ionicons name = "md-football" size = {19} color = {Colors.grey} />

</View>

</ImageBackground>

<LinearGradient colors={['#f5f7fa', '#c3cfe2']} style = {styles.gradient}>
<View style = {styles.container}>

<DrawerNavigatorItems {...props}/>

</View>
</LinearGradient>


</View>


);

};

const styles = StyleSheet.create({
container : {
    flex : 1
} ,

profile : {
    width : 80 ,
    height : 80 ,
    borderRadius : 40,
    borderWidth : 3 ,
    borderColor : "#FFF"

},
name : {
    color : "#FFF",
    fontSize : 20 ,
    fontWeight : "800",
    marginVertical : 8

},
numberOfBookings : {
    color : Colors.grey,
    fontSize : 14 ,
    marginRight : 4,
    fontFamily : "poppins-bold"
},
gradient : {
   
    flex : 1
}


});

export default SideBar;