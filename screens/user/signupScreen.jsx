import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,KeyboardAvoidingView,Text,Platform} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../constants/Colors';

const SignupScreen = props =>{

    const [lastName,setLastName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
       <ImageBackground source={require('../../assets/images/player.jpg')} style={styles.bigBackgroundImage} blurRadius={0}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} style={styles.overlayBackground}>
            <ScrollView>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>سجل الآن</Text>
              </View>
              <View style={styles.signupContainer}>
                <View style={styles.inputsContainer}>
                  <TextInput
                    mode='flat'
                    label='اللقب'
                    placeholder='اكتب شيئا هنا'
                    value={lastName}
                    onChangeText={prevText=>setLastName(prevText)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
                  <TextInput
                    mode='flat'
                    label='الإسم'
                    placeholder='اكتب شيئا هنا'
                    value={firstName}
                    onChangeText={prevText=>setFirstName(prevText)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
                  <TextInput
                    mode='flat'
                    label='رقم الهاتف'
                    placeholder='أدخل رقم هاتفك'
                    value={phone}
                    onChangeText={prevValue=>setPhone(prevValue)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
                  <TextInput
                    mode='flat'
                    label='كلمة السر'
                    placeholder='أدخل كلمة السر'
                    value={password}
                    onChangeText={prevValue=>setPassword(prevValue)}
                    theme={{colors: {primary:Colors.primary,text:'white',placeholder:'white'}}}
                    style={{backgroundColor:'transparent'}}
                    underlineColor='white'
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    <Button
                    theme={{colors: {primary:Colors.primary}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.primary}}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20, borderColor:'white'}}
                    icon='camera'
                    dark={true}
                    >إنطلق
                    </Button>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                    theme={{colors: {primary:Colors.orange}}} 
                    mode={Platform.OS === 'android' ? "contained" : "outlined"}
                    labelStyle={{fontSize:16,fontFamily:'poppins', color: Platform.OS === 'android' ? 'white' : Colors.orange}}
                    contentStyle={{width:'100%'}}
                    style={{borderRadius:20, borderColor:'white'}}
                    icon='camera'
                    dark={true}
                    > لا, لدي حساب
                    </Button>
                  </View>
                </View>
              </View>
            </ScrollView>
        </KeyboardAvoidingView> 
       </ImageBackground>
      </View>

     );    
};


const styles= StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
   },
   bigBackgroundImage:{
    flex:1,
    resizeMode:'cover',
    height:'100%',
    width:'100%',
  },
  overlayBackground:{
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    flex:1
  },
  titleContainer:{
    alignItems:'center',
    marginTop:40,
    borderBottomColor:Colors.secondary,
    borderBottomWidth:1,
    alignSelf:'center'
  },
  title:{
    color:Colors.primary,
    fontFamily:'poppins-bold',
    fontSize:50
  },
  signupContainer:{
    padding:20
  },
  inputsContainer:{
    marginBottom:30
  },
  buttonsContainer:{
    marginHorizontal:40
  },
  buttonContainer:{
    paddingVertical:5
  }
   

});

export default SignupScreen;