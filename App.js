import React, {useState} from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk";

import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import FootNavigation from './navigation/footNavigation';


import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import offersReducer from "./store/reducers/offers";


enableScreens();

//Create the store and the combine reducers
const rootReducer = combineReducers({
offers : offersReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


const fetchFonts = () =>{
  return Font.loadAsync({
     'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
     'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });
}



export default function App() {
   
   const [fontLoaded, setFontLoaded] = useState(false);

   if(!fontLoaded){
     return(
       <AppLoading 
        startAsync={fetchFonts}
        onFinish={()=> setFontLoaded(true)}
       />
     )
   }

  return (
       <Provider store={store}><FootNavigation /></Provider>
  );
}

