import React from 'react';
import { Overlay } from 'react-native-elements';
import { Text, View, Button,StyleSheet } from 'react-native'; 

const BookingDetail = (props)=>{
return(
<View>

<Overlay  isVisible={props.isVisible} >
<View>
        <Text>Hello from Overlay!</Text>
        </View>
</Overlay>

</View>

)


};


export default BookingDetail;